// Arief Indra Kusuma — Portfolio interactions

const header = document.getElementById('siteHeader');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-menu a');
const backToTop = document.querySelector('.back-to-top');

function updateHeaderState() {
  const scrolled = window.scrollY > 24;
  header?.classList.toggle('scrolled', scrolled);
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

backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Reveal on scroll
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

// Active navigation link
const sections = [...document.querySelectorAll('main section[id]')];
function setActiveNavLink() {
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
}

setActiveNavLink();
window.addEventListener('scroll', setActiveNavLink, { passive: true });

// Project filters
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    projectCards.forEach((card) => {
      const categories = (card.dataset.category || '').split(' ');
      const shouldShow = filter === 'all' || categories.includes(filter);
      card.classList.toggle('hidden', !shouldShow);
    });
  });
});

// Current year
const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}
