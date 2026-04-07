// ========== BLACK HALO — SHARED JS ==========

// Loader
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hidden');
  }, 800);
});

// Nav scroll
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 80);
});

// Mobile menu
function toggleMobile() {
  const menu = document.getElementById('mobileMenu');
  const hamburger = document.querySelector('.hamburger');
  if (menu) menu.classList.toggle('active');
  if (hamburger) hamburger.classList.toggle('active');
  document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
}

// Lightbox
function openLightbox(el) {
  const img = el.querySelector('img');
  if (!img) return;
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightboxImg');
  if (lb && lbImg) {
    lbImg.src = img.src;
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}
function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) {
    lb.classList.remove('active');
    document.body.style.overflow = '';
  }
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

// Scroll Reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Stagger gallery/video items
  document.querySelectorAll('.photo-item.reveal, .video-card.reveal, .placeholder-item.reveal').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.08}s`;
  });
});
