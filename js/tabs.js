document.addEventListener("DOMContentLoaded", function() {
  function tabsActive(tabPath, tabTarget) {
    document.querySelectorAll(tabPath).forEach(item => {
    item.addEventListener('click', function(e) {
      let path = e.currentTarget.dataset.path;
      document.querySelectorAll(tabTarget).forEach(el => {
        el.classList.remove( 'active-img');
      })
      document.querySelectorAll(tabPath).forEach(el => {
        el.classList.remove('active-img');
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('active-img');

      this.classList.add('active-img');
    })
  })
  };
  tabsActive('.directory__accordion-list-btn', '.directory__content-left')

  document.querySelectorAll('.directory__accordion-list-btn').forEach(el => {
    el.addEventListener('click', () => {
      document.querySelector('.active-item').classList.remove('active-item');
      el.classList.toggle('active-item');
    })
  })
})

