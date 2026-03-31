const apps = [
  new AppData({
    name: "تطبيق قرآن",
    slug: "quran",
    packageId: "com.hassaneltantawy.quran",
    shortDesc:
      "تطبيق قرآن هو رفيقك المثالي لتلاوة وتدبر القرآن الكريم، حيث يجمع بين عراقة النص وجمالية التصميم الحديث ليقدم لك تجربة إيمانية فريدة.",
    fullDesc:
      "يعد تطبيق 'قرآن' نقلة نوعية في تطبيقات المصاحف الرقمية، حيث صُمم ليكون أكثر من مجرد قارئ. يوفر التطبيق تجربة بصرية مذهلة مع ميزات ابتكارية مثل نظام الطبقات (Layers) الذي يتيح لك التدوين والرسم مباشرة على صفحات المصحف، وتلوين الآيات بناءً على موضوعاتها لتعميق فهمك وتدبرك.",
    features: [
      "تخصيص كامل للقراءة: أوضاع عرض متنوعة (صفحة، صفحتين، وضع عرضي) مع تحريك تلقائي ذكي.",
      "أدوات الحفظ المتقدمة: وضع 'الاستذكار الذكي' لإخفاء الآيات، مع خطط ختم مرنة وإحصائيات إنجاز دقيقة.",
      "مكتبة تدبر شاملة: أكثر من 50 تفسيراً وترجمة، مع محرك بحث فوري يعمل بدون إنترنت.",
      "إبداع وتدوين: نظام 'الطبقات' الفريد للرسم والكتابة مباشرة على المصحف، مع تنظيم ذكي للمرجعيات.",
      "مشاركة احترافية: شارك الآيات كصور مصممة أو نصوص، مع ميزة 'ما تيسر' التي تظهر آية عند فتح قفل الهاتف.",
    ],
    githubIdentifier: "/muslimpack/Quran",
    imageUrl:
      "https://raw.githubusercontent.com/muslimpack/Quran/main/repo_media/logo.png",
    screenshots: Array.from(
      { length: 22 },
      (_, i) =>
        `https://raw.githubusercontent.com/muslimpack/Quran/main/repo_media/v0.5.0/${(i + 1).toString().padStart(2, "0")}.png`,
    ),
  }),
  new AppData({
    name: "تطبيق حصن المسلم",
    slug: "hisnelmoslem",
    shortDesc:
      "رفيقك اليومي في الأذكار، مستخلص من كتاب 'حصن المسلم' الشهير، بأسلوب عرض سلس يجمع بين الأصالة وراحة الاستخدام.",
    fullDesc:
      "يهدف تطبيق حصن المسلم إلى جعل الأذكار جزءاً لا يتجزأ من يومك. يتميز بواجهة هادئة تدعم الوضع المظلم بالكامل، مع خيارات واسعة لتخصيص الخطوط والألوان، مما يجعله الحصن الذي لا يفارقك أينما كنت.",
    features: [
      "فهرس شامل وبحث ذكي: الوصول الفوري لأي ذكر مع إمكانية البحث السريع في محتويات الكتاب.",
      "سبحة إلكترونية متطورة: عداد أذكار ذكي مع اهتزاز تفاعلي ودعم كامل لاستخدام أزرار الصوت الفعلية.",
      "تنبيهات مخصصة: نظام إشعارات ذكي يذكرك بأذكار الصباح والمساء، وصيام الأيام البيض وغيرها.",
      "تخصيص الواجهة: تحكم كامل في الألوان، نوع وحجم الخط، والوضع المظلم لراحة عينيك.",
      "المفضلة والمشاركة: احتفظ بأذكارك المفضلة وشاركها مع الآخرين بسهولة لنشر الأجر.",
    ],

    packageId: "com.hassaneltantawy.hisnelmoslem",
    githubIdentifier: "/muslimpack/HisnElmoslem_App",
    imageUrl:
      "https://raw.githubusercontent.com/muslimpack/HisnElmoslem_App/main/hisnelmoslem/assets/images/app_icon.png",
    fdroid: "com.hassaneltantawy.hisnelmoslem",
    appStoreURL:
      "https://apps.apple.com/us/app/%D8%AD%D8%B5%D9%86-%D8%A7%D9%84%D9%85%D8%B3%D9%84%D9%85-%D8%A3%D8%B0%D9%83%D8%A7%D8%B1-%D8%A7%D9%84%D9%85%D8%B3%D9%84%D9%85/id6471274071",
    screenshots: Array.from(
      { length: 13 },
      (_, i) =>
        `https://raw.githubusercontent.com/muslimpack/HisnElmoslem_App/main/repo_media/${i.toString().padStart(2, "0")}.png`,
    ),
  }),
  new AppData({
    name: "تطبيق الأذكار النووية",
    slug: "alazkar",
    shortDesc:
      "جامع الأذكار والسنن النبوية للإمام النووي رحمه الله، نقدمه لك في قالب تقني بسيط يدعم خشوعك وتركيزك.",
    fullDesc:
      "تطبيق 'الأذكار النووية' هو النسخة الرقمية الموثقة من كتاب 'الأذكار' للإمام النووي. ركزنا في هذا التطبيق على تقديم النص النبوي بأبسط صورة ممكنة، مع ترتيب موضوعي يسهل عليك الوصول للذكر المناسب لكل حال أو مناسبة.",
    features: [
      "بساطة وفعالية: تصميم يركز على النص لضمان أقصى درجات التركيز والخشوع أثناء الذكر.",
      "سبحة أزرار الصوت: ميزة فريدة تتيح لك التسبيح باستخدام أزرار الصوت في جهازك دون النظر للشاشة.",
      "مشاركة إبداعية: إمكانية تحويل الأذكار إلى صور جميلة ومشاركتها فوراً عبر منصات التواصل.",
      "دعم كافة المنصات: تجربة سلسة وموحدة على أجهزة أندرويد وiOS وF-Droid.",
    ],
    githubIdentifier: "/muslimpack/Al-Azkar",
    imageUrl:
      "https://raw.githubusercontent.com/muslimpack/Al-Azkar/main/alazkar/assets/icons/app.png",
    packageId: "com.hassaneltantawy.alazkar",
    fdroid: "com.hassaneltantawy.alazkar",
    appStoreURL:
      "https://apps.apple.com/us/app/%D8%A7%D9%84%D8%A3%D8%B0%D9%83%D8%A7%D8%B1-%D8%A7%D9%84%D9%86%D9%88%D9%88%D9%8A%D8%A9/id6756480296",
    screenshots: Array.from(
      { length: 4 },
      (_, i) =>
        `https://raw.githubusercontent.com/muslimpack/Al-Azkar/main/screenshots/${i.toString().padStart(2, "0")}.png`,
    ),
  }),
  new AppData({
    name: "تطبيق رقية",
    slug: "ruqayyah",
    shortDesc:
      "حصنك الحصين من الكتاب والسنة، يوفر لك رقية شرعية شاملة وميسرة، مع إرشادات نبوية وقائية.",
    fullDesc:
      "تطبيق 'رقية' هو دليلك للرقية الشرعية الثابتة عن النبي صلى الله عليه وسلم. يتميز بتوفير مستويات مختلفة من الرقية لتناسب حاجتك ووقتك، مع آداب وإرشادات عامة لضمان الحصول على أقصى نفع بإذن الله.",
    features: [
      "رقية شرعية موثقة: محتوى مستمد من الكتاب والسنة (إعداد الدكتور خالد الجريسي).",
      "جلسات متنوعة: يوفر رقية بثلاثة مستويات (مختصرة، متوسطة، ومطولة) لتناسب حاجتك.",
      "دليل الرقي الشرعي: آداب وإرشادات تفصيلية هامة يجب مراعاتها عند الرقية لزيادة اليقين والنفع.",
      "واجهة مريحة: تصميم يسهل التنقل بين الآيات والأذكار مع دعم كامل للوضع المظلم.",
    ],
    packageId: "com.hassaneltantawy.ruqayyah",
    githubIdentifier: "/muslimpack/Ruqayyah",
    imageUrl:
      "https://raw.githubusercontent.com/muslimpack/Ruqayyah/main/ruqayyah/assets/images/logo.png",
    appStoreURL:
      "https://apps.apple.com/us/app/rukia-%D8%B1%D9%82%D9%8A%D8%A9/id6756537897",
    screenshots: Array.from(
      { length: 4 },
      (_, i) =>
        `https://raw.githubusercontent.com/muslimpack/Ruqayyah/main/fastlane/metadata/android/en-US/images/phoneScreenshots/${(i + 1).toString().padStart(2, "0")}.jpg`,
    ),
  }),
  new AppData({
    name: "تطبيق قضاء",
    slug: "qadaa",
    shortDesc:
      "رفيقك في رحلة الالتزام وقضاء الفوائت من صلوات وصيام، بمنتهى البساطة والوضوح.",
    fullDesc:
      "تطبيق 'قضاء' هو المساعد الشخصي لتنظيم ومتابعة ما فاتك من عبادات. صُمم بواجهة بسيطة جداً ليركز على الهدف الأساسي وهو تشجيعك على إتمام القضاء من خلال حسابات دقيقة وتنبيهات محفزة.",
    features: [
      "تتبع ذكي للفوائت: سجل دقيق لقضاء الصلوات والصيام مع واجهة تفاعلية بسيطة.",
      "أمان وخصوصية: إمكانية قفل التطبيق بكلمة مرور لحماية خصوصية بياناتك التعبدية.",
      "تحفيز مستمر: إشعارات مشجعة ومؤثرات صوتية وبصرية عند إنجاز القضاء لتعزيز همتك.",
      "تقدير تاريخ الانتهاء: ميزة ذكية تحسب لك تاريخ انتهاء القضاء بناءً على معدل إنجازك اليومي.",
      "مجاني ومفتوح المصدر: تطبيق متاح للجميع بلا إعلانات، مع دعم كامل للخصوصية.",
    ],
    imageUrl:
      "https://raw.githubusercontent.com/muslimpack/Qadaa/main/qadaa/assets/images/app_icon.png",
    githubIdentifier: "/muslimpack/Qadaa",
    packageId: "com.hassaneltantawy.qadaa",
    fdroid: "com.hassaneltantawy.qadaa",
    screenshots: Array.from(
      { length: 8 },
      (_, i) =>
        `https://raw.githubusercontent.com/muslimpack/Qadaa/main/fastlane/metadata/android/en-US/images/phoneScreenshots/${(i + 1).toString().padStart(2, "0")}.jpg`,
    ),
  }),
  new AppData({
    name: "تطبيق مدونة العبادات",
    slug: "mudawanat_aleibadat",
    shortDesc:
      "أداة ذكية لتحفيز النفس وتدوين العبادات اليومية، تنمي فيك روح المداومة والإحسان في العمل.",
    fullDesc:
      "تطبيق 'مدونة العبادات' هو مذكرتك اليومية التي ترافقك في طريق الطاعة. يساعدك على مراقبة نموك الروحي من خلال تدوين بسيط للفرائض والنوافل، مما يحفزك على الاستمرار والارتقاء في عبادتك اليومية.",
    features: [
      "مدونة عبادات متكاملة: تتبع الصلوات (الفرائض والنوافل)، الصيام، تلاوة القرآن، والأذكار.",
      "إحصائيات وأداء: رسوم بيانية تحليلية توضح تقدمك اليومي والأسبوعي والشهري.",
      "تقويم العبادات: عرض تقويمي شامل يسهل عليك مراجعة التزامك بالعبادات خلال الشهر.",
      "تخصيص المظهر: واجهة جذابة قابلة للتخصيص بالكامل لتعكس ذوقك الخاص وتريح عينيك.",
    ],
    imageUrl:
      "https://raw.githubusercontent.com/muslimpack/mudawanat_aleibadat/main/repo_media/icon.png",
    githubIdentifier: "/muslimpack/mudawanat_aleibadat",
    packageId: "com.hassaneltantawy.mudawanat_aleibadat",
    appStoreURL: "https://apps.apple.com/app/مدونة-العبادات/id6756537279",
    screenshots: Array.from(
      { length: 7 },
      (_, i) =>
        `https://raw.githubusercontent.com/muslimpack/mudawanat_aleibadat/main/repo_media/${(i + 1).toString().padStart(2, "0")}.png`,
    ),
  }),
  new AppData({
    name: "تطبيق معالم السنة النبوية",
    slug: "maalem_alsunnah",
    shortDesc:
      "خلاصة جامعة لأصول كتب السنة النبوية الشريفة، مستقاة من جهد العلامة صالح أحمد الشامي.",
    fullDesc:
      "تطبيق 'معالم السنة النبوية' هو كنز معرفي يضم خلاصة 14 كتاباً هي أصول كتب السنة. يهدف التطبيق لتقريب السنة النبوية لعامة المسلمين من خلال تنظيم منهجي فريد وأدوات بحث متطورة.",
    features: [
      "خلاصة كتب السنة: يضم أهم الأحاديث من أصول السنة النبوية (14 كتاباً) بفرز وتنظيم منهجي.",
      "بحث وفلترة متقدمة: محرك بحث قوي يسمح لك بالفلترة حسب مطابقات الكلمات أو المعاني.",
      "تخصيص القراءة: تحكم في التشكيل، حجم الخط، ونوع العرض مع إمكانية إضافة ملاحظات خاصة.",
      "مشاركة الأحاديث: إرسال الأحاديث كنصوص أو صور مصممة باحترافية لنشر السنة النبوية.",
      "تنظيم ذكي: تقسيم دقيق للأبواب والأحاديث يسهل عليك دراسة وفهم السنة النبوية.",
    ],
    imageUrl:
      "https://raw.githubusercontent.com/muslimpack/maalem_alsunnah/main/maalem_alsunnah/assets/images/app_icon.png",
    githubIdentifier: "/muslimpack/maalem_alsunnah",
    packageId: "com.hassaneltantawy.maalem_alsunnah",
    appStoreURL:
      "https://apps.apple.com/us/app/%D9%85%D8%B9%D8%A7%D9%84%D9%85-%D8%A7%D9%84%D8%B3%D9%86%D8%A9-%D8%A7%D9%84%D9%86%D8%A8%D9%88%D9%8A%D8%A9/id6756390086",
    screenshots: Array.from(
      { length: 6 },
      (_, i) =>
        `https://raw.githubusercontent.com/muslimpack/maalem_alsunnah/main/screenshots/${(i + 1).toString().padStart(2, "0")}.png`,
    ),
  }),
  new AppData({
    name: "تطبيق الكامل في السنن",
    slug: "alkamel",
    shortDesc:
      "الموسوعة الشاملة في السنة النبوية، ترسم لك معالم المنهج من أصح الصحيح إلى أضعف الضعيف.",
    fullDesc:
      "تطبيق 'الكامل في السنن' هو أول تطبيق يستعرض الموسوعة الشهيرة للدكتور عامر الحسيني. يهدف لتقديم صورة بانورامية شاملة للسنة النبوية بكافة درجات أحاديثها، ليكون مرجعاً علمياً لطلاب العلم والمحققين.",
    features: [
      "رؤية شاملة: يستعرض السنة النبوية من أصح الصحيح إلى أضعف الضعيف بمنهجية علمية.",
      "واجهة نقية: تصميم هادئ يركز على قدسية النص النبوي ويوفر بيئة دراسية متميزة.",
      "بحث سريع: محرك بحث فعال للوصول الفوري لأي باب أو حديث ضمن الموسوعة.",
      "دقة البيانات: مراجعة وتحقيق للبيانات لضمان دقة النقل عن المصدر الأصلي.",
    ],
    imageUrl:
      "https://raw.githubusercontent.com/muslimpack/alkamel/main/alkamel/assets/images/app_icon.png",
    githubIdentifier: "/muslimpack/alkamel",
    // packageId: "com.hassaneltantawy.alkamel",
    screenshots: Array.from(
      { length: 6 },
      (_, i) =>
        `https://raw.githubusercontent.com/muslimpack/alkamel/main/screenshots/v0.1.0/${(i + 1).toString().padStart(2, "0")}.png`,
    ),
  }),
];
