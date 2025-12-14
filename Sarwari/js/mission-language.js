document.addEventListener("DOMContentLoaded", function() {
  const translations = {
    en: {
      home: "Home",
      ourMission: "Our Mission",
      services: "Services",
      contactUs: "Contact Us",
      patientTitle: "Patient-Centered Care",
      patientSubtitle: "We prioritize your comfort and confidence, ensuring every visit is a positive experience.",
      technologyTitle: "Modern Technology",
      technologySubtitle: "Using the latest tools and techniques, we deliver high-quality dental care efficiently and safely.",
      educationTitle: "Education & Prevention",
      educationSubtitle: "We empower patients with knowledge and preventive strategies for long-lasting dental health.",
      diffBook: "Book your appointment today and experience the difference.",
      diffBookBtn: "Book Appointment",
      footerTitle: "Sarwari Dental Clinic",
      footerDesc: "Providing gentle, modern dental care for the whole family. Your smile is our priority.",
      footerNav: "Quick Links",
      footerHome: "Home",
      footerOurMission: "Our Mission",
      footerServices: "Services",
      footerContactUs: "Contact Us",
      footerContactTitle: "Contact",
      footerAddress: "Address",
      footerPhoneNum: "Phone Number",
      footerEmail: "Email",
      footerOfficeHrs: "Office Hours",
      footerMonFri: "Mon – Fri: 9:00 AM – 5:00 PM",
      footerSat: "Saturday: 9:00 AM – 1:00 PM",
      footerSun: "Sunday: Closed",
      language: "Language:",
      footerText: "© 2025 SmileCare Dental. All rights reserved."
    },
    pa: {
      home: "کور",
      ourMission: "ماموریت",
      services: "خدمتونه",
      contactUs: "تماس",
      patientTitle: "د ناروغانو په مرکز کې پاملرنه",
      patientSubtitle: "موږ ستاسو آرامۍ او باور ته لومړیتوب ورکوو، ډاډ ترلاسه کوو چې هره لیدنه یوه مثبته تجربه وي.",
      technologyTitle: "عصري ټیکنالوژي",
      technologySubtitle: "د وروستیو وسایلو او تخنیکونو په کارولو سره، موږ د لوړ کیفیت لرونکي غاښونو پاملرنه په اغیزمنه او خوندي توګه وړاندې کوو.",
      educationTitle: "تعلیم او مخنیوی",
      educationSubtitle: "موږ ناروغانو ته د غاښونو د اوږدمهاله روغتیا لپاره د پوهې او مخنیوي ستراتیژیو سره ځواک ورکوو.",
      diffBook: "نن ورځ خپل ملاقات ثبت کړئ او توپیر تجربه کړئ.",
      diffBookBtn: "د ملاقات کتاب کول",
      footerTitle: "Sarwari Dental Clinic",
      footerDesc: "د ټولې کورنۍ لپاره د غاښونو نرمه او عصري پاملرنه چمتو کول. ستاسو موسکا زموږ لومړیتوب دی.",
      footerNav: "چټک لینکونه",
      footerHome: "کور",
      footerOurMission: "ماموریت",
      footerServices: "خدمتونه",
      footerContactUs: "اړیکه",
      footerContactTitle: "اړیکه",
      footerAddress: "آدرس",
      footerPhoneNum: "د تلیفون شمیره",
      footerEmail: "ایمیل",
      footerOfficeHrs: "د دفتر ساعتونه",
      footerMonFri: "دوشنبه – جمعه: د سهار 9:00 بجو څخه تر 5:00 بجو پورې",
      footerSat: "شنبه: سهار ۹:۰۰ – ماسپښین ۱:۰۰",
      footerSun: "یکشنبه: تړل شوی",
      language: "ژبه:",
      footerText: "© ۲۰۲۵ سروري د غاښونو کلینیک. ټول حقونه خوندي دي."
    },
    fa: {
      home: "خانه",
      ourMission: "ماموریت",
      services: "خدمات",
      contactUs: "تماس",
      patientTitle: "مراقبت متمرکز بر بیمار",
      patientSubtitle: "ما راحتی و اعتماد شما را در اولویت قرار میدهیم و اطمینان حاصل میکنیم که هر بازدید یک تجربه مثبت است.",
      technologyTitle: "تکنالوژی مدرن",
      technologySubtitle: "با استفاده از جدیدترین وسایل و تخنیک ها، ما مراقبت های دندان با کیفیت بالا را به صورت موثر و مصون ارائه میدهیم.",
      educationTitle: "آموزش و پیشگیری",
      educationSubtitle: "ما मरीजان را با دانش و ستراتیژی های پیشگیرانه برای صحت طولانی مدت دندان توانمند میسازیم.",
      diffBook: "امروز قرار ملاقات خود را ثبت کنید و تفاوت را تجربه کنید.",
      diffBookBtn: "رزرو قرار ملاقات",
      footerTitle: "Sarwari Dental Clinic",
      footerDesc: "فراهم ساختن مراقبت های دندانپزشکی ملایم و مدرن برای تمام خانواده. لبخند شما اولویت ماست.",
      footerNav: "لینک های سریع",
      footerHome: "خانه",
      footerOurMission: "ماموریت",
      footerServices: "خدمات",
      footerContactUs: "تماس",
      footerContactTitle: "تماس",
      footerAddress: "آدرس",
      footerPhoneNum: "شماره تلفن",
      footerEmail: "ایمیل",
      footerOfficeHrs: "ساعات کاری",
      footerMonFri: "دوشنبه – جمعه: 9:00 صبح – 5:00 عصر",
      footerSat: "شنبه: 9:00 صبح – 1:00 بعد از ظهر",
      footerSun: "یکشنبه: تعطیل",
      language: "زبان:",
      footerText: "© ۲۰۲۵ کلینیک دندان سروری. تمام حقوق محفوظ است."
    },
    ur: {
      home: "گھر",
      ourMission: "مشن",
      services: "خدمات",
      contactUs: "رابطہ کریں۔",
      patientTitle: "مریض کے مرکز میں دیکھ بھال",
      patientSubtitle: "ہم آپ کے آرام اور اعتماد کو ترجیح دیتے ہیں، اس بات کو یقینی بناتے ہوئے کہ ہر دورہ ایک مثبت تجربہ ہو۔",
      technologyTitle: "جدید ٹیکنالوجی",
      technologySubtitle: "جدید ترین ٹولز اور تکنیکوں کا استعمال کرتے ہوئے، ہم اعلیٰ معیار کے دانتوں کی دیکھ بھال کو موثر اور محفوظ طریقے سے فراہم کرتے ہیں۔",
      educationTitle: "تعلیم اور روک تھام",
      educationSubtitle: "ہم دانتوں کی دیرپا صحت کے لیے علم اور احتیاطی حکمت عملی کے ساتھ مریضوں کو بااختیار بناتے ہیں۔",
      diffBook: "آج ہی اپنی ملاقات کا وقت بُک کریں اور فرق کا تجربہ کریں۔",
      diffBookBtn: "بک اپائنٹمنٹ",
      footerTitle: "Sarwari Dental Clinic",
      footerDesc: "پورے خاندان کے لیے نرم، جدید دانتوں کی دیکھ بھال فراہم کرنا۔ آپ کی مسکراہٹ ہماری ترجیح ہے۔",
      footerNav: "فوری لنکس",
      footerHome: "گھر",
      footerOurMission: "مشن",
      footerServices: "خدمات",
      footerContactUs: "رابطہ کریں۔",
      footerContactTitle: "رابطہ کریں۔",
      footerAddress: "خطاب",
      footerPhoneNum: "فون نمبر",
      footerEmail: "ای میل",
      footerOfficeHrs: "دفتری اوقات",
      footerMonFri: "پیر سے جمعہ: صبح 9:00 بجے سے شام 5:00 بجے تک",
      footerSat: "ہفتہ: 9:00 AM - 1:00 PM",
      footerSun: "اتوار: بند",
      language: "زبان:",
      footerText: "© ۲۰۲۵ سروری ڈینٹل کلینک۔ جملہ حقوق محفوظ ہیں۔"
    }
  };

  const langSelect = document.getElementById("lang");

  function updateLanguage(lang) {
    for (const key in translations[lang]) {
      const el = document.getElementById(key);
      if (el) el.textContent = translations[lang][key];
    }
  }

  const savedLang = localStorage.getItem("lang") || "en";
  langSelect.value = savedLang;
  updateLanguage(savedLang);

  langSelect.addEventListener("change", function() {
    const selectedLang = this.value;
    localStorage.setItem("lang", selectedLang);
    updateLanguage(selectedLang);
  });
});
