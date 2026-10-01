/*
  Arief Indra Kusuma — Portfolio interactions
  Shared by index.html and every page inside projects/.
*/

/* ------------------------------------------------------------
   Theme: light corporate is the DEFAULT, dark mode is opt-in.
   The pre-paint snippet in <head> already applied the stored
   theme; here we only wire up the toggle button.
   ------------------------------------------------------------ */
const THEME_KEY = 'aik-theme';
const themeToggle = document.querySelector('.theme-toggle');

function currentTheme() {
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
}

function applyTheme(theme) {
  const isDark = theme === 'dark';

  if (isDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute('content', isDark ? '#07111f' : '#f4f7fb');
  }

  if (themeToggle) {
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    themeToggle.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }
}

applyTheme(currentTheme());

themeToggle?.addEventListener('click', () => {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try {
    localStorage.setItem(THEME_KEY, next);
  } catch (error) {
    /* storage blocked — the theme still applies for this page view */
  }
});

/* ------------------------------------------------------------
   Header, mobile navigation and back-to-top
   ------------------------------------------------------------ */
const header = document.getElementById('siteHeader');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-menu a');
const backToTop = document.querySelector('.back-to-top');

function updateHeaderState() {
  header?.classList.toggle('scrolled', window.scrollY > 24);
  backToTop?.classList.toggle('show', window.scrollY > 700);
}

updateHeaderState();
window.addEventListener('scroll', updateHeaderState, { passive: true });

navToggle?.addEventListener('click', () => {
  const isOpen = navMenu?.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(Boolean(isOpen)));
  document.body.classList.toggle('menu-open', Boolean(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu?.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navMenu?.classList.contains('open')) {
    navMenu.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
    navToggle?.focus();
  }
});

backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ------------------------------------------------------------
   Reveal on scroll
   ------------------------------------------------------------ */
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}

/* ------------------------------------------------------------
   Active navigation link (single-page sections only)
   ------------------------------------------------------------ */
const sections = [...document.querySelectorAll('main section[id]')];
if (sections.length && !document.body.classList.contains('project-page')) {
  const setActiveNavLink = () => {
    const scrollPosition = window.scrollY + 120;
    let activeId = sections[0]?.id || '';

    sections.forEach((section) => {
      if (scrollPosition >= section.offsetTop) {
        activeId = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${activeId}`);
    });
  };

  setActiveNavLink();
  window.addEventListener('scroll', setActiveNavLink, { passive: true });
}

/* ------------------------------------------------------------
   Project filters
   ------------------------------------------------------------ */
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((btn) => {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    });
    button.classList.add('active');
    button.setAttribute('aria-pressed', 'true');

    projectCards.forEach((card) => {
      const categories = (card.dataset.category || '').split(' ');
      const shouldShow = filter === 'all' || categories.includes(filter);
      card.classList.toggle('hidden', !shouldShow);
    });
  });
});

/* ------------------------------------------------------------
   Optional assets — show them only when the file really exists,
   so a recruiter never meets a broken image or a dead CV link.
   See ASSET_GUIDE.md for the expected file paths.
   ------------------------------------------------------------ */
const cvButtons = document.querySelectorAll('[data-cv-link]');
if (cvButtons.length && window.fetch) {
  const cvHref = cvButtons[0].getAttribute('href');
  fetch(cvHref, { method: 'HEAD' })
    .then((response) => {
      if (response.ok) {
        cvButtons.forEach((button) => button.removeAttribute('hidden'));
      }
    })
    .catch(() => {
      /* CV not uploaded yet — keep the button hidden */
    });
}

/* Current year */
const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}
