'use strict';
window.addEventListener('DOMContentLoaded',()=>{
  const copy = document.querySelector('[copy-date]');
  let year = new Date();
  function getDateNew () {
    year = new Date()
    copy.textContent = year
  }
  setInterval(getDateNew,1000)
  copy.textContent = year
})