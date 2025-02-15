$(document).ready(function () {
  // Set Options
  var speed = 500; // The speed for transition when we click the left, right arrow
  var autoswitch = true; // auto slider option
  var autoswitch_speed = 4000; // Auto slider speed

  // Add initial active class
  $('.slide').first().addClass('active');

  // Hide all slides
  $('.slide').hide();

  // Show first slide
  $('.active').show();

  $('#next').on('click', nextSlide);

  $('#prev').on('click', prevSlide);

  if (autoswitch == true) {
    setInterval(nextSlide, autoswitch_speed)
  }

  // Switch to next slide function
  function nextSlide () {
     $('.active').removeClass('active').addClass('oldActive');
      if ($('.oldActive').is(':last-child')) {
        $('.slide').first().addClass('active');
      }
      else {
        $('.oldActive').next().addClass('active');
      }
      $('.oldActive').removeClass('oldActive');
      $('.slide').fadeOut(speed);
      $('.active').fadeIn(speed);
  }

  // Switch to previous slide
  function prevSlide () {
    $('.active').removeClass('active').addClass('oldActive');
      if ($('.oldActive').is(':first-child')) {
        $('.slide').last().addClass('active');
      }
      else {
        $('.oldActive').prev().addClass('active');
      }
      $('.oldActive').removeClass('oldActive');
      $('.slide').fadeOut(speed);
      $('.active').fadeIn(speed);
  }
});
