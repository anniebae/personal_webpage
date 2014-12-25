$(document).ready(function(){

  $('.anniebae').mouseenter(function(){
    $(this).animate({
      height: "90px",
      width: "90px"
    });
  });
  $('.anniebae').mouseleave(function(){
    $(this).animate({
      height: "80px",
      width: "80px"
    });
  });

  $('.restaurant').hover(function(){
    $('.restaurant-txt', this).stop(true, true).slideDown("normal");
  }, function(){
    $('.restaurant-txt', this).stop(true, true).hide();
  });


  $('.menu-item').hover( 
    function() { $(this).data('bounce', true); bounce($(this));}, 
    function() { $(this).data('bounce', false);
  });

  function bounce($elem) {
    $elem.effect('bounce', { times: 1, distance: 10 }, 500, function() {
        if ($(this).data('bounce')) bounce($elem);
        else $elem.stop();
    });
  }


})