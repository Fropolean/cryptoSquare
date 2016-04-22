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


    var chunks = [];
    var n = Math.sqrt(stringLength);
    for (var i = 0; i < stringLength; i += n) {
    chunks.push(squishString.substring(i, i + n));
    }

    var chunksArrange = [];

    var letterSwap = function (letter) {
    for (var i = 0; i < letter.length; i += 1) {
        chunksArrange.push((letter[i].charAt(0)));
      }
    }

    letterSwap(chunks);

    console.log(chunksArrange);
    var letters = chunksArrange.join("");
      console.log(letters);




    $(".not").text(chunks);
    $("#result").show(chunks);
    console.log(stringLength);

  event.preventDefault();

  });
});
