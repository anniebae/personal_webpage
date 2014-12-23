$('#menu-item').hover(function() {
  $(this).stop().animate({
    top: -50
  }, 900, "easeOutBounce");
}, function() {
  $(this).stop().animate({
    top: 0
  }, 900, "easeOutBounce");
});