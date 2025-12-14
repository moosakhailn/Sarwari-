document.addEventListener("DOMContentLoaded", () => {
    const searchWrapper = document.querySelector(".search-icon");
    const inputBox = searchWrapper.querySelector("input");
    const suggBox = searchWrapper.querySelector(".autocom-box");

    // Example suggestions array with links
    const suggestions = [
        { name: "Home", url: "/files/index.html" },
        { name: "Services", url: "/files/services.html" },
        { name: "Our Mission", url: "/files/about.html" },
        { name: "Contact", url: "/files/contact.html" },
        { name: "کور", url: "/files/index.html" },
        { name: "خدمات", url: "/files/services.html" },
        { name: "ماموریت", url: "/files/about.html" },
        { name: "اړیکه", url: "/files/contact.html" },
        { name: "خانه", url: "/files/index.html" },
        { name: "خدماتونا", url: "/files/services.html" },
        { name: "ماموریت ما", url: "/files/about.html" },
        { name: "تماس", url: "/files/contact.html" },
        { name: "گھر", url: "/files/index.html" },
        { name: "ہمارا مشن", url: "/files/about.html" },
        { name: "رابطہ", url: "/files/contact.html" }
    ];

    inputBox.addEventListener("input", () => {
        const userValue = inputBox.value.trim();
        let filtered = [];

        if(userValue) {
            filtered = suggestions
                .filter(item => item.name.toLowerCase().startsWith(userValue.toLowerCase()))
                .map(item => `<li data-url="${item.url}">${item.name}</li>`);

            searchWrapper.classList.add("active");
        } else {
            searchWrapper.classList.remove("active");
        }

        showSuggestions(filtered);
    });

    function showSuggestions(list) {
        suggBox.innerHTML = list.join("");
        const items = suggBox.querySelectorAll("li");

        items.forEach(li => {
            li.addEventListener("click", () => {
                const url = li.getAttribute("data-url");
                if(url) {
                    window.location.href = url; // navigate to the link
                }
            });
        });
    }

    // Close dropdown if clicking outside
    document.addEventListener("click", (e) => {
        if(!searchWrapper.contains(e.target)) {
            searchWrapper.classList.remove("active");
        }
    });
});

// Testimonial-Menu Bug Fix

$(document).ready(function() {
    const menuBtn = $('.menu-btn');      // Hamburger icon
    const menuLinks = $('.menu-link');   // Menu links
    const mainContent = $('.main-content'); // All content to swipe
    const navbarMenu = $('.navbar .menu');
    let isActive = false;

    function openMenu() {
        mainContent.addClass('swipe-out');  // swipe out content
        menuBtn.addClass('fixed');           // fix button
        navbarMenu.addClass('active');       // slide in menu
        $('body').addClass('lock-scroll');   // lock scrolling
        menuBtn.find('i').addClass('active');
        isActive = true;
    }

    function closeMenu() {
        mainContent.removeClass('swipe-out');
        menuBtn.removeClass('fixed');
        navbarMenu.removeClass('active');
        $('body').removeClass('lock-scroll');
        menuBtn.find('i').removeClass('active');
        isActive = false;
    }

    // Hamburger click
    menuBtn.click(function(e){
        e.preventDefault();
        if(!isActive) {
            openMenu();
        } else {
            closeMenu();
        }
    });

    // Menu link click restores everything
    menuLinks.click(function(){
        if(isActive) {
            closeMenu();
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const sendBtn = document.getElementById("sendBtn");
  const successPopup = document.getElementById("successPopup");
  const errorPopup = document.getElementById("errorPopup");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameInput();
    const email = emailInput();
    const phone = phoneInput();
    const message = messageInput();

    if (!name || !email || !message) {
      showPopup(errorPopup);
      return;
    }

    // Button loading state
    sendBtn.classList.add("loading");

    const subject = encodeURIComponent("New Contact Form Message");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    );

    const mailtoLink =
      `mailto:moosakhailn@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      sendBtn.classList.remove("loading");
      showPopup(successPopup);

      setTimeout(() => {
        window.location.href = mailtoLink;
      }, 900);
    }, 1200);
  });

  function showPopup(popup) {
    popup.classList.add("show");
    setTimeout(() => popup.classList.remove("show"), 2500);
  }

  function nameInput() {
    return document.getElementById("name").value.trim();
  }
  function emailInput() {
    return document.getElementById("email").value.trim();
  }
  function phoneInput() {
    return document.getElementById("phone").value.trim();
  }
  function messageInput() {
    return document.getElementById("message").value.trim();
  }
});
