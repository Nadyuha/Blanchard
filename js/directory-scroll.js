document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.directory__accordion-list-btn').forEach(el => {
    el.addEventListener('touchend', () => {
      const el = document.getElementById('pic1');
      const elem = document.getElementById('pic2');
      elem.scrollIntoView({behavior: "smooth"});
      el.scrollIntoView({behavior: "smooth"});
    })
  });
})
