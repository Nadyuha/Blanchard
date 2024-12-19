var gallarySwiper = new Swiper(".gallery__container-right", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  grid: {
    rows: 1
  },
  spaceBetween: 0,
  pagination: {
    el: ".swiper-paginations",
    clickable: true,
    type: "fraction"
  },
  navigation: {
    nextEl: ".swiper__btns-right",
    prevEl: ".swiper__btns-left"
  },
  breakpoints: {
    426: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 0
    },

    621: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 35
    },

    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 44
    }
  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }
});


