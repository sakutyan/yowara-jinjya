$(function() {
    var menu = $('#global-nav'),
    offset = menu.offset();
    $(window).scroll(function () {
      if($(window).scrollTop() > offset.top) {
        menu.addClass('fixed');
      } else {
        menu.removeClass('fixed');
      }
    });
  });