var swiper = new Swiper(".swiper-hero", {
  spaceBetween: 30,
  effect: "fade",
  //centeredSlides: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

