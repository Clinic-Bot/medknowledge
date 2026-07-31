/* ==========================================================================
   MedKnowledge — Colleges Landing Page
   Vanilla JS. No frameworks, no external runtime dependencies.
   ========================================================================== */
(function () {
  "use strict";

  var PAGE_URL = "https://medknowledge.diagnos-tick.in/colleges";
  var PLATFORM_URL = "https://medknowledge.diagnos-tick.in";

  /* ---------------------------------------------------------------------
     1. FEATURES — edit this array to add/remove/reorder feature cards
     --------------------------------------------------------------------- */
  var FEATURES = [
    { title: "AI-powered Study Assistant", desc: "Instant, on-demand explanations for any topic, any time.", icon: "M12 2a7 7 0 0 0-7 7c0 3 2 5 2 8h10c0-3 2-5 2-8a7 7 0 0 0-7-7z M9 21h6" },
    { title: "Medical Notes", desc: "Concise, exam-ready notes across every core subject.", icon: "M4 19V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14 M4 19a2 2 0 0 0 2 2h14 M8 7h8M8 11h8" },
    { title: "Daily MCQs", desc: "Fresh practice questions delivered every day.", icon: "M9 11l3 3L22 4 M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" },
    { title: "Clinical Case Discussions", desc: "Real-world case walkthroughs that build clinical reasoning.", icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2 M9 3h6v4H9z M9 13h6M9 17h4" },
    { title: "Anatomy", desc: "Structured, layered coverage of human anatomy.", icon: "M12 2v20 M6 6c0 3 3 3 3 6s-3 3-3 6 M18 6c0 3-3 3-3 6s3 3 3 6" },
    { title: "Physiology", desc: "How the body works, explained clearly.", icon: "M3 12h4l3 8 4-16 3 8h4" },
    { title: "Pharmacology", desc: "Drug classes, mechanisms and clinical use.", icon: "M10.5 20.5 20 11a4.95 4.95 0 1 0-7-7L3.5 13.5a4.95 4.95 0 1 0 7 7z M8.5 8.5l7 7" },
    { title: "Pathology", desc: "Disease processes made easy to remember.", icon: "M12 21c-4-3-8-6.5-8-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 4.5-4 8-8 11-.7.4-1.3.4-2 0z" },
    { title: "Microbiology", desc: "Organisms, infections and diagnostics simplified.", icon: "M12 2v4 M12 18v4 M4.9 4.9l2.8 2.8 M16.3 16.3l2.8 2.8 M2 12h4 M18 12h4 M4.9 19.1l2.8-2.8 M16.3 7.7l2.8-2.8 M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" },
    { title: "Medical Terminology", desc: "Build fluency in the language of medicine.", icon: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20 M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" },
    { title: "Nursing Resources", desc: "Dedicated study material for nursing curricula.", icon: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" },
    { title: "Allied Health Resources", desc: "Content spanning Pharmacy, Physiotherapy and more.", icon: "M22 12h-4l-3 9L9 3l-3 9H2" },
    { title: "24/7 Learning", desc: "Study whenever it suits your schedule.", icon: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 6v6l4 2" },
    { title: "Mobile Friendly", desc: "Built to work smoothly on any phone.", icon: "M17 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z M11 18h2" },
    { title: "Free Access", desc: "No fees, no paywalls, no hidden charges.", icon: "M12 1v22 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" }
  ];

  /* ---------------------------------------------------------------------
     2. SCREENSHOTS — replace icon placeholders with real <img> tags later
     --------------------------------------------------------------------- */
  var SCREENS = [
    { title: "AI Study Assistant", desc: "Ask a question, get a clear, structured answer instantly." },
    { title: "Daily MCQ Practice", desc: "A fresh set of exam-style questions every single day." },
    { title: "Subject-wise Notes", desc: "Browse organised notes across every core subject." },
    { title: "Clinical Case Discussions", desc: "Work through real-world cases step by step." },
    { title: "Progress Tracking", desc: "See what's been covered and what's next." },
    { title: "Mobile Experience", desc: "The same platform, optimised for smaller screens." }
  ];

  /* ---------------------------------------------------------------------
     3. TRUST CARDS
     --------------------------------------------------------------------- */
  var TRUST = [
    { title: "Registered Indian Pvt. Ltd. Company", icon: "M9 22V12h6v10 M3 10l9-7 9 7 M5 10v10a1 1 0 0 0 1 1h3 M19 10v10a1 1 0 0 1-1 1h-3" },
    { title: "Educational Mission", icon: "M22 10l-10-6L2 10l10 6 10-6z M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" },
    { title: "Affordable AI Learning", icon: "M12 1v22 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" },
    { title: "Continuous Improvements", icon: "M23 4v6h-6 M1 20v-6h6 M3.5 9a9 9 0 0 1 15-3.7L23 10 M20.5 15a9 9 0 0 1-15 3.7L1 14" },
    { title: "Student-first Philosophy", icon: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" }
  ];

  function iconSVG(pathD) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="' + pathD + '"/></svg>';
  }

  function renderFeatures() {
    var grid = document.getElementById("featureGrid");
    if (!grid) return;
    var html = FEATURES.map(function (f) {
      return (
        '<div class="feature-card">' +
        '<div class="feature-icon">' + iconSVG(f.icon) + "</div>" +
        "<h3>" + f.title + "</h3>" +
        "<p>" + f.desc + "</p>" +
        "</div>"
      );
    }).join("");
    grid.innerHTML = html;
  }

  function screenThumbSVG() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 9h18"/><circle cx="7" cy="6.5" r="0.6" fill="currentColor" stroke="none"/></svg>';
  }

  function renderScreens() {
    var grid = document.getElementById("screensGrid");
    if (!grid) return;
    var html = SCREENS.map(function (s, i) {
      return (
        '<div class="screen-card">' +
        '<div class="screen-thumb">' + screenThumbSVG() + '<span class="ph-label">Screenshot ' + (i + 1) + "</span></div>" +
        '<div class="screen-body"><h3>' + s.title + "</h3><p>" + s.desc + "</p></div>" +
        "</div>"
      );
    }).join("");
    grid.innerHTML = html;
  }

  function renderTrust() {
    var grid = document.getElementById("trustGrid");
    if (!grid) return;
    var html = TRUST.map(function (t) {
      return (
        '<div class="trust-card">' +
        '<div class="feature-icon">' + iconSVG(t.icon) + "</div>" +
        "<h3>" + t.title + "</h3>" +
        "</div>"
      );
    }).join("");
    grid.innerHTML = html;
  }

  renderFeatures();
  renderScreens();
  renderTrust();

  /* ---------------------------------------------------------------------
     4. Mobile nav
     --------------------------------------------------------------------- */
  var navToggle = document.getElementById("navToggle");
  var mobileNav = document.getElementById("mobileNav");
  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", function () {
      var open = mobileNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    mobileNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mobileNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------------------------------------------------------------------
     5. Reveal on scroll
     --------------------------------------------------------------------- */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------------------------------------------------------------------
     6. Animated stat counters
     --------------------------------------------------------------------- */
  var statEls = document.querySelectorAll("[data-count]");
  function animateCount(el) {
    var target = parseInt(el.getAttribute("data-count"), 10) || 0;
    var suffix = el.getAttribute("data-suffix") || "";
    var duration = 1400;
    var start = null;

    function step(ts) {
      if (start === null) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var value = Math.floor(eased * target);
      el.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target + suffix;
    }
    requestAnimationFrame(step);
  }
  if ("IntersectionObserver" in window && statEls.length) {
    var statObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          statObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    statEls.forEach(function (el) { statObserver.observe(el); });
  } else {
    statEls.forEach(function (el) {
      el.textContent = el.getAttribute("data-count") + (el.getAttribute("data-suffix") || "");
    });
  }

  /* ---------------------------------------------------------------------
     7. Testimonial carousel
     --------------------------------------------------------------------- */
  var slidesTrack = document.getElementById("testiSlides");
  var dotsWrap = document.getElementById("testiDots");
  var prevBtn = document.getElementById("testiPrev");
  var nextBtn = document.getElementById("testiNext");

  if (slidesTrack && dotsWrap) {
    var slides = slidesTrack.querySelectorAll(".testi-slide");
    var current = 0;

    slides.forEach(function (_, i) {
      var dot = document.createElement("button");
      dot.className = "testi-dot";
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-label", "Show testimonial " + (i + 1));
      dot.addEventListener("click", function () { goTo(i); });
      dotsWrap.appendChild(dot);
    });
    var dots = dotsWrap.querySelectorAll(".testi-dot");

    function goTo(index) {
      current = (index + slides.length) % slides.length;
      slidesTrack.style.transform = "translateX(-" + current * 100 + "%)";
      dots.forEach(function (d, i) {
        d.setAttribute("aria-current", i === current ? "true" : "false");
      });
    }
    goTo(0);

    if (prevBtn) prevBtn.addEventListener("click", function () { goTo(current - 1); });
    if (nextBtn) nextBtn.addEventListener("click", function () { goTo(current + 1); });

    var autoplay = setInterval(function () { goTo(current + 1); }, 6000);
    slidesTrack.closest(".testi-track-wrap").addEventListener("mouseenter", function () { clearInterval(autoplay); });
  }

  /* ---------------------------------------------------------------------
     8. FAQ accordion
     --------------------------------------------------------------------- */
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var btn = item.querySelector(".faq-q");
    var panel = item.querySelector(".faq-a");
    btn.addEventListener("click", function () {
      var isOpen = item.getAttribute("data-open") === "true";
      document.querySelectorAll(".faq-item").forEach(function (other) {
        other.setAttribute("data-open", "false");
        other.querySelector(".faq-q").setAttribute("aria-expanded", "false");
        other.querySelector(".faq-a").style.maxHeight = null;
      });
      if (!isOpen) {
        item.setAttribute("data-open", "true");
        btn.setAttribute("aria-expanded", "true");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });

  /* ---------------------------------------------------------------------
     9. Share section — native share, copy link, QR code
     --------------------------------------------------------------------- */
  var shareBtn = document.getElementById("shareBtn");
  var copyBtn = document.getElementById("copyBtn");
  var copyFeedback = document.getElementById("copy-feedback");
  var qrBtn = document.getElementById("qrBtn");
  var qrBox = document.getElementById("qrBox");
  var qrImage = document.getElementById("qrImage");

  if (shareBtn) {
    shareBtn.addEventListener("click", function () {
      var shareData = {
        title: "MedKnowledge",
        text: "A free AI-powered learning platform for Medical, Nursing and Allied Health students.",
        url: PLATFORM_URL
      };
      if (navigator.share) {
        navigator.share(shareData).catch(function () {});
      } else {
        var msg = encodeURIComponent(shareData.text + " " + shareData.url);
        window.open("https://wa.me/?text=" + msg, "_blank", "noopener");
      }
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      var done = function () {
        copyFeedback.textContent = "Link copied to clipboard.";
        setTimeout(function () { copyFeedback.textContent = ""; }, 3000);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(PLATFORM_URL).then(done).catch(function () {
          copyFeedback.textContent = PLATFORM_URL;
        });
      } else {
        copyFeedback.textContent = PLATFORM_URL;
      }
    });
  }

  if (qrBtn && qrBox && qrImage) {
    qrBtn.addEventListener("click", function () {
      var visible = qrBox.classList.toggle("is-visible");
      qrBtn.setAttribute("aria-expanded", visible ? "true" : "false");
      if (visible && !qrImage.getAttribute("src")) {
        /* Generated via a public QR image service — replace with a self-hosted
           generator if a fully offline build is required. */
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=" + encodeURIComponent(PLATFORM_URL);
      }
    });
  }

  /* ---------------------------------------------------------------------
     10. Footer year
     --------------------------------------------------------------------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
