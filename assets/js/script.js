const mask1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-intro",
    start: "top top",
    end: "50% 50%",
    scrub: true,
  }
});
const mask2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-intro",
    start: "top top",
    end: "50% 50%",
    scrub: true,
  },
});
const mask3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-intro",
    start: "top top",
    end: "25% 25%",
    scrub: true,
  },
});
mask1.to(".section-intro .intro-mask-2", {
  opacity: 1,
  duration: 1
});
mask2.to(".section-intro .mask-2", {
  opacity: 1,
  duration: 1
});
mask3.to(".section-intro .intro-mask-1", {
  opacity: 0,
  duration: 1
});


let menuBtn = document.querySelector(".mobile-menu");
let nav = document.querySelector(".nav-content");
menuBtn.addEventListener("click", (e) => {
  nav.classList.toggle("on");
});

var galleryTop = new Swiper('.team-gallery', {
  spaceBetween: 10,
  effect: "fade",
  loop: true,
  loopedSlides: 3
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
  },
  centeredSlides: false,
  slidesPerView: 3,
  touchRatio: 0.2,
  slideToClickedSlide: true,
  loop: true,
  loopedSlides: 1
});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;
