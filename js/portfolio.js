/* =============================================================
   portfolio.js — Farhaan Beeharry
   Vanilla JS: nav, scroll-spy, reveal, skill bars, filters, count-up.
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

    /* ---- scroll-spy ---- */
    var sections = navLinks
      .map(function (a) {
        var id = a.getAttribute("href");
        return id && id.charAt(0) === "#" ? document.querySelector(id) : null;
      })
      .filter(Boolean);

    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            var id = "#" + e.target.id;
            navLinks.forEach(function (a) {
              a.classList.toggle("active", a.getAttribute("href") === id);
            });
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach(function (s) { spy.observe(s); });

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

    /* ---- skill bars ---- */
    var bars = document.querySelectorAll(".bar > i");
    var bo = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            var target = e.target.getAttribute("data-w") || "0";
            e.target.style.width = reduce ? target + "%" : "";
            if (!reduce) {
              // force reflow then animate
              void e.target.offsetWidth;
              e.target.style.width = target + "%";
            }
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    bars.forEach(function (b) { bo.observe(b); });

    /* ---- count-up stats ---- */
    var nums = document.querySelectorAll("[data-count]");
    var co = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          var el = e.target;
          var target = parseFloat(el.getAttribute("data-count"));
          var suffix = el.getAttribute("data-suffix") || "";
          var dur = 1500;
          if (reduce) { el.textContent = target + suffix; obs.unobserve(el); return; }
          var start = null;
          function step(ts) {
            if (!start) start = ts;
            var p = Math.min((ts - start) / dur, 1);
            var eased = 1 - Math.pow(1 - p, 3);
            var val = target * eased;
            el.textContent = (target % 1 === 0 ? Math.round(val) : val.toFixed(1)) + suffix;
            if (p < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
          obs.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    nums.forEach(function (n) { co.observe(n); });

    /* ---- portfolio filters ---- */
    var filters = document.querySelectorAll(".filter");
    var works = Array.prototype.slice.call(document.querySelectorAll(".work"));
    filters.forEach(function (f) {
      f.addEventListener("click", function () {
        filters.forEach(function (x) { x.classList.remove("active"); });
        f.classList.add("active");
        var cat = f.getAttribute("data-filter");
        works.forEach(function (w) {
          var match = cat === "all" || w.getAttribute("data-cat").indexOf(cat) !== -1;
          if (match) {
            w.classList.remove("hide");
            requestAnimationFrame(function () { w.classList.remove("reveal-out"); });
          } else {
            w.classList.add("reveal-out");
            setTimeout(function () { w.classList.add("hide"); }, reduce ? 0 : 300);
          }
        });
      });
    });

    /* ---- footer year (defensive; static in HTML too) ---- */
    var y = document.querySelector("[data-year]");
    if (y) y.textContent = y.getAttribute("data-year");
  });
})();
