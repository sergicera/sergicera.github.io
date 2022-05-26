$(document).ready(function () {
  $("#owl-portfolio").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      568: {
        items: 2,
        nav: false
      },
      1080: {
        items: 3,
        nav: false
      }
    }
  })
})