$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    nav: true,
    // animateIn: 'flipInX',
    navText: [
      '<img src="/assets/slider-left.png" class="owl-carousel',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
  })
})
