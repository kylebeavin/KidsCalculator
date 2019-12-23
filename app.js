$(function(){
      var touchzone1 = document.getElementById("one");

    touchzone1.addEventListener("touchmove", function(event){
      event.stopPropagation();
        var touch = event.targetTouches[0];
        console.log(event)
        // Place element where the finger is
        event.target.style.left = touch.pageX + 'px';
        event.target.style.top = touch.pageY + 'px';
        event.preventDefault();
    }, false);
});

// function init() {
    // Get a reference to our touch-sensitive element
    // var touchzone1 = document.getElementById("1");
    // var touchzone2 = document.getElementById("2");
    // var touchzone3 = document.getElementById("3");
    // var touchzone4 = document.getElementById("4");
    // var touchzone5 = document.getElementById("5");
    // var touchzone6 = document.getElementById("6");
    // var touchzone7 = document.getElementById("7");
    // var touchzone8 = document.getElementById("8");
    // var touchzone9 = document.getElementById("9");
    // Add an event handler for the touchstart event
    // touchzone1.addEventListener("touchstart", touchHandler, false);
    // touchzone2.addEventListener("touchstart", touchHandler, false);
    // touchzone3.addEventListener("touchstart", touchHandler, false);
    // touchzone4.addEventListener("touchstart", touchHandler, false);
    // touchzone5.addEventListener("touchstart", touchHandler, false);
    // touchzone6.addEventListener("touchstart", touchHandler, false);
    // touchzone7.addEventListener("touchstart", touchHandler, false);
    // touchzone8.addEventListener("touchstart", touchHandler, false);
    // touchzone9.addEventListener("touchstart", touchHandler, false);

    // touchzone1.addEventListener("touchmove", function(event){
    //     var touch = event.targetTouches[0];
    //     console.log(event)
    //     // Place element where the finger is
    //     event.target.style.left = touch.pageX + 'px';
    //     event.target.style.top = touch.pageY + 'px';
    //     event.preventDefault();
    // }, false);

    // touchzone1.addEventListener("touchstart", touchstart, false);
// }

// function touchstart(e){
//   debugger;
//   e.preventDefault();
//   console.log("hi");
//   var whichNum = e.target;
//   var touch = e.touches[0];
//   var moveOffsetX = whichNum.offSetLeft - touch.pageX;
//   var moveOffsetY = whichNum.offSetTop - touch.pageY;
//   //resetZ();
//   whichNum.style.zIndex = 10;

//   whichNum.addEventListener("touchmove", function(){
//     console.log("hey");
//     var positionX = touch.pageX + moveOffsetX;
//     var positionY = touch.pageY + moveOffsetY;
//     whichNum.style.left = positionX + 'px';
//     whichNum.style.top = positionY + 'px';
//   }, false);
// }

// function touchHandler(event) {
//   // Get a reference to our coordinates div
//   var coords = document.getElementById("number-x");
//   // Write the coordinates of the touch to the div
//   coords.innerHTML = 'x: ' + event.touches[0].pageX + ', y: ' + event.touches[0].pageY;
// }