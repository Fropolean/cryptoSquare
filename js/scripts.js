

var square = function(stringLength) {
  if (stringLength > 0 && Math.sqrt(stringLength) % 1 === 0) {
    return true;
  } else {
    return false;
  }
}


$(document).ready(function() {
  $("form#cryptoSquare").submit(function(event) {
    var string = ($("input#string").val());
    var squishString = string.replace(/\s+/g, '');
    var stringLength = squishString.length;
    var result = square(stringLength);
  console.log(squishString);
  console.log(stringLength);
  console.log(result);
  event.preventDefault();

  });

 });




//old code

//   if (side1, side2, side3) {
//     if (((side1 + side2) <= side3) || ((side2 + side3) <= side1) || ((side1 +  side3) <= side2)) {
//       return false;
//     } else if ((side1 === side2) && (side1 === side3)){
//       return "equilateral";
//     } else if ((side1 === side2) || (side1 === side3) || (side2 === side3)){
//       return "isosceles";
//     } else {
//       return "scalene";
//     }
//
//
//   }else {
//     alert("Ayyyy not a number.")
//   }
//
//
//  // if(year) {
//  //
//  //    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
//  //      return true;
//  //    } else {
//  //      return false;
//  //    }
//  //
//  //  } else {
//  //    if (isNaN(year)) {
//  //      alert("That's not a number, twat.");
//  //    }
//  //  }
//
// };
//
// $(document).ready(function() {
//   $("form#triangleTracker").submit(function(event) {
//     var side1  = parseInt($("input#side1").val());
//     var side2  = parseInt($("input#side2").val());
//     var side3  = parseInt($("input#side3").val());
//     var result = triangleTracker(side1, side2, side3);
//
//     $(".variety").text(result);
//
//
//     if (!result) {
//       $(".sides").text(side1 + ", " + side2 + ", and " + side3);
//       $(".not").text("do not");
//       $(".variety").empty();
//     } else {
//         $(".sides").text(side1 + ", " + side2 + ", and " + side3);
//         $(".not").text("");
//
//     }
//
//
//
//     $("#result").show();
//     event.preventDefault();
//   });
// });
