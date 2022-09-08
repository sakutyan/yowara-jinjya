$(function() {
    $('.open-btn').click(function(){
        $(this).parent().next().slideToggle();
        $(this).toggleClass('close-btn');
    })
  });