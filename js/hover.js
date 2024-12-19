document.addEventListener('DOMContentLoaded', function() {
  function hasTouchDevice() {
    return !!('ontouchstart' in window || navigator.maxTouchPoints);
  }
  if (!hasTouchDevice()) {
    const toUp = document.querySelectorAll('.bg-focus');
    toUp.onmouseenter = function(){
      this.classList.add('hover');
    }
    toUp.onmouseleave = function() {
      this.classList.remove('hover');
    }
  }
});
