document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.container');

  sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transition = 'opacity 1s ease-out';
  });

  const revealOnScroll = () => {
    const scrollPos = window.scrollY + window.innerHeight;

    sections.forEach(section => {
      if (section.offsetTop < scrollPos) {
        section.style.opacity = 1;
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});
