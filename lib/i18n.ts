export type Lang = 'en' | 'ar'

export const dictionary = {
  en: {
    nav: {
      collection: 'Collection',
      lookbook: 'Lookbook',
      about: 'About',
      shopNow: 'Shop Now',
    },
    hero: {
      drop: "New Drop — Winter '26",
      titleTop: 'Built From',
      titleBottom: 'The Stone Up',
      description:
        'Heavy fabrics. Loud graphics. Zero compromise. REDSTONE is streetwear cut for the ones who move different.',
      explore: 'Explore The Drop',
      lookbook: 'Lookbook',
      scroll: 'Scroll to collection',
    },
    marquee: ['REDSTONE', 'HEAVYWEIGHT', 'STREETWEAR', 'NEW DROP', 'NO COMPROMISE'],
    collection: {
      label: 'The Collection',
      heading: 'Latest Pieces',
      viewAll: 'View All',
    },
    lookbook: {
      label: 'Lookbook',
      headingA: 'Worn, Not',
      headingB: 'Displayed',
    },
    about: {
      label: 'The Brand',
      titleA: 'Stone Cold',
      titleB: 'Quality',
      body: "REDSTONE started with one idea: make pieces that outlast trends. Every hoodie, tee and pant is cut from heavyweight fabric, printed bold, and dropped in limited runs. When it's gone, it's gone.",
      body2: "Born in the streets and built like a stone — REDSTONE is more than a clothing brand. It's a statement of weight, presence and permanence. Every stitch is deliberate, every print is loud, and every drop carries the same promise: luxury you can feel, made for the street.",
      stats: [
        { value: '480gsm', label: 'Heavyweight Fleece' },
        { value: '100%', label: 'Cotton, Always' },
        { value: 'Limited', label: 'Runs, Never Restocked Twice' },
      ],
    },
    footer: {
      tagline: 'Heavy fabrics. Loud graphics. Zero compromise. Follow the drop before it sells out.',
      rights: '© 2026 REDSTONE. All rights reserved.',
      motto: 'Built from the stone up.',
    },
    products: [
      { name: 'SACRE Hoodie', category: 'Heavyweight Hoodie', price: 'EGP 1,450', tag: 'Best Seller' },
      { name: 'Grand Tee — Black', category: 'Oversized Tee', price: 'EGP 750', tag: 'New' },
      { name: 'Grand Tee — Duo', category: 'Oversized Tee', price: 'EGP 750', tag: null },
      { name: 'Stone Baggy Denim', category: 'Washed Denim', price: 'EGP 1,250', tag: 'New' },
      { name: 'Striped Pack', category: 'Essential Tees', price: 'EGP 690', tag: null },
      { name: 'Everyday Sweatpants', category: 'Fleece Sweatpants', price: 'EGP 950', tag: 'Restocked' },
    ] as { name: string; category: string; price: string; tag: string | null }[],
  },
  ar: {
    nav: {
      collection: 'الكولكشن',
      lookbook: 'اللوك بوك',
      about: 'البراند',
      shopNow: 'اشتري دلوقتي',
    },
    hero: {
      drop: 'دروب جديد — شتاء ٢٠٢٦',
      titleTop: 'اتبنى من',
      titleBottom: 'قلب الصخر',
      description:
        'خامات تقيلة. طباعة جريئة. من غير أي تنازلات. ريدستون ستريت وير معمول للي ماشيين بطريقتهم.',
      explore: 'شوف الدروب',
      lookbook: 'اللوك بوك',
      scroll: 'انزل للكولكشن',
    },
    marquee: ['ريدستون', 'خامة تقيلة', 'ستريت وير', 'دروب جديد', 'من غير تنازلات'],
    collection: {
      label: 'الكولكشن',
      heading: 'أحدث القطع',
      viewAll: 'شوف الكل',
    },
    lookbook: {
      label: 'اللوك بوك',
      headingA: 'معمول يتلبس،',
      headingB: 'مش يتفرج عليه',
    },
    about: {
      label: 'البراند',
      titleA: 'جودة',
      titleB: 'صلبة كالصخر',
      body: 'ريدستون بدأ بفكرة واحدة: نعمل قطع تعيش أطول من أي تريند. كل هودي وتيشيرت وبنطلون متقصوص من خامة تقيلة، مطبوع بجرأة، وبينزل في كميات محدودة. لما يخلص، يخلص.',
      body2: 'اتولد من الشارع واتبنى زي الصخر — ريدستون مش مجرد براند ملابس. دي رسالة في الوزن والحضور والثبات. كل غرزة ليها معنى، كل طباعة صوتها عالي، وكل دروب بيحمل نفس الوعد: فخامة تحسها، معمولة للشارع.',
      stats: [
        { value: '480 جم', label: 'قطن تقيل الوزن' },
        { value: '100%', label: 'قطن دائمًا' },
        { value: 'محدود', label: 'كميات محدودة لا تتكرر' },
      ],
    },
    footer: {
      tagline: 'خامات تقيلة. طباعة جريئة. من غير تنازلات. تابع الدروب قبل ما يخلص.',
      rights: '© ٢٠٢٦ ريدستون. كل الحقوق محفوظة.',
      motto: 'اتبنى من قلب الصخر.',
    },
    products: [
      { name: 'هودي SACRE', category: 'هودي تقيل', price: '١,٤٥٠ ج.م', tag: 'الأكثر مبيعًا' },
      { name: 'تيشيرت Grand — أسود', category: 'تيشيرت أوفرسايز', price: '٧٥٠ ج.م', tag: 'جديد' },
      { name: 'تيشيرت Grand — طقم', category: 'تيشيرت أوفرسايز', price: '٧٥٠ ج.م', tag: null },
      { name: 'جينز ستون باجي', category: 'جينز مغسول', price: '١,٢٥٠ ج.م', tag: 'جديد' },
      { name: 'طقم مخطط', category: 'تيشيرتات أساسية', price: '٦٩٠ ج.م', tag: null },
      { name: 'بنطلون Everyday', category: 'بنطلون فليس', price: '٩٥٠ ج.م', tag: 'اتوفر تاني' },
    ] as { name: string; category: string; price: string; tag: string | null }[],
  },
} as const
