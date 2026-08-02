/* =============================================================
   project.js — behaviour for project detail pages.
   Navbar scrolled state, mobile menu, reveal-on-scroll,
   and the same stale-service-worker eviction guard.
   ============================================================= */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.addEventListener("DOMContentLoaded", function () {
    var nav = document.querySelector(".nav");
    var toggle = document.querySelector(".nav-toggle");
    var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-links a"));

    /* ---- navbar scrolled state ---- */
    function onScroll() {
      if (window.scrollY > 30) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    /* ---- mobile menu ---- */
    if (toggle) {
      toggle.addEventListener("click", function () {
        nav.classList.toggle("open");
        var open = nav.classList.contains("open");
        toggle.innerHTML = open ? '<i class="fa fa-times"></i>' : '<i class="fa fa-bars"></i>';
      });
    }
    navLinks.forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        if (toggle) toggle.innerHTML = '<i class="fa fa-bars"></i>';
      });
    });

    /* ---- reveal on scroll ---- */
    var reveals = document.querySelectorAll(".reveal");
    if (reduce) {
      reveals.forEach(function (el) { el.classList.add("in"); });
    } else {
      var ro = new IntersectionObserver(
        function (entries, obs) {
          entries.forEach(function (e) {
            if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
      );
      reveals.forEach(function (el) { ro.observe(el); });
    }
  });
})();
