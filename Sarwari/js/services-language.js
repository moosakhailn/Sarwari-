document.addEventListener("DOMContentLoaded", function() {
  const translations = {
    en: {
      home: "Home",
      ourMission: "Our Mission",
      services: "Services",
      contactUs: "Contact Us",
      heroTitle: "Our Services",
      heroSubtitle: "We provide gentle, modern dental care for the whole family.",
      service1Title: "Dental Implants",
      service1Desc: "Replace missing teeth with natural-feeling implants that look and function like real teeth.",
      service2Title: "Crowns & Bridges",
      service2Desc: "Custom-made crowns and bridges restore damaged or missing teeth for a flawless smile.",
      service3Title: "Deep Cleaning",
      service3Desc: "Professional deep cleaning to remove plaque and tartar buildup for healthier gums.",
      service4Title: "Veneers & Cosmetic Work",
      service4Desc: "Enhance your smile with veneers, bonding, and other cosmetic procedures for natural-looking results.",
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
      heroTitle: "زموږ خدمات",
      heroSubtitle: "موږ د ټولې کورنۍ لپاره نرمه، عصري غاښونو پاملرنه چمتو کوو.",
      service1Title: "د غاښونو امپلانټونه",
      service1Desc: "ورک شوي غاښونه د طبیعي احساس لرونکي امپلانټونو سره بدل کړئ چې د اصلي غاښونو په څیر ښکاري او فعالیت کوي.",
      service2Title: "تاجونه او پلونه",
      service2Desc: "په ځانګړي ډول جوړ شوي تاجونه او پلونه د بې عیب موسکا لپاره زیانمن شوي یا ورک شوي غاښونه بیرته راګرځوي.",
      service3Title: "ژوره پاکول",
      service3Desc: "د غاښونو د روغتیا لپاره د تختې او ټارټر د راټولیدو لرې کولو لپاره مسلکي ژوره پاکول.",
      service4Title: "د وینیرونو او سينګار کارونه",
      service4Desc: "د طبیعي ښکاري پایلو لپاره د وینیرز، بانډینګ، او نورو کاسمیټیک پروسیجرونو سره خپله موسکا ښه کړئ.",
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
      heroTitle: "خدمات ما",
      heroSubtitle: "ما مراقبت های دندانپزشکی ملایم و مدرن را برای تمام خانواده فراهم میسازیم.",
      service1Title: "کاشت دندان",
      service1Desc: "دندان های مفقود را با کاشت های دارای احساس طبیعی که مانند دندان های واقعی به نظر می رسند و عمل می کنند، تعویض کنید.",
      service2Title: "تاج ها و پل ها",
      service2Desc: "تاج ها و پل های سفارشی دندان های آسیب دیده یا مفقود شده را برای یک لبخند بی نقص ترمیم میکند.",
      service3Title: "تمیز کردن عمیق",
      service3Desc: "تمیز کردن عمیق مسلکی برای از بین بردن پلاک و تجمع تارتار برای لثه های صحتمند.",
      service4Title: "روکش ها و کار آرایشی",
      service4Desc: "لبخند خود را با روکش ها، باندنگ و سایر پروسیجرهای آرایشی برای نتایج طبیعی بهبود بخشید.",
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
      heroTitle: "ہماری خدمات",
      heroSubtitle: "ہم پورے خاندان کے لیے نرم، جدید دانتوں کی دیکھ بھال فراہم کرتے ہیں۔",
      service1Title: "ڈینٹل امپلانٹس",
      service1Desc: "گمشدہ دانتوں کو قدرتی احساس والے امپلانٹس سے تبدیل کریں جو اصلی دانتوں کی طرح نظر آتے اور کام کرتے ہیں۔",
      service2Title: "تاج اور پل",
      service2Desc: "اپنی مرضی کے مطابق بنائے گئے تاج اور پل ایک بے عیب مسکراہٹ کے لیے خراب یا گمشدہ دانتوں کو بحال کرتے ہیں۔",
      service3Title: "گہری صفائی",
      service3Desc: "صحت مند مسوڑھوں کے لیے پلاک اور ٹارٹر کی تعمیر کو دور کرنے کے لیے پیشہ ورانہ گہری صفائی۔",
      service4Title: "Veneers اور کاسمیٹک کام",
      service4Desc: "قدرتی نظر آنے والے نتائج کے لیے veneers، بانڈنگ، اور دیگر کاسمیٹک طریقہ کار کے ساتھ اپنی مسکراہٹ کو بہتر بنائیں۔",
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
