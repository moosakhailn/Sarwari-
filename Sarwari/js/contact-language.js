document.addEventListener("DOMContentLoaded", function() {
  const translations = {
    en: {
      home: "Home",
      ourMission: "Our Mission",
      services: "Services",
      contactUs: "Contact Us",
      heroTitle: "Contact Us",
      heroSubtitle: "We'd love to hear from you.",
      contactFormTitle: "Send Us a Message",
      submitButtonForm: "Send Message",
      successPopup: "✓ Email Ready to Send",
      errorPopup: "⚠ Please fill out all fields",
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
      heroTitle: "تماس",
      heroSubtitle: "موږ به خوښ شو چې له تاسو څخه واورو.",
      contactFormTitle: "موږ ته پیغام واستوئ",
      submitButtonForm: "پیغام ولېږئ",
      successPopup: "✓ برېښنالیک د لیږلو لپاره چمتو دی",
      errorPopup: "⚠ مهرباني وکړئ ټولې برخې ډکې کړئ",
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
      heroTitle: "تماس",
      heroSubtitle: "ما دوست داریم از شما بشنویم.",
      contactFormTitle: "به ما پیام بگذارید",
      submitButtonForm: "پیام بفرستید",
      successPopup: "✓ ایمیل آماده ارسال",
      errorPopup: "⚠ لطفا تمام فیلد ها را خانه پری کنید",
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
      heroTitle: "رابطہ کریں۔",
      heroSubtitle: "ہم آپ سے سننا پسند کریں گے۔",
      contactFormTitle: "ہمیں ایک پیغام بھیجیں۔",
      submitButtonForm: "پیغام بھیجیں۔",
      successPopup: "✓ ای میل بھیجنے کے لیے تیار ہے۔",
      errorPopup: "⚠ براہ کرم تمام فیلڈز پُر کریں۔",
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
