// WebAgents project site: small progressive enhancements. The page is complete without this file.
(function () {
  "use strict";
  var root = document.documentElement;

  // ---- theme: follows the system until the visitor chooses; the choice is remembered per browser
  function storedTheme() {
    try { return window.localStorage.getItem("webagents-theme"); } catch (e) { return null; }
  }
  function currentTheme() {
    var set = root.getAttribute("data-theme");
    if (set === "dark" || set === "light") return set;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  var saved = storedTheme();
  if ((saved === "dark" || saved === "light") && !root.hasAttribute("data-theme")) {
    root.setAttribute("data-theme", saved);
  }
  var themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { window.localStorage.setItem("webagents-theme", next); } catch (e) { /* not remembered */ }
    });
  }

  // ---- section menu on narrow screens
  var menuToggle = document.getElementById("menu-toggle");
  var nav = document.getElementById("site-nav");
  function closeMenu() {
    if (!nav || !menuToggle) return;
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) closeMenu();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });
  }

  // ---- the five steps of the run: tabs that advance on their own until the visitor takes over
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.steps [role="tab"]'));
  var panels = tabs.map(function (tab) { return document.getElementById(tab.getAttribute("aria-controls")); });
  var active = 0;
  var timer = null;
  function show(index, focus) {
    active = (index + tabs.length) % tabs.length;
    tabs.forEach(function (tab, i) {
      var on = i === active;
      tab.setAttribute("aria-selected", on ? "true" : "false");
      tab.tabIndex = on ? 0 : -1;
      if (panels[i]) panels[i].classList.toggle("is-active", on);
    });
    if (focus) tabs[active].focus();
  }
  function stop() {
    if (timer) { window.clearInterval(timer); timer = null; }
  }
  if (tabs.length) {
    tabs.forEach(function (tab, i) {
      tab.addEventListener("click", function () { stop(); show(i, false); });
      tab.addEventListener("keydown", function (event) {
        if (event.key === "ArrowRight" || event.key === "ArrowDown") { event.preventDefault(); stop(); show(active + 1, true); }
        if (event.key === "ArrowLeft" || event.key === "ArrowUp") { event.preventDefault(); stop(); show(active - 1, true); }
        if (event.key === "Home") { event.preventDefault(); stop(); show(0, true); }
        if (event.key === "End") { event.preventDefault(); stop(); show(tabs.length - 1, true); }
      });
    });
    var art = document.querySelector(".hero-art");
    var calm = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (art && !calm) {
      art.addEventListener("pointerdown", stop);
      art.addEventListener("pointerenter", stop);
      art.addEventListener("focusin", stop);
      timer = window.setInterval(function () {
        if (document.hidden) return;
        show(active + 1, false);
        if (active === 0) stop();
      }, 4500);
    }
  }

  // ---- copy buttons: the text is also selectable on the page, so a refusal costs nothing
  Array.prototype.forEach.call(document.querySelectorAll("[data-copy-target]"), function (button) {
    var label = button.querySelector("span");
    var original = label ? label.textContent : "";
    button.addEventListener("click", function () {
      var source = document.getElementById(button.getAttribute("data-copy-target"));
      if (!source) return;
      var text = source.textContent;
      function done(message) {
        if (!label) return;
        label.textContent = message;
        window.setTimeout(function () { label.textContent = original; }, 2000);
      }
      function selectInstead() {
        var holder = source.closest("details");
        if (holder) holder.open = true;
        var range = document.createRange();
        range.selectNodeContents(source);
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        done("Selected: press copy");
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { done("Copied"); }, selectInstead);
      } else {
        selectInstead();
      }
    });
  });

  // ---- mark the section in view in the header
  var links = Array.prototype.slice.call(document.querySelectorAll('.site-nav a[href^="#"]'));
  if ("IntersectionObserver" in window && links.length) {
    var byId = {};
    links.forEach(function (link) { byId[link.getAttribute("href").slice(1)] = link; });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (link) { link.removeAttribute("aria-current"); });
        var link = byId[entry.target.id];
        if (link) link.setAttribute("aria-current", "true");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(byId).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  }
})();
