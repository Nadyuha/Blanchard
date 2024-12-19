document.querySelector('.contacts__form-btn').addEventListener('click', (e) => {
  e.preventDefault()
  if (document.getElementById('contacts-name').value == '') {
    document.querySelectorAll('.contacts__form-error')[0].classList.add('error-active')
    document.querySelectorAll('.contacts__form-input')[0].classList.add('contacts__form-input-error')
  } else if (document.getElementById('contacts-name').value !== '') {
    document.querySelectorAll('.contacts__form-error')[0].classList.remove('error-active')
  }
  if (document.getElementById('contacts-tel').value == '') {
    document.querySelectorAll('.contacts__form-error')[1].classList.add('error-active')
    document.querySelectorAll('.contacts__form-input')[1].classList.add('contacts__form-input-error')
  } else if (document.getElementById('contacts-tel').value !== '') {
    document.querySelectorAll('.contacts__form-error')[1].classList.remove('error-active')
  }

  document.getElementById('contacts-name').addEventListener('input', () => {
    if (document.getElementById('contacts-name').value !== '') {
      document.querySelectorAll('.contacts__form-error')[0].classList.remove('error-active')
      document.querySelectorAll('.contacts__form-input')[0].classList.remove('contacts__form-input-error')
    }
  })
  document.getElementById('contacts-tel').addEventListener('input', () => {
    if (document.getElementById('contacts-tel').value !== '') {
      document.querySelectorAll('.contacts__form-error')[1].classList.remove('error-active')
      document.querySelectorAll('.contacts__form-input')[1].classList.remove('contacts__form-input-error')
    }
  })
})
