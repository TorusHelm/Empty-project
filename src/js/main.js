// function stylingSelects(selector) {
//   var stylingSelects = document.querySelectorAll(selector);
//
//   if (stylingSelects) {
//     for (var i = 0; i < stylingSelects.length; i++) {
//       new CustomSelect({
//         elem: stylingSelects[i] // id of the original select element
//       });
//     }
//   }
// }

function openMobileMenu(){
  var btn = $('.js-mbl-btn'),
      menu = $('#mobile-menu'),
      closeBtn = $('.js-close-btn');

  btn.on('click', function(){
    menu.addClass('is-open');
  });

  closeBtn.on('click', function(){
    menu.removeClass('is-open');
  })
}

$(document).ready(function(){
  openMobileMenu();
});

// document.addEventListener('DOMContentLoaded', function () {
//   stylingSelects('select');
// });