const mask1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-intro",
    start: "top top",
    end: "50% 50%",
    scrub: true,
  },
});
const mask2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-intro",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  },
});
mask1.to(".section-intro .intro-mask-2", {
  opacity: 1,
  duration: 1,
});
mask2.to(".section-intro .mask-2", {
  opacity: 1,
  duration: 1,
});

let menuBtn = document.querySelector(".mobile-menu");
let nav = document.querySelector(".nav-content");
menuBtn.addEventListener("click", (e) => {
  nav.classList.toggle("on");
});

var galleryTop = new Swiper(".team-gallery", {
  spaceBetween: 10,
  effect: "fade",
  loop: true,
  loopedSlides: 3,
});
var galleryThumbs = new Swiper(".gallery-thumbs", {
  spaceBetween: 10,
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
  },
  centeredSlides: true,
  slidesPerView: "auto",
  touchRatio: 0.2,
  slideToClickedSlide: true,
  loop: true,
  loopedSlides: 3,
});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;

// 221012 jinsu
const multiChainSection = document.querySelector(".multi-chain_wrap");
let scrollTop;
let offsetTopMulti;
let multiHeight;
let scrollRealHeight;
let percent;

window.addEventListener("scroll", () => {
  scrollTop = window.pageYOffset;
  offsetTopMulti = multiChainSection.getBoundingClientRect().top + scrollTop;
  multiHeight = multiChainSection.offsetHeight;
  scrollRealHeight = multiHeight - window.innerHeight;
  percent = ((scrollTop - offsetTopMulti) / scrollRealHeight) * 100;
  console.log(percent);
});
