// ---------- theme: system preference by default, manual toggle overrides & persists ----------
(function () {
  var stored = null;
  try { stored = localStorage.getItem('theme'); } catch (e) {}

  var systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  var theme = stored || (systemPrefersLight ? 'light' : 'dark');
  applyTheme(theme);

  // if the person hasn't manually chosen a theme yet, keep following the OS live
  if (!stored) {
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function (e) {
      applyTheme(e.matches ? 'light' : 'dark');
    });
  }

  window.toggleTheme = function () {
    var current = document.documentElement.getAttribute('data-theme') || 'dark';
    var next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem('theme', next); } catch (e) {} // manual choice now locked in
  };

  function applyTheme(t) {
    if (t === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    var btn = document.getElementById('themeToggleBtn');
    if (btn) btn.textContent = t === 'light' ? '[ light ]' : '[ dark ]';
  }
})();

// ---------- mobile nav ----------
(function () {
  var toggle = document.getElementById('mobileNavToggle');
  var nav = document.getElementById('termnav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', function () {
    nav.classList.toggle('open');
  });
})();

// ---------- typed hero prompt (index page only) ----------
// ---------- typed hero prompt (index page only) — loops: type, pause, delete, pause ----------
(function () {
  var el = document.getElementById('typed');
  if (!el) return;
  var text = el.getAttribute('data-text') || 'whoami';
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) { el.textContent = text; return; }

  var TYPE_SPEED = 90;
  var DELETE_SPEED = 55;
  var PAUSE_AFTER_TYPE = 1400;
  var PAUSE_AFTER_DELETE = 500;

  var i = 0;
  var deleting = false;

  function tick() {
    if (!deleting) {
      el.textContent = text.slice(0, i);
      if (i < text.length) {
        i++;
        setTimeout(tick, TYPE_SPEED);
      } else {
        deleting = true;
        setTimeout(tick, PAUSE_AFTER_TYPE);
      }
    } else {
      el.textContent = text.slice(0, i);
      if (i > 0) {
        i--;
        setTimeout(tick, DELETE_SPEED);
      } else {
        deleting = false;
        setTimeout(tick, PAUSE_AFTER_DELETE);
      }
    }
  }
  tick();
})();

// ---------- footer last-updated date ----------
(function () {
  var f = document.querySelector('[data-footer-date]');
  if (!f) return;
  f.textContent = 'built by dibyansu — last updated ' +
    new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
})();
