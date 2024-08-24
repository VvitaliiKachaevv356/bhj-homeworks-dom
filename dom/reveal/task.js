document.addEventListener("scroll", () => {
  const reveals = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;
  reveals.forEach((reveal) => {
    const rect = reveal.getBoundingClientRect();
    const isVisible = rect.top <= windowHeight && rect.bottom >= 0;
    reveal.classList.toggle("reveal_active", isVisible);
  });
});
