// ═══════════════════════════════════════════════════
//  FitLife Studio — script.js
// ═══════════════════════════════════════════════════

// ── Mobile menu ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// Close mobile menu when a link is clicked
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ── FAQ accordion ──
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item   = btn.parentElement;
    const answer = item.querySelector('.faq-a');
    const isOpen = btn.classList.contains('open');

    // Close all others
    document.querySelectorAll('.faq-q.open').forEach(openBtn => {
      openBtn.classList.remove('open');
      openBtn.parentElement.querySelector('.faq-a').classList.remove('open');
    });

    // Toggle current
    if (!isOpen) {
      btn.classList.add('open');
      answer.classList.add('open');
    }
  });
});

// ── Smooth navbar shadow on scroll ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.boxShadow = window.scrollY > 40
    ? '0 2px 16px rgba(44,74,110,.12)'
    : 'none';
});

// ── Form submit → WhatsApp ──
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('f-name').value.trim();
  const goal = document.getElementById('f-goal').value.trim();
  const msg  = `Hi! My name is ${name} and my main goal is: ${goal}. I'd love to learn more about your program!`;
  window.open(`https://wa.me/972509451419?text=${encodeURIComponent(msg)}`, '_blank');
});

// ── Fade-in on scroll (Intersection Observer) ──
const fadeEls = document.querySelectorAll(
  '.pillar-card, .include-item, .bonus-card, .price-card, .testi-card, .faq-item'
);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

fadeEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
  observer.observe(el);
});

// Add visible class styles via JS
document.head.insertAdjacentHTML('beforeend', `
  <style>
    .visible { opacity: 1 !important; transform: translateY(0) !important; }
  </style>
`);
