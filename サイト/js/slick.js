$(function() {
    $(".slick01").slick(
    );
    //slickを初期化した際に発生するイベント（初期表示のスライドに.slick-animationのクラスをつける)
$('.slider-wrap').on('init', function () {
  $('.slick-slide[data-slick-index="0"]').addClass('slick-animation');
})
  .slick({
    autoplay: true,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 5000,
    autoplaySpeed: 1000,
    pauseOnFocus: false,
    pauseOnHover: false
  })
  .on({
    // スライドが移動する前に発生するイベント
    beforeChange: function (event, slick, currentSlide, nextSlide) {
      //表示されているスライドに.slick-animationのクラスをつける
      $(".slick-slide", this).eq(nextSlide).addClass("slick-animation");

      //あとで、.slick-animationのクラスを消すための.stop-animationクラスを付ける
      $(".slick-slide", this).eq(currentSlide).addClass("stop-animation");
    },
    // スライドが移動した後に発生するイベント
    afterChange: function () {
      //見えてないスライドにはアニメーションのクラスを外す
      $(".stop-animation", this).removeClass("stop-animation slick-animation");
    },
  });
  });