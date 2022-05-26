$(document).ready(function () {
  $("#owl-demo1").owlCarousel({
    loop: true,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      736: {
        items: 1,
        nav: false
      }
    }
  })
})