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


// document.addEventListener("DOMContentLoaded", function(event) {
//   console.log("DOM fully loaded and parsed");
//   start();
// });
//
// var webGl;
//
// function start() {
//   var canvas = document.getElementById('julia');
//
//   // Initialize the GL context
//   webGl = initWebGL(canvas);
//
//   // Only continue if WebGL is available and working
//   if (!webGl) {
//     return;
//   }
//
//   // Set clear color to black, fully opaque
//   webGl.clearColor(0.0, 0.0, 0.0, 1.0);
//   // Enable depth testing
//   webGl.enable(webGl.DEPTH_TEST);
//   // Near things obscure far things
//   webGl.depthFunc(webGl.LEQUAL);
//   // Clear the color as well as the depth buffer.
//   webGl.clear(webGl.COLOR_BUFFER_BIT | webGl.DEPTH_BUFFER_BIT);
// }
//
// function initWebGL(canvas) {
//   webGl = null;
//
//   // Try to grab the standard context. If it fails, fallback to experimental.
//   webGl = canvas.getContext('webwgl') || canvas.getContext('experimental-webgl');
//
//   // If we don't have a GL context, give up now
//   if (!webGl) {
//     alert('Unable to initialize WebGL. Your browser may not support it.');
//   }
//
//   return webGl;
// }
//
// function initShaders() {
//   var fragmentShader = getShader(webGl, 'shader-fs');
//   var vertexShader = getShader(webGl, 'shader-vs');
//
//   // Create the shader program
//
//   let shaderProgram = webGl.createProgram();
//   webGl.attachShader(shaderProgram, vertexShader);
//   webGl.attachShader(shaderProgram, fragmentShader);
//   webGl.linkProgram(shaderProgram);
//
//   // If creating the shader program failed, alert
//
//   if (!webGl.getProgramParameter(shaderProgram, webGl.LINK_STATUS)) {
//     console.log('Unable to initialize the shader program: ' + webGl.getProgramInfoLog(shaderProgram));
//   }
//
//   webGl.useProgram(shaderProgram);
//
//   let vertexPositionAttribute = webGl.getAttribLocation(shaderProgram, 'aVertexPosition');
//   webGl.enableVertexAttribArray(vertexPositionAttribute);
// }
//
// function getShader(gl, id, type) {
//   let shaderScript, theSource, currentChild, shader;
//
//   shaderScript = document.getElementById(id);
//
//   if (!shaderScript) {
//     return null;
//   }
//   theSource = shaderScript.text;
//
//   if (!type) {
//     if (shaderScript.type == 'x-shader/x-fragment') {
//       type = gl.FRAGMENT_SHADER;
//     } else if (shaderScript.type == 'x-shader/x-vertex') {
//       type = gl.VERTEX_SHADER;
//     } else {
//       // Unknown shader type
//       return null;
//     }
//   }
//   shader = gl.createShader(type);
//
//   gl.shaderSource(shader, theSource);
//
//   // Compile the shader program
//   gl.compileShader(shader);
//
//   // See if it compiled successfully
//   if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
//       console.log('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
//       gl.deleteShader(shader);
//       return null;
//   }
//
//   return shader;
// }
//
// var horizAspect = 480.0/640.0;

// 128 / 8 == 16
// 255 / 8 == 31.875
