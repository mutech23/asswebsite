// Animate on load using GSAP
document.addEventListener("DOMContentLoaded", () => {
  gsap.to(".animate", {
    duration: 1,
    opacity: 1,
    y: 0,
    stagger: 0.3,
    ease: "power3.out"
  });
});