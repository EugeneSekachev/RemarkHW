//имя слайдера
$slider = $('.slider');
//функции слайдера с адаптивом
$(document).ready(function () {
  if ($(window).width() > 900) {
    $slider.slick({
      slidesToShow: 3,
      infinite: false,
      speed: 300,
      easing: 'ease-in-out'
    });
  } else if ($(window).width() > 500) {
    $slider.slick({
      slidesToShow: 2,
      infinite: false,
      speed: 300,
      easing: 'ease-in-out'
    });
  } {
    $slider.slick({
      slidesToShow: 1,
      infinite: false,
      speed: 300,
      easing: 'ease-in-out'
    })
  }
});
