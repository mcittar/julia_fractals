const juliafractal = require('./fractal.js');
const mapper = require('./pixels.js');

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
  let canvas = document.getElementById('julia');
  let ctx = canvas.getContext('2d');
  ctx.fillStyle = "black";
  let JuliaFractal = new juliafractal(canvas);
  JuliaFractal.iteratePixels();
});

// 128 / 8 == 16
// 255 / 8 == 31.875
// p1 - p9
// p1 is black
// p9 is white
