$(document).ready(function () {

  $('.questions-block').on('click', function() {
      $(this).toggleClass('active');
  })

  $('.subscription-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    swipe: false,
    dots: true,
    prevArrow: $('.subscription-arrow--prev'),
    nextArrow: $('.subscription-arrow--right')
  });
  $('.feedback-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    swipe: false,
    dots: false,
    prevArrow: $('.feedback-slider-arrow--prev'),
    nextArrow: $('.feedback-slider-arrow--next')
  });
  $('.reviews-slider').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipe: true,
    dots: false,
    prevArrow: $('.reviews-arrow--prev'),
    nextArrow: $('.reviews-arrow--next')
  });


  if ($(window).width() <= 768) {
    $('.fighter-row').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: true,
      variableWidth: true
      //dots: false,
      //prevArrow: $('.reviews-arrow--prev'),
      //nextArrow: $('.reviews-arrow--next')
    });
  }
})