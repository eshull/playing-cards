$(function(){

  var suits = ["clubs", "hearts", "diamonds", "spades"]
  var values = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"]

    suits.forEach(function(suit){
      values.forEach(function(value){
        $("ul").append("<li>" + value + " of " + suit + "</li>");

      })
    });


  });
