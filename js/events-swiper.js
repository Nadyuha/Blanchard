const eventSwiper = new Swiper(".events__container", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  //loop: true,
  grid: {
    rows: 1
  },
  spaceBetween: 20,
  pagination: {
    el: ".events-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".events-btn-right",
    prevEl: ".events-btn-left"
  },
  breakpoints: {
    676: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 30
    },

    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 26
    },

    1216: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 54
    },
  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }
})
