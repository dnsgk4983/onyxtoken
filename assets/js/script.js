
const mask2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-intro",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  },
});
mask2.to(".section-intro .mask-2", {
  opacity: 1,
  duration: 1
});