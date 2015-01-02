$(document).ready(function(){

  $('.anniebae').mouseenter(function(){
    $(this).animate({
      height: "85px",
      width: "85px"
    });
  });
  $('.anniebae').mouseleave(function(){
    $(this).animate({
      height: "80px",
      width: "80px"
    });
  });


  $('.project-photo').hover(function(){
    $('.project-caption', this).stop(true, true).slideDown("normal");
  }, function(){
    $('.project-caption', this).stop(true, true).hide();
  });


  // $('.menu-item').hover(function() {
  //   $(this).data('bounce', true);
  //   bounce($(this));
  // }, function() {
  //   $(this).data('bounce', false);
  // });
  
  // function bounce($elem) {
  //   $elem.effect('bounce', {
  //     times: 1,
  //     distance: 10
  //   }, 500, function() {
  //     if ($(this).data('bounce'))
  //       bounce($elem);
  //     else
  //       $elem.stop();
  //   });
  // }



})