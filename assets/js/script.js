let hover = document.querySelector(".hover-community");
let hoverList = document.querySelector(".dropdown-content");

hover.addEventListener("mouseenter", (e) => {
  hoverList.classList.add("drop");
  hoverList.classList.remove("dropOut");
});
hover.addEventListener("mouseleave", (e) => {
  hoverList.classList.add("dropOut");
  hoverList.classList.remove("drop");
});

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
mask1.to(".section-intro .intro-mask-2-wrap", {
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

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

let menuBtn = document.querySelector(".mobile-menu");
let nav = document.querySelector(".mo-nav");

menuBtn.addEventListener("click", (e) => {
  nav.classList.toggle("on");
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: true,
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 20,
    }
  }
});


$(".open").click( function () {
  var container = $(this).parents(".topic");
  var answer = container.find(".answer");
  var trigger = container.find(".faq-t");
  
  answer.slideToggle(200);
  
  if (trigger.hasClass("faq-o")) {
    trigger.removeClass("faq-o");
  }
  else {
    trigger.addClass("faq-o");
  }
  
  if (container.hasClass("expanded")) {
    container.removeClass("expanded");
  }
  else {
    container.addClass("expanded");
  }
});
