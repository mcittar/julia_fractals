const JuliaFractal = require('./fractal.js');

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
  let c = document.getElementById('julia');
  let ctx = c.getContext('2d');
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, c.width, c.height);
  let id = ctx.createImageData(1, 1);
  let d  = id.data;
  d[0] = 0;
  d[1] = 0;
  d[2] = 0;
  d[3] = 0;
  ctx.putImageData( id, 20, 20 );
});
