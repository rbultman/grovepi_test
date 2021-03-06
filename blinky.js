var GrovePi = require('node-grovepi').GrovePi
var Commands = GrovePi.commands
var Board = GrovePi.board

var DigitalOutput = GrovePi.sensors.DigitalOutput;
var DigitalInput = GrovePi.sensors.DigitalInput;

var board = new Board({
  debug: true,
  onError: function(err) {
    console.log("Something bad happened: " + err);
  },
  onInit: function(res) {
    if (res) {
      board.pinMode(4, 'output');
      var led = new DigitalOutput(4);
      var button = new DigitalInput(3);
      console.log("Press the button to light the LED.");
      setInterval( function() {
        var state = button.read();
        if (state == 1) led.on(); else led.off();
      }, 100);
    }
  }
});

board.init();

