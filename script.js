// Scroll animation using IntersectionObserver
const fadeInElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

fadeInElements.forEach(el => {
  observer.observe(el);
});

// Filter projects by category (if needed)
const filterButtons = document.querySelectorAll('.filter-button');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');

    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    projectCards.forEach(card => {
      const match = card.getAttribute('data-category') === category || category === 'all';
      card.style.display = match ? 'flex' : 'none';
    });
  });
});

// Simple fade-in effect
window.addEventListener('scroll', () => {
  fadeInElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});