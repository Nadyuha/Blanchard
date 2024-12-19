var projectsSwiper = new Swiper(".projects__swiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  grid: {
    rows: 1
  },
  spaceBetween: 0,
  navigation: {
    nextEl: ".projects-btn-right",
    prevEl: ".projects-btn-left"
  },
  breakpoints: {
    621: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 10
    },

    767: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 33
    },

    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 45
    },

    1500: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 52
    },

  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }
})
