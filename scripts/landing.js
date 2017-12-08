   var animatePoints = function () {
     var points = document.getElementsByClassName('point');

     for (var i=0; i < points.length; i++) {
       points[i].style.opacity = 1;
       points[i].style.transform = "scaleX(1) translateY(0)";
       points[i].style.msTransform = "scaleX(1) translateY(0)";
       points[i].style.WebkitTransform = "scaleX(1) translateY(0)";
     }
   }
   animatePoints();


   // What is the difference other than how I got here? is one better than the other?


  // var animatePoints = function () {
  //   var points = document.getElementsByClassName('point');
  //     var revealPoint = function(index) {
  //       points[index].style.opacity = 1;
  //       points[index].style.transform = "scaleX(1) translateY(0)";
  //       points[index].style.msTransform = "scaleX(1) translateY(0)";
  //       points[index].style.WebkitTransform = "scaleX(1) translateY(0)";
  //     }
  //
  //     for (var i=0; i < points.length; i++) {
  //       revealPoint(i);
  //    }
  //  };
