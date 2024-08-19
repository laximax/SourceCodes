const card = document.querySelector('.card');

card.addEventListener('mouseenter', () => {
  gsap.to(card, { duration: 0.6, rotationY: 180 });
});

card.addEventListener('mouseleave', () => {
  gsap.to(card, { duration: 0.6, rotationY: 0 });
});

// Designed by Laximax.code
// Please Support Me !
