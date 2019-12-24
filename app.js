$(function(){

    $(".number").on("touchstart", function() { console.log("hey"); });

    // Touch Move event handler drag numbers
    $(".number").on("touchmove", function(e){
      var touch = event.targetTouches[0];
      event.target.style.left = touch.pageX + 'px';
      event.target.style.top = touch.pageY + 'px';
    });

});