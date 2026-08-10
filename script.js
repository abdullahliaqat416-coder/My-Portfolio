// =========================================================
// Abdullah — Portfolio | script.js
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Mobile nav toggle ---------- */
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  /* ---------- Highlight active nav link by current page ---------- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ---------- Services: See More / See Less ---------- */
  const seeMoreBtn = document.getElementById('seeMoreBtn');
  const extraServices = document.getElementById('extraServices');

  if (seeMoreBtn && extraServices) {
    seeMoreBtn.addEventListener('click', () => {
      const isOpen = extraServices.classList.toggle('show');
      seeMoreBtn.innerHTML = isOpen
        ? '<i class="fa-solid fa-chevron-up"></i> See Less'
        : '<i class="fa-solid fa-chevron-down"></i> See More';
    });
  }

  /* ---------- Projects: tab filter ---------- */
  const tabBtns = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.project-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const target = document.getElementById(btn.dataset.target);
      if (target) target.classList.add('active');
    });
  });
/* ---------- Projects: See More per category ---------- */
  const projectSeeMoreBtns = document.querySelectorAll('.project-see-more');

  projectSeeMoreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = document.getElementById(btn.dataset.panel);
      if (!panel) return;
      const grid = panel.querySelector('.project-grid');
      const isOpen = grid.classList.toggle('show-extra');
      btn.innerHTML = isOpen
        ? '<i class="fa-solid fa-chevron-up"></i> See Less'
        : '<i class="fa-solid fa-chevron-down"></i> See More';
    });
  });
  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => observer.observe(el));

  /* ---------- Contact form (front-end only demo) ---------- */
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('cf-name');
      const email = document.getElementById('cf-email');

      if (!name.value.trim() || !email.value.trim()) {
        return;
      }

      formSuccess.textContent = `Thanks ${name.value.trim()}, your message has been noted. I'll get back to you soon.`;
      formSuccess.classList.add('show');
      contactForm.reset();
    });
  }

  /* ---------- Navbar shrink shadow on scroll ---------- */
  const nav = document.querySelector('.navbar');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        nav.style.boxShadow = '0 6px 20px rgba(75,53,30,0.08)';
      } else {
        nav.style.boxShadow = 'none';
      }
    });
  }

});
