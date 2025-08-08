const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

faders.forEach(el => appearOnScroll.observe(el));

// Smooth scroll for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target?.scrollIntoView({ behavior: 'smooth' });
  });
});