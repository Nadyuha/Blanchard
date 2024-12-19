document.querySelector(".form__open").addEventListener("click", function() {
  document.querySelector(".form__search").classList.add("form__active");
  this.classList.add("active");
})

document.querySelector(".form__search-close").addEventListener("click", function() {
  document.querySelector(".form__search").classList.remove("form__active");
  document.querySelector(".form__open").classList.remove("active")
  //this.classList.remove("active");
})

document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".form__search");
  if (!target.closest(".form")) {
  form.classList.remove("form__active");
    form.querySelector("input").value = "";
    document.querySelector(".form__open").classList.remove("active")
  }
})
