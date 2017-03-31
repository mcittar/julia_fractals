var math = require('mathjs');

class JuliaFractal {
  constructor(ctx){
    this.ctx = ctx;
    this.constant = math.complex(-0.221, -0.713);
    this.maxIterations = 128;
  }

  // Iterate over every pixel
  iteratePixels(){
    let normalX;
    let normalY;
    for (var y = 0; y < this.ctx.height; y++) {
      for (var x = 0; x < this.ctx.width; x++) {
        normalX = x - (this.ctx.width / 2);
        normalY = y - (this.ctx.height / 2);
        this.pixelCalc(normalX, normalY);
      }
    }
  }

  _normalize(){

  }

  pixelCalc(xCord, yCord) {
    console.log(xCord, yCord);
    let prevZ = math.complex(xCord, yCord);
    let zSquared;
    let distance = 0;
    let times = 0;
    while (distance < 2) {
      if (times > this.maxIterations - 1) {
        break;
      }
      zSquared = math.multiply(prevZ, prevZ);
      prevZ = math.add(zSquared, this.constant);
      distance = math.sqrt(prevZ.re * prevZ.re + prevZ.im * prevZ.im);
      times++;
    }
    return times;
  }

}
let ctx = {
  height: 500,
  width: 500
};

let test = new JuliaFractal(ctx);
console.log(test.iteratePixels());

module.exports = JuliaFractal;
// Julia Fractal Formula:
// f(x) = z2 – 0.221 – 0.713i

// Complex Constant: – 0.221 – 0.713i
// Width: 500
// Height: 500


// const c = math.complex(-0.221, -0.713);
// const maxIterations = 128;
// let normalX;
// let normalY;
// for (var y = 0; y < 500; y++) {
//   for (var x = 0; x < 500; x++) {
//     normalX = x - (500 / 2);
//     normalY = y - (500 / 2);
//     pixelCalc(normalX, normalY);
//   }
// }
//
// // Pixel intensity calc
// function pixelCalc(xCord, yCord) {
//   let prevZ = math.complex(xCord, yCord);
//   let zSquared;
//   let distance = 0;
//   let times = 0;
//   while (distance < 2) {
//     if (times > maxIterations - 1) {
//       break;
//     }
//     zSquared = math.multiply(prevZ, prevZ);
//     prevZ = math.add(zSquared, c);
//     distance = math.sqrt(prevZ.re * prevZ.re + prevZ.im * prevZ.im);
//     times++;
//   }
//   return times;
// }
