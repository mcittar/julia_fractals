const JuliaFractal = require('./fractal.js');

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
  let c = document.getElementById('julia');
  let ctx = c.getContext('2d');
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, c.width, c.height);

  const intensities = {
    p1: 'WORKS'
  };

  console.log(intensities.p1);
  let p1 = ctx.createImageData(1, 1);
  let d1 = p1.data;
  d1[3] = 255;
  ctx.putImageData( p1, 20, 20 );
  let p2 = ctx.createImageData(1, 1);
  let d2 = p2.data;
  d2[3] = 223;
  ctx.putImageData( p2, 21, 21 );
  let p3 = ctx.createImageData(1, 1);
  let d3 = p3.data;
  d3[3] = 191;
  ctx.putImageData( p3, 22, 22 );
  let p4 = ctx.createImageData(1, 1);
  let d4 = p4.data;
  d4[3] = 160;
  ctx.putImageData( p4, 23, 23 );
  let p5 = ctx.createImageData(1, 1);
  let d5 = p5.data;
  d5[3] = 128;
  ctx.putImageData( p5, 24, 24 );
  let p6 = ctx.createImageData(1, 1);
  let d6 = p6.data;
  d6[3] = 96;
  ctx.putImageData( p6, 25, 25 );
  let p7 = ctx.createImageData(1, 1);
  let d7 = p7.data;
  d7[3] = 64;
  ctx.putImageData( p7, 26, 26 );
  let p8 = ctx.createImageData(1, 1);
  let d8 = p8.data;
  d8[3] = 32;
  ctx.putImageData( p8, 27, 27 );
  let p9 = ctx.createImageData(1, 1);
  let d9 = p9.data;
  d9[3] = 0;
  ctx.putImageData( p9, 28, 28 );
});

// 128 / 8 == 16
// 255 / 8 == 31.875
