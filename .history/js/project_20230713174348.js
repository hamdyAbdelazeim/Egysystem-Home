$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    nav: true,
    // animateIn: 'flipInX',
    navText: [
      'img',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
  })
})
