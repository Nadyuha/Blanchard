document.addEventListener("DOMContentLoaded", function() {
  function scrollOff() {
    document.body.classList.add('scroll-hidden')
  }

  function scrollOn() {
    document.body.classList.remove('scroll-hidden')
  }

  document.querySelectorAll('.swiper-slide_gallary').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault()
      document.getElementById('modal-container').classList.add('active-modal');
      document.getElementById('inner').classList.add('active-modal');
      scrollOff()
    })
  })

  document.getElementById('gallary-img-2').addEventListener('click', (e) => {
    e.preventDefault()
    document.getElementById('modal-block-1').classList.add('block-active');
    document.getElementById('modal-container-1').classList.add('block-active');
  })

  document.getElementById('gallary-img-1').addEventListener('click', (e) => {
    e.preventDefault()
    document.getElementById('modal-block-2').classList.add('block-active');
    document.getElementById('modal-container-2').classList.add('block-active');
  })

  document.getElementById('gallary-img-3').addEventListener('click', (e) => {
    e.preventDefault()
    document.getElementById('modal-block-3').classList.add('block-active');
    document.getElementById('modal-container-3').classList.add('block-active');
  })

  document.getElementById('gallary-img-4').addEventListener('click', (e) => {
    e.preventDefault()
    document.getElementById('modal-block-4').classList.add('block-active');
    document.getElementById('modal-container-4').classList.add('block-active');
  })

  document.getElementById('gallary-img-5').addEventListener('click', (e) => {
    e.preventDefault()
    document.getElementById('modal-block-5').classList.add('block-active');
    document.getElementById('modal-container-5').classList.add('block-active');
  })

  document.getElementById('gallary-img-6').addEventListener('click', (e) => {
    e.preventDefault()
    document.getElementById('modal-block-6').classList.add('block-active');
    document.getElementById('modal-container-6').classList.add('block-active');
  })

  function closeModal(e) {
    e.preventDefault()
    scrollOn()
    document.getElementById('modal-container').classList.remove('active-modal');
    document.getElementById('inner').classList.remove('active-modal');
    document.querySelectorAll('.modal__container-block').forEach(el => {
      el.classList.remove('block-active');
    })
    document.querySelectorAll('.modal__container-right').forEach(el => {
      el.classList.remove('block-active');
    })
  }

  document.getElementById('modal-btn').addEventListener('click', closeModal)
  document.querySelector('.modal-block').addEventListener('click', closeModal)

})
