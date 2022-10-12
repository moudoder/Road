$(document).ready(function () {
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
})

//;