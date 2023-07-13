$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    nav: true,
    // animateIn: 'flipInX',
    navText: [
      "<div class='nav-button owl-prev'><img src='/assets/slider-left.png'></div>",
      "<div class='nav-button owl-next'>›</div>",
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
