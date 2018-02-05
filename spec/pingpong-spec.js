var Calculator = require('./../js/pingpong.js').calculatorModule;

describe('pingpong', function() {
  it('test', function() {
    var simpleCalculator = new Calculator("normal skin");
    expect(simpleCalculator.add(3,4)).toEqual(7);
  });
});
