const juliafractal = require('./fractal.js');
const mapper = require('./pixels.js');

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
  let canvas = document.getElementById('julia');
  let ctx = canvas.getContext('2d');
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  let JuliaFractal = new juliafractal(canvas);
  let Mapper = new mapper(ctx);
  let coords = JuliaFractal.iteratePixels();

  coords.forEach(coord => {
    
    ctx.putImageData( Mapper.p9, coord[0], coord[1] );
  });

  ctx.putImageData( Mapper.p1, 20, 20 );
  ctx.putImageData( Mapper.p2, 21, 21 );
  ctx.putImageData( Mapper.p3, 22, 22 );
  ctx.putImageData( Mapper.p4, 23, 23 );
  ctx.putImageData( Mapper.p5, 24, 24 );
  ctx.putImageData( Mapper.p6, 25, 25 );
  ctx.putImageData( Mapper.p7, 26, 26 );
  ctx.putImageData( Mapper.p8, 27, 27 );
  ctx.putImageData( Mapper.p9, 28, 28 );
});

// 128 / 8 == 16
// 255 / 8 == 31.875
// p1 - p9
// p1 is black
// p9 is white
