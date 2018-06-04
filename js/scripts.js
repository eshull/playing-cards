$(function(){

  var suits = ["clubs", "hearts", "diamonds", "spades"]
  var values = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"]

    suits.forEach(function(suit){

      values.forEach(function(value){
        $("ul").append("<li>" + value + " of " + suit + "</li>");

      })
    });


  });

  $(function(){

    var cars = ["ford", "dodge", "pontiac", "chevy"]
    var colors = ["blue", "red", "green", "purple", "yellow"]

      cars.forEach(function(car){
        colors.forEach(function(color){
          $("ul").append("<li>" + car + " in " + color + "</li>");

        })
      });


    });
