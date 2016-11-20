const five = require("johnny-five");
const board = new five.Board();

board.on("ready", function() {
  const rgb = new five.Led.RGB([6, 5, 3]);
  let index = 0;
  const rainbow = ["FF0000", "FF7F00", "FFFF00", "00FF00", "0000FF", "4B0082", "8F00FF"];

  this.loop(1000, function() {
    rgb.color(rainbow[index++]);
    if (index === rainbow.length) {
      index = 0;
    }
  });
});