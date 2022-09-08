$(function(){
    function ScrollButton(button, place){
      // スクロールさせたい場所を定義
      var position = $(place).offset().top - 260;  
      // 指定のボタンを押したら、スクロールさせる。
      $(button).click(function(){
        $("html,body").animate({
            scrollTop : position
        }, {
            queue : false
        });
      });
    }

    // 使う場合、下記のようにする。ScrollButton(ボタン, スクロールさせたい場所)
    ScrollButton(".about-btn", ".about")
    ScrollButton(".highlight-btn", ".highlight")
    ScrollButton(".history-btn", ".history")
    ScrollButton(".event-btn", ".event")
    ScrollButton(".grave-btn", ".grave")
    ScrollButton(".contact-btn", ".contact")
  });
