/* ============================================================
   Dionisio Romero — Portfolio interactions
   Vanilla JS, no dependencies.
   ============================================================ */
(function () {
  "use strict";

  var root = document.documentElement;
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Theme toggle ---------- */
  var themeToggle = document.getElementById("themeToggle");

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch (e) {}

    if (themeToggle) {
      var next = theme === "dark" ? "light" : "dark";
      themeToggle.setAttribute("aria-label", "Switch to " + next + " theme");
    }

    // Keep the browser UI colour in sync with the active palette.
    var color = theme === "dark" ? "#12150f" : "#f6f3ec";
    document.querySelectorAll('meta[name="theme-color"]').forEach(function (m) {
      m.setAttribute("content", color);
    });
  }

  if (themeToggle) {
    // Initialise label to match the theme set by the inline head script.
    applyTheme(root.getAttribute("data-theme") || "light");

    themeToggle.addEventListener("click", function () {
      var current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }

  /* ---------- Mobile navigation ---------- */
  var navToggle = document.getElementById("navToggle");
  var navMenu = document.getElementById("navMenu");

  function setNav(open) {
    if (!navToggle || !navMenu) return;
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    navMenu.classList.toggle("open", open);
  }

  function isNavOpen() {
    return navToggle && navToggle.getAttribute("aria-expanded") === "true";
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      setNav(!isNavOpen());
    });

    // Close when a link is chosen.
    navMenu.addEventListener("click", function (e) {
      if (e.target.closest("a")) setNav(false);
    });

    // Close on Escape and return focus to the toggle.
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && isNavOpen()) {
        setNav(false);
        navToggle.focus();
      }
    });

    // Close when clicking outside the menu.
    document.addEventListener("click", function (e) {
      if (!isNavOpen()) return;
      if (!e.target.closest(".primary-nav")) setNav(false);
    });

    // Reset state if the viewport grows past the mobile breakpoint.
    window.matchMedia("(min-width: 820px)").addEventListener("change", function (e) {
      if (e.matches) setNav(false);
    });
  }

  /* ---------- Header shadow on scroll ---------- */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 8);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Scroll reveal ---------- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ---------- Scrollspy: mark the active nav link ---------- */
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll('.nav-menu a[href^="#"]:not(.btn)')
  );
  var sections = navLinks
    .map(function (link) {
      var id = link.getAttribute("href").slice(1);
      return document.getElementById(id);
    })
    .filter(Boolean);

  if (sections.length && "IntersectionObserver" in window) {
    var current = "";
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) current = entry.target.id;
        });
        navLinks.forEach(function (link) {
          var active = link.getAttribute("href") === "#" + current;
          if (active) {
            link.setAttribute("aria-current", "true");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach(function (section) { spy.observe(section); });
  }

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
