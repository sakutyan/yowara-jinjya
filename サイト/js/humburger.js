$(function() {
    $(".humburger").click(function () {
        $(this).toggleClass("open");
        $(".menu").toggleClass("slide");
      });
  });