const juliafractal = require('./fractal.js');
const mapper = require('./pixels.js');

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
  let canvas = document.getElementById('julia');
  let ctx = canvas.getContext('2d');
  let JuliaFractal = new juliafractal(canvas);
  let t0 = performance.now();
  JuliaFractal.iteratePixels();
  let t1 = performance.now();
  console.log("Fractal call took " + (t1 - t0) + " milliseconds.");
});

// var gl;
//
// function start() {
//   var canvas = document.getElementById('julia');
//
//   // Initialize the GL context
//   gl = initWebGL(canvas);
//
//   // Only continue if WebGL is available and working
//   if (!gl) {
//     return;
//   }
//
//   // Set clear color to black, fully opaque
//   gl.clearColor(0.0, 0.0, 0.0, 1.0);
//   // Enable depth testing
//   gl.enable(gl.DEPTH_TEST);
//   // Near things obscure far things
//   gl.depthFunc(gl.LEQUAL);
//   // Clear the color as well as the depth buffer.
//   gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
// }
//
// function initWebGL(canvas) {
//   gl = null;
//
//   // Try to grab the standard context. If it fails, fallback to experimental.
//   gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
//
//   // If we don't have a GL context, give up now
//   if (!gl) {
//     alert('Unable to initialize WebGL. Your browser may not support it.');
//   }
//
//   return gl;
// }
//
// document.addEventListener("DOMContentLoaded", function(event) {
//   console.log("DOM fully loaded and parsed");
//   start();
// });

// 128 / 8 == 16
// 255 / 8 == 31.875
// p1 - p9
// p1 is black
// p9 is white
