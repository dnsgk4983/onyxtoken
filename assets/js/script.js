// 드롭다운
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {

  var dropdowns = document.querySelector("community");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}

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


let menuBtn = document.querySelector(".mobile-menu");
let nav = document.querySelector(".nav-content");
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
