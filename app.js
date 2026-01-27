// app.js
(() => {
    const $ = (sel) => document.querySelector(sel);
  
    const state = {
      lang: window.MENU?.options?.defaultLang || "fa",
    };
  
    function isRTL(lang) {
      return lang === "fa";
    }
  
    function formatPrice(priceNumber, lang) {
      const locale = lang === "fa" ? "fa-IR" : "en-US";
      const nf = new Intl.NumberFormat(locale);
  
      // 通貨記号を出すならここを変更（IRRの記号は環境差が出るので要件次第）
      const formatted = nf.format(priceNumber);
  
      if (!MENU.options.showCurrencySymbol) return formatted;
  
      // 例：IRRを後置したい場合（要件に応じて）
      return `${formatted} ${MENU.options.currency}`;
    }
  
    function getText(obj, lang) {
      // {en:"",fa:""} の形式を想定。無ければそのまま返す
      if (obj && typeof obj === "object") return obj[lang] ?? obj.en ?? "";
      return obj ?? "";
    }
  
    function resolveImageSrc(item) {
      // item.image があればそれを使う（"ramen-shoyu.webp" など相対ファイル名推奨）
      if (item.image) {
        // フルURLの場合はそのまま
        if (/^https?:\/\//.test(item.image)) return item.image;
        return MENU.options.imageBasePath + item.image;
      }
      // デフォルト：id.webp
      return `${MENU.options.imageBasePath}${item.id}.${MENU.options.imageDefaultExt}`;
    }
  
    function buildSections(lang) {
      const root = $("#sections-root");
      root.innerHTML = "";
  
      MENU.categories.forEach((cat) => {
        const section = document.createElement("section");
        section.className = "section";
        section.innerHTML = `
          <h2 class="section__title" id="title-${cat.key}">
            <span aria-hidden="true">${cat.icon}</span>
            <span>${MENU.i18n[lang].sections[cat.key] ?? cat.key}</span>
          </h2>
          <div class="grid" id="list-${cat.key}"></div>
        `;
        root.appendChild(section);
  
        const list = section.querySelector(`#list-${cat.key}`);
        list.innerHTML = cat.items.map((item) => renderCard(item, lang)).join("");
      });
    }
  
    function renderCard(item, lang) {
      const name = escapeHtml(getText(item.name, lang));
      const desc = escapeHtml(getText(item.descShort, lang));
      const price = formatPrice(item.price, lang);
      const imgSrc = resolveImageSrc(item);
    
      const isComingSoon = item.status === "comingSoon";
      const comingSoonLabel = escapeHtml(MENU.i18n[lang]?.labels?.comingSoon || "COMING SOON");
    
      return `
        <button type="button" class="card ${isComingSoon ? "is-coming-soon" : ""}" data-item-id="${item.id}" aria-label="${name}">
          <div class="card__media">
            <img class="card__img" src="${imgSrc}" alt="${name}" loading="lazy"
                 onerror="this.onerror=null;this.src='${MENU.options.imageFallback}'">
            ${isComingSoon ? `<div class="card__flag"><span>${comingSoonLabel}</span></div>` : ""}
          </div>
    
          <div class="card__body">
            <div>
              <div class="card__name">${name}</div>
              <div class="card__desc">${desc}</div>
            </div>
            <div class="card__foot">
              <span class="price">${price}</span>
            </div>
          </div>
        </button>
      `;
    }
    
  
    function applyLang(lang) {
      state.lang = lang;
  
      document.body.classList.toggle("is-rtl", isRTL(lang));
      document.documentElement.lang = lang;
  
      // commitment / footer
      $("#commit-text").textContent = MENU.i18n[lang].commitment;
      $("#footer-note").textContent = MENU.i18n[lang].footer;
  
      // sections
      buildSections(lang);
  
      // tabs state
      const btnEn = $("#btn-en");
      const btnFa = $("#btn-fa");
      btnEn.classList.toggle("is-active", lang === "en");
      btnFa.classList.toggle("is-active", lang === "fa");
      btnEn.setAttribute("aria-selected", String(lang === "en"));
      btnFa.setAttribute("aria-selected", String(lang === "fa"));
    }
  
    // ---- Modal ----
    const modal = $("#item-modal");
    const overlay = $("#modal-overlay");
  
    function findItemById(id) {
      for (const cat of MENU.categories) {
        const hit = cat.items.find((x) => x.id === id);
        if (hit) return { item: hit, category: cat };
      }
      return null;
    }
  
    function openItemModal(itemId) {
      const found = findItemById(itemId);
      if (!found) return;
  
      const { item } = found;
      const lang = state.lang;
  
      const title = getText(item.name, lang);
      const desc = getText(item.descLong, lang) || getText(item.descShort, lang);
      const price = formatPrice(item.price, lang);
  
      $("#modal-title").textContent = title;
      $("#modal-desc").textContent = desc;
      $("#modal-price").textContent = price;
  
      const img = $("#modal-image");
      img.src = resolveImageSrc(item);
      img.alt = title;
      img.onerror = () => { img.onerror = null; img.src = MENU.options.imageFallback; };
  
      // meta（将来拡張：アレルゲン、辛さ、人気、売り切れ等）
      const meta = $("#modal-meta");
      meta.innerHTML = "";
      if (Array.isArray(item.tags) && item.tags.length) {
        item.tags.forEach((t) => {
          const pill = document.createElement("span");
          pill.className = "meta-pill";
          pill.textContent = t;
          meta.appendChild(pill);
        });
      }
  
      overlay.hidden = false;
      // <dialog>対応ブラウザ向け
      if (typeof modal.showModal === "function") {
        modal.showModal();
      } else {
        // 古い環境：最低限のフォールバック（必要ならポリフィル推奨）
        modal.removeAttribute("hidden");
      }
    }
  
    function closeModal() {
      overlay.hidden = true;
      if (modal.open) modal.close();
    }
  
    // ---- Events ----
    document.addEventListener("click", (e) => {
      const langBtn = e.target.closest("[data-lang]");
      if (langBtn) {
        applyLang(langBtn.dataset.lang);
        return;
      }
  
      const cardBtn = e.target.closest("[data-item-id]");
      if (cardBtn) {
        openItemModal(cardBtn.dataset.itemId);
        return;
      }
  
      if (e.target === overlay) {
        closeModal();
      }
    });
  
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.open) closeModal();
    });
  
    modal.addEventListener("close", () => {
      overlay.hidden = true;
    });
  
    // ---- utils ----
    function escapeHtml(str) {
      return String(str)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
    }
  
    // init
    applyLang(state.lang);
  })();
  
