var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });

  $('#add-form').submit(function(event) {
    event.preventDefault();
    var addOne = parseInt($('#addOne').val());
    var addTwo = parseInt($('#addTwo').val());
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.add(addOne, addTwo);
    $('#solution').append("<li>" + output + "</li>");
  });
});
