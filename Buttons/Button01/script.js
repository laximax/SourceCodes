document.querySelectorAll('.delete-button').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    gsap.to(item, {
      duration: 0.6,
      opacity: 0,
      scale: 0,
      ease: 'power1.inOut',
      onComplete: () => {
        item.remove();
      },
    });
  });
});
// Hello developer, I have a message for you please don't forget to follow me :(
