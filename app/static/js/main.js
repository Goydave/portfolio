// Toggle hamburger menu
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const words = ["Ethical Hacking", "AI Enthusiasm", "Web Development", "Cybersecurity"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const element = document.getElementById('typed-text');

  function type() {
    const current = words[wordIndex];
    const displayed = isDeleting ? current.slice(0, charIndex--) : current.slice(0, charIndex++);

    element.textContent = displayed;

    if (!isDeleting && charIndex === current.length) {
      isDeleting = true;
      setTimeout(type, 1200);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, isDeleting ? 50 : 100);
    }
  }

  type();
});
