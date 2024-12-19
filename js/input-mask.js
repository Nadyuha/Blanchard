document.addEventListener('DOMContentLoaded', () => {

  const inputElement = document.getElementById('contacts-tel')
  const maskOptions = {
    mask: '+{7}(000)000-00-00'
  }
  IMask(inputElement, maskOptions)


  document.getElementById('contacts-name').addEventListener('input', function(e){
    document.getElementById('contacts-name').value = document.getElementById('contacts-name').value.replace(/[^а-яА-Яa-zA-Z]/g,'');
  });
})
