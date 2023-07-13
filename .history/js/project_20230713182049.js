$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    nav: true,
    // animateIn: 'flipInX',
    navText: [
      "<div class='nav-button owl-prev'><img src='/assets/slider-left.png'></div>",
      "<span"
      "<div class='nav-button owl-next'><img src='/assets/slider-right.png'></div>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  })
})
