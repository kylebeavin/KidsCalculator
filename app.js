$(function(){

      // Touch Move event handler drag numbers
      $(".number").on("touchmove", function(e){
        e.preventDefault();
        var touch = event.targetTouches[0];
        event.target.style.left = touch.pageX + 'px';
        event.target.style.top = touch.pageY + 'px';
      });

      // Touch End event handler check if in dropzone
      $(".number").on("touchend", function(e){
        e.preventDefault();
        addRectangles();
      });

});

function addRectangles(){
  // Get Rectangle values
  var numberX = getNumberValue($("#number-x"));
  var numberY = getNumberValue($("#number-y"));

  if (numberX == ""){
    numberX = 0;
  }

  if (numberY == ""){
    numberY = 0;
  }
  // Perform Addition and display
  var numberZ = parseInt(numberX) + parseInt(numberY);
  if (numberZ != 0){
    $("#number-z").text(numberZ);
  } else {
    $("#number-z").text("");
  }
}

function getNumberValue(element) {
  var numberArr = [];
  var sortedArr = [];
  var numberValue = "";
  var thisRect1 = element[0].getBoundingClientRect();
  
  // Get elements in dropzone
  $(".number").each(function(i, v) { 
    var numberRect = v.getBoundingClientRect();
    overlap = getOverlap(thisRect1, numberRect);
    if (overlap) {
      numberArr.push(v);
    }
  });

  // Put elements in order
  sortedArr = numberArr.sort(function(a, b) {return a.offsetLeft-b.offsetLeft})

  //assign value
  $(sortedArr).each(function(i, v){
    numberValue += $(v).html();
  });

  return numberValue;
}

function getOverlap(rect1, rect2) {

  // check if two rectangles overlap
  var overlap = !(rect1.right < rect2.left || 
    rect1.left > rect2.right || 
    rect1.bottom < rect2.top || 
    rect1.top > rect2.bottom)

  return overlap;
}