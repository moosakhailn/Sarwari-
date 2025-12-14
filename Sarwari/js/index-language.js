document.addEventListener("DOMContentLoaded", function() {
  const translations = {
    en: {
      home: "Home",
      ourMission: "Our Mission",
      services: "Services",
      contactUs: "Contact Us",
      heroTitle: "Gentle, Modern Dental Care for the Whole Family",
      heroSubtitle: "Comfortable, affordable dentistry using the latest technology.",
      indexBooking: "Book Appointment",
      trustCareTitle: "Experienced Care",
      trustCareSubtitle: "Years of professional dental experience using modern techniques to ensure safe, effective treatment.",
      hygTitle: "Trusted Hygiene",
      hygSubtitle: "We follow strict hygiene standards and use advanced tools to protect your smile and health.",
      smileH: "Your Smile And Health Is The Most Important Thing.",
      smileBook: "Book Appointment",
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
      heroTitle: "د ټولې کورنۍ لپاره نرمه، عصري غاښونو پاملرنه",
      heroSubtitle: "د وروستي ټیکنالوژۍ په کارولو سره آرام او ارزانه غاښونو درملنه.",
      indexBooking: "د ملاقات کتاب کول",
      trustCareTitle: "تجربه لرونکې پاملرنه",
      trustCareSubtitle: "د خوندي او مؤثره درملنې ډاډ ترلاسه کولو لپاره د عصري تخنیکونو په کارولو سره د غاښونو مسلکي تجربه کلونه.",
      hygTitle: "باوري حفظ الصحه",
      hygSubtitle: "موږ د حفظ الصحې سخت معیارونه تعقیبوو او ستاسو د موسکا او روغتیا ساتنې لپاره پرمختللي وسایل کاروو.",
      smileH: "ستاسو موسکا او روغتیا تر ټولو مهم شی دی.",
      smileBook: "د ملاقات کتاب کول",      
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
      heroTitle: "مراقبت دندانپزشکی ملایم و مدرن برای تمام خانواده",
      heroSubtitle: "دندانپزشکی راحت و مقرون به صرفه با استفاده از جدیدترین تکنالوژی.",
      indexBooking: "رزرو قرار ملاقات",
      trustCareTitle: "مراقبت با تجربه",
      trustCareSubtitle: "سالها تجربه مسلکی دندانپزشکی با استفاده از تخنیک های مدرن برای اطمینان از درمان مصون و موثر.",
      hygTitle: "حفظ الصحه قابل اعتماد",
      hygSubtitle: "ما از معیار های سختگیرانه حفظ الصحه پیروی میکنیم و از وسایل پیشرفته برای محافظت از لبخند و صحت شما استفاده میکنیم.",
      smileH: "لبخند و سلامتی شما مهمترین چیز است.",
      smileBook: "رزرو قرار ملاقات",
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
      heroTitle: "پورے خاندان کے لیے نرم، جدید دانتوں کی دیکھ بھال",
      heroSubtitle: "جدید ترین ٹیکنالوجی کا استعمال کرتے ہوئے آرام دہ، سستی دندان سازی۔",
      indexBooking: "بک اپائنٹمنٹ",
      trustCareTitle: "تجربہ کار نگہداشت",
      trustCareSubtitle: "محفوظ، موثر علاج کو یقینی بنانے کے لیے جدید تکنیکوں کا استعمال کرتے ہوئے دانتوں کا پیشہ ورانہ تجربہ۔",
      hygTitle: "قابل اعتماد حفظان صحت",
      hygSubtitle: "ہم حفظان صحت کے سخت معیارات پر عمل کرتے ہیں اور آپ کی مسکراہٹ اور صحت کی حفاظت کے لیے جدید آلات استعمال کرتے ہیں۔",
      smileH: "آپ کی مسکراہٹ اور صحت سب سے اہم چیز ہے۔",
      smileBook: "بک اپائنٹمنٹ",
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
