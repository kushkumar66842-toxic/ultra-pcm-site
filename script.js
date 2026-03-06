// Dark/Light Mode
const themeToggle = document.getElementById('themeToggle');
themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Scroll Animations
const cards = document.querySelectorAll('.card');
cards.forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: card,
    opacity: 0,
    y: 50,
    duration: 1,
    delay: i * 0.2,
    ease: "power2.out"
  });
});
