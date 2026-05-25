// menu-data.js
// 価格は “数値” で持つ：表示は app.js で locale に合わせてフォーマット
window.MENU = {
    options: {
      defaultLang: "fa",
      currency: "IRR",        // 表示したくないなら app.js 側で非表示化可能
      showCurrencySymbol: false,
      imageBasePath: "./assets/menu/",
      imageDefaultExt: "jpg",
      imageFallback: "./assets/menu/noimage.png",
    },
  
    i18n: {
      en: {
        commitment: "The transparent umami of chicken. We only use our owner's proud, pure chicken broth—light yet deeply flavorful.",
        sections: {
          ramen: "Ramen",
          bowls: "Rice Bowls",
          sides: "Side Dishes",
          toppings: "Toppings",
          desserts: "Desserts",
          drinks: "Drinks",
        },
        footer: "All prices are exclusive of tax. A separate 10% consumption tax will be charged.",
        labels: {
          comingSoon: "COMING SOON" // en
        }
      },
      fa: {
        commitment: "طعم اومامی شفاف مرغ. ما فقط از آب مرغ خالص استفاده می‌کنیم—سبک و در عین حال عمیقاً خوشمزه.",
        sections: {
          ramen: "رامن",
          bowls: "کاسه برنج (دون‌مونو)",
          sides: "غذاهای جانبی",
          toppings: "مخلفات",
          desserts: "دسر",
          drinks: "نوشیدنی",
        },
        footer: "تمام قیمت‌ها بدون احتساب مالیات هستند. 10% مالیات بر مصرف جداگانه دریافت خواهد شد.",
        labels: {
          comingSoon: "به‌زودی"
        }
      },
    },
  
    // カテゴリは配列にしておくと、追加・並べ替えが簡単
    categories: [
      {
        key: "ramen",
        icon: "🍜",
        items: [
          {
            id: "ramen-shoyu",
            name: { en: "Shoyu Ramen", fa: "رامن شویو" },
            descShort: { en: "Classic soy sauce flavor.", fa: "طعم سویا کلاسیک." },
            descLong: {
              en: "A clean chicken broth with classic shoyu aroma. Balanced umami, light finish.",
              fa: "آب مرغ شفاف با عطر کلاسیک شویو. اومامی متعادل و پایان سبک.",
            },
            price: 400000,
            // image を省略すると assets/menu/{id}.webp を参照
            // image: "ramen-shoyu.webp",
            tags: ["signature"],
          },
          {
            id: "ramen-shio",
            name: { en: "Shio Ramen", fa: "رامن شیو" },
            descShort: { en: "Pure chicken & salt broth.", fa: "مرغ و نمک خالص." },
            descLong: {
              en: "Salt-forward, crystal-clear chicken broth. Simple and aromatic.",
              fa: "آب مرغ شفاف با تمرکز بر نمک. ساده و خوش‌عطر.",
            },
            price: 400000,
            tags: ["light"],
          },
          {
            id: "ramen-miso",
            name: { en: "Miso Ramen", fa: "رامن میسو" },
            descShort: { en: "Rich and fragrant miso.", fa: "میسو معطر و غنی." },
            descLong: {
              en: "Chicken broth blended with miso for a deeper, richer profile.",
              fa: "ترکیب آب مرغ با میسو برای طعمی عمیق‌تر و غنی‌تر.",
            },
            price: 500000,
            tags: ["rich"],
          },
          {
            id: "ramen-toripaitan",
            name: { en: "Chicken Paitan Ramen", fa: "رامن چیکن پایتان" },
            descShort: { en: "Rich and creamy chicken broth ramen.", fa: "سوپ غلیظ و خامه‌ای مرغ." },
            descLong: {
              en: "Chicken Paitan Ramen is a Japanese noodle soup made with a rich and creamy chicken broth, simmered for hours to create a deep, smooth flavor, served with noodles, toppings and our special spicy sauce.",
              fa: "رامن چیکن پایتان یک سوپ نودل ژاپنی است که با آب مرغ غلیظ و خامه‌ای تهیه می‌شود و ساعت‌ها پخته می‌شود تا طعمی عمیق و نرم ایجاد کند و همراه با نودل، مخلفات و سس تند مخصوص ما سرو می‌شود.",
            },
            price: 450000,
            tags: ["rich"],
          },
        ],
      },
  
      {
        key: "bowls",
        icon: "🍚",
        items: [
          {
            id: "bowl-chashu-don",
            name: { en: "Chashu-don", fa: "چاشو-دون" },
            descShort: { en: "Tender pork over rice.", fa: "گوشت مرغ　نرم روی برنج." },
            descLong: {
              en: "Slow-cooked chashu served over steamed rice. Comforting and filling.",
              fa: "چاشوی آرام‌پز روی برنج بخارپز. سیرکننده و خوش‌خوراک.",
            },
            price: 400000,
            tags: ["popular"],
            // status: "comingSoon" // ← これ
          },
          {
            id: "bowl-karaage-don",
            name: { en: "Karaage-don", fa: "کاراآگه-دون" },
            descShort: { en: "Fried chicken over rice.", fa: "مرغ سوخاری روی برنج." },
            descLong: {
              en: "Crispy karaage with sauce over rice. Great with a side soup.",
              fa: "کاراآگه ترد با سس روی برنج. عالی کنار سوپ.",
            },
            price: 400000,
          },
          // {
          //   id: "bowl-soboro-don",
          //   name: { en: "Soboro-don", fa: "سوبورو-دون" },
          //   descShort: { en: "Minced chicken over rice.", fa: "مرغ چرخ‌کرده روی برنج." },
          //   descLong: {
          //     en: "Seasoned minced chicken over rice. Mild and kid-friendly.",
          //     fa: "مرغ چرخ‌کرده مزه‌دار روی برنج. ملایم و مناسب خانواده.",
          //   },
          //   price: 250000,
          // },
          {
          id: "bowl-flakes-don",
          name: { en: "flacks-don", fa: "کاسه برنج پولکی مرغ"},
          descShort: { en: "Chicken flakes over rice.", fa: "تکه‌های مرغ روی برنج ژاپنی." },
          descLong: {
            en: "Flavoured fillet chicken flakes over rice. Mild and kid-friendly.",
            fa: "فیله مرغ طعم‌دار شده روی برنج ژاپنی. ملایم و مناسب برای کودکان.",
          },
          price: 350000,
          },
          {
            "id": "bowl-salmon-don",
            "name": { "en": "Salmon Don", "fa": "سالمون دون" },
            "descShort": {
              "en": "Fresh salmon slices over rice.",
              "fa": "برش‌های سالمون تازه روی برنج."
            },
            "descLong": {
              "en": "A Japanese rice bowl topped with fresh salmon slices served over warm rice.",
              "fa": "یک غذای ژاپنی شامل برنج که با برش‌های تازه سالمون روی آن سرو می‌شود."
            },
            "price": 650000
          },
          {
            "id": "bowl-curry-rice",
            "name": { "en": "Japanese Curry Rice", "fa": "کاری ژاپنی با برنج" },
            "descShort": {
              "en": "Rich Japanese curry served with steamed rice.",
              "fa": "کاری غلیظ ژاپنی همراه با برنج بخارپز."
            },
            "descLong": {
              "en": "A comforting Japanese-style curry made with tender chicken and onions, blended with our original curry spice mix and served over steamed rice.",
              "fa": "یک کاری سبک ژاپنی با مرغ نرم و پیاز که با ترکیب ادویه کاری مخصوص ما تهیه شده و همراه با برنج بخارپز سرو می‌شود."              
            },
            "price": 400000
          }
          // {
          //   "id": "bowl-aburi-salmon-don",
          //   "name": { "en": "Aburi Salmon Don", "fa": "سالمون دون آبوری" },
          //   "descShort": {
          //     "en": "Seared salmon over rice.",
          //     "fa": "سالمون کمی گریل‌شده روی برنج."
          //   },
          //   "descLong": {
          //     "en": "A Japanese rice bowl topped with lightly seared salmon served over warm rice.",
          //     "fa": "یک کاسه برنج ژاپنی با سالمون که کمی گریل شده و روی برنج گرم سرو می‌شود."
          //   },
          //   "price": 600000,
          //   "tags": ["popular"]
          // }
        ],
      },
      
      {
        key: "sushi",
        icon: "🍣",
        items: [                  
          {
            "id": "sushi-salmon-roll",
            "name": { "en": "Salmon sushi roll", "fa": "سوشی رول سالمون" },
            "descShort": {
              "en": "Fresh salmon rolled with sushi rice.",
              "fa": "رول سوشی با سالمون تازه و برنج سوشی."
            },
            "descLong": {
              "en": "A sushi roll made with fresh salmon and seasoned sushi rice. 8 pieces.",
              "fa": "رول سوشی تهیه شده با سالمون تازه و برنج سوشی. شامل ۸ تکه."
            },
            "price": 700000,
            "tags": ["popular"]
          },
          {
            "id": "sushi-salmon-roll-small",
            "name": { "en": "Small salmon sushi roll", "fa": "سوشی رول سالمون کوچک" },
            "descShort": {
              "en": "Small portion of fresh salmon sushi roll.",
              "fa": "رول سوشی سالمون در اندازه کوچک."
            },
            "descLong": {
              "en": "A smaller sushi roll made with fresh salmon and sushi rice. 6 pieces.",
              "fa": "نسخه کوچک‌تر رول سوشی با سالمون تازه و برنج سوشی. شامل ۶ تکه."
            },
            "price": 400000,
            // "tags": ["popular"]
          },
          {
            "id": "sushi-salmon-nigiri",
            "name": { "en": "Salmon sushi nigiri", "fa": "سوشی نیگیری سالمون" },
            "descShort": {
              "en": "Fresh salmon over pressed sushi rice.",
              "fa": "سالمون تازه روی برنج فشرده سوشی."
            },
            "descLong": {
              "en": "Fresh salmon placed over hand-pressed sushi rice. 1 piece.",
              "fa": "سالمون تازه روی برنج فشرده سوشی قرار می‌گیرد. شامل ۱ تکه."
            },
            "price": 200000,
            // "tags": ["popular"]
          },
          {
            "id": "sushi-chicken-roll",
            "name": { "en": "Chicken sushi roll", "fa": "سوشی رول مرغ" },
            "descShort": {
              "en": "Grilled chicken rolled with sushi rice.",
              "fa": "رول سوشی با مرغ گریل شده و برنج."
            },
            "descLong": {
              "en": "A sushi roll made with grilled chicken and sushi rice. 8 pieces.",
              "fa": "رول سوشی تهیه شده با مرغ گریل‌شده و برنج سوشی. شامل ۸ تکه."
            },
            "price": 500000,
            "tags": ["popular"]
          },
          {
            "id": "sushi-chicken-roll-small",
            "name": { "en": "Small chicken sushi roll", "fa": "سوشی رول مرغ کوچک" },
            "descShort": {
              "en": "Small portion of chicken sushi roll.",
              "fa": "رول سوشی مرغ در اندازه کوچک."
            },
            "descLong": {
              "en": "A smaller sushi roll made with grilled chicken and sushi rice. 6 pieces.",
              "fa": "نسخه کوچک‌تر رول سوشی با مرغ گریل‌شده و برنج سوشی. شامل ۶ تکه."
            },
            "price": 300000,
            // "tags": ["popular"]
          },
          {
            "id": "sushi-tuna-mayo-roll",
            "name": { "en": "Tuna mayo sushi roll", "fa": "سوشی رول تن مایونز" },
            "descShort": {
              "en": "Tuna mixed with mayonnaise rolled with sushi rice.",
              "fa": "رول سوشی با ترکیب ماهی تن و مایونز."
            },
            "descLong": {
              "en": "A sushi roll made with tuna mixed with mayonnaise and sushi rice. 8 pieces.",
              "fa": "رول سوشی تهیه شده با ترکیب ماهی تن و مایونز و برنج سوشی. شامل ۸ تکه."
            },
            "price": 700000
          },
          {
            "id": "sushi-tuna-mayo-roll-small",
            "name": { "en": "Small tuna mayo sushi roll", "fa": "سوشی رول تن مایونز کوچک" },
            "descShort": {
              "en": "Small portion of tuna mayo sushi roll.",
              "fa": "رول سوشی تن مایونز در اندازه کوچک."
            },
            "descLong": {
              "en": "A smaller sushi roll made with tuna mixed with mayonnaise and sushi rice. 6 pieces.",
              "fa": "نسخه کوچک‌تر رول سوشی با ترکیب ماهی تن و مایونز و برنج سوشی. شامل ۶ تکه."
            },
            "price": 400000
          }
          
        ],
      },
  
      {
        key: "sides",
        icon: "🥟",
        items: [
          {
            id: "side-gyoza",
            name: { en: "Gyoza", fa: "گیوزا" },
            descShort: { en: "Crispy dumplings (4pcs).", fa: "دامپلینگ ترد (4 تکه)." },
            descLong: {
              en: "Pan-fried gyoza with a crisp base. Served with dipping sauce.",
              fa: "گیوزای سرخ‌شده با کف ترد. همراه سس مخصوص.",
            },
            price: 250000,
          },
          {
            id: "side-karaage",
            name: { en: "Karaage", fa: "کاراآگه" },
            descShort: { en: "Juicy fried chicken (5pcs).", fa: "مرغ سوخاری آبدار (5 تکه)." },
            descLong: {
              en: "Juicy karaage, freshly fried. Best eaten hot.",
              fa: "کاراآگه آبدار و تازه‌سرخ‌شده. بهترین حالت داغ.",
            },
            price: 300000,
          },
          // {
          //   id: "side-rice",
          //   name: { en: "Rice", fa: "برنج" },
          //   descShort: { en: "Steamed Japanese rice.", fa: "برنج ژاپنی بخارپز." },
          //   descLong: { en: "A bowl of steamed rice.", fa: "یک کاسه برنج بخارپز." },
          //   price: 100000,
          // },
        ],
      },
  
      {
        key: "toppings",
        icon: "🥚",
        items: [
          {
            id: "top-ajitama",
            name: { en: "Ajitama", fa: "آجی-تاما" },
            descShort: { en: "Marinated egg(half piece).", fa: "تخم مرغ مزه‌دار شده(نیم تکه)." },
            descLong: { en: "Soy-marinated soft-boiled egg (half piece).", fa: "(نیم تکه)تخم‌مرغ نیم‌پز مزه‌دار شده با سویا." },
            price: 50000,
          },
          {
            id: "top-chashu",
            name: { en: "Chashu", fa: "چاشو" },
            descShort: { en: "Extra 3 slices of chashu.", fa: "ورقه‌های اضافی گوشت." },
            descLong: { en: "Extra 3 slices of chashu. ", fa: "چند ورقه چاشوی اضافه." },
            price: 120000,
          },
          // {
          //   id: "top-negi",
          //   name: { en: "Negi", fa: "نگی" },
          //   descShort: { en: "Fresh scallions.", fa: "پیازچه تازه." },
          //   descLong: { en: "Fresh chopped scallions.", fa: "پیازچه تازه خرد شده." },
          //   price: 30000,
          // },
          // {
          //   id: "top-nori",
          //   name: { en: "Nori", fa: "نوری" },
          //   descShort: { en: "Dried seaweed.", fa: "جلبک دریایی خشک." },
          //   descLong: { en: "Crisp nori sheets.", fa: "ورقه‌های نوری ترد." },
          //   price: 50000,
          // },
          // {
          //   id: "top-soboro",
          //   name: { en: "Soboro", fa: "سوبورو" },
          //   descShort: { en: "Minced chicken topping.", fa: "مرغ چرخ‌کرده اضافی." },
          //   descLong: { en: "Seasoned minced chicken.", fa: "مرغ چرخ‌کرده مزه‌دار." },
          //   price: 130000,
          // },
            {
            id: "top-spicy-paste",
            name: { en: "Spicy-paste", fa: "خمیر تند" },
            descShort: { en: ".", fa: "" },
            descLong: { en: "A spicy paste made by blending Korean gochujang and doenjang, creating a deep, rich, and savory heat.", fa: "خمیر تند تهیه شده از ترکیب گوچوجانگ و تویِنجانگ کره‌ای، با طعمی عمیق، شور و تند." },
            price: 50000,
          },
        ],
      },
  
      {
        key: "desserts",
        icon: "🍮",
        items: [
        //   {
        //     id: "dessert-creme-brulee",
        //     name: { en: "Crème Brûlée", fa: "کرم بروله" },
        //     descShort: { en: "Rich custard dessert.", fa: "دسر کاستارد غنی." },
        //     descLong: { en: "Silky custard with caramelized sugar top.", fa: "کاستارد لطیف با رویه کاراملی." },
        //     price: 150000,
        //     // status: "comingSoon" // ← これ
        //   },        
        
          {
            id: "dessert-mochi-ice",
            name: { en: "Mochi Ice", fa: "موچی ایس" },
            descShort: { en: "Soft rice cake filled with creamy ice cream.", fa: "خمیر نرم برنجی با بستنی خامه‌ای داخل آن." },
            descLong: { en: "A Japanese dessert made of soft and chewy rice cake (mochi) wrapped around creamy ice cream.", fa: "یک دسر ژاپنی که از خمیر نرم و کش‌دار برنج (موچی) تشکیل شده و داخل آن بستنی خامه‌ای قرار دارد." },
            price: 100000,
            // status: "comingSoon" // ← これ
          },
        ],
      },
  
      {
        key: "drinks",
        icon: "🥤",
        items: [
          {
            id: "drink-cola",
            name: { en: "Cola", fa: "کولا" },
            descShort: { en: "Refreshing soft drink.", fa: "نوشابه گازدار خنک." },
            descLong: { en: "Served chilled.", fa: "سرد سرو می‌شود." },
            price: 36000,
          },
          {
            id: "drink-water",
            name: { en: "Water", fa: "آب" },
            descShort: { en: "Mineral water.", fa: "آب معدنی." },
            descLong: { en: "Still mineral water.", fa: "آب معدنی بدون گاز." },
            price: 15000,
          },
        ],
      },
    ],
  };
  
