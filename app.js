$(function(){

    $(".number").on("touchstart", function() {
       console.log("hey"); 

      // Touch Move event handler drag numbers
      $(".number").on("touchmove", function(e){
        var touch = event.targetTouches[0];
        event.target.style.left = touch.pageX + 'px';
        event.target.style.top = touch.pageY + 'px';
      });

      // Touch End event handler check if in dropzone
      $(".number").on("touchend", function(e){
        debugger;
        var addRect1 = $("#number-x");
        var numRect1 = event.target.getBoundingClientRect();
        var numRect2 = addRect1[0].getBoundingClientRect();

        // Check for collision
        var overlap = overlap();

          if (overlap) {
            addRectangles();
          }
      });
    });
});

function addRectangles(){
  debugger;
  // Get Rectangle values
  var numberX = getNumberValue($("#number-x"));
  var numberY = getNumberValue($("#number-y"));

  // Perform Addition and display
  $("#number-z").val(numberX + numberY);
}

function getNumberValue(element) {
  debugger;
  // Get this Rectangle
  var rect1 = element[0].getBoundingClientRect();
  
  // Check for elements that overlap and get values
  $(".number").each(function(i, v) {
    var iterationRect = i.getBoundingClientRect();

    overlap();
  });

  // var numArr = $("div.number[style='left: " +  + "px; top: " +  + "px;']").val();

  return val
}

function overlap() {

  // TODO: finish implementing overlap function 
  return overlap;
}