const juliafractal = require('./fractal.js');
const mapper = require('./pixels.js');

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
  let canvas = document.getElementById('julia');
  canvas.addEventListener('mousemove', onMouseMove);
  let ctx = canvas.getContext('2d');
  let JuliaFractal = new juliafractal(canvas);
  let t0 = performance.now();
  JuliaFractal.iteratePixels(-0.221, -0.713);
  let t1 = performance.now();
  console.log("Fractal call took " + (t1 - t0) + " milliseconds.");

  function onMouseMove(e) {
    let pos = getMousePos(canvas, e);
    console.log(pos);
    let constantReal = (pos.x - (canvas.width / 2)) / canvas.width / 2;
    let constantImaginary = (pos.y - (canvas.height / 2)) / canvas.width / 2;
  }

  function getMousePos(canvas, e) {
    let rect = canvas.getBoundingClientRect();
    return {
      x: Math.round((e.clientX - rect.left) / (rect.right - rect.left) * canvas.width),
      y: Math.round((e.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height)
    };
  }
});
