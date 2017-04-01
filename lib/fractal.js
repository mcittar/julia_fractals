var math = require('mathjs');
var mapper = require('./pixels.js');

class JuliaFractal {
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.constant = math.complex(-0.221, -0.713);
    this.maxIterations = 128;
    this.bound = 2;
    this.Mapper = new mapper(this.ctx);
  }

  // Iterate over every pixel
  iteratePixels(){
    let coord, intensity, imageData;
    for (var y = 0; y < this.canvas.height; y++) {
      for (var x = 0; x < this.canvas.width; x++) {
        coord = this.pixelCalc(x, y);
        intensity = coord[2] / 16;
        switch (Math.round(intensity)) {
          case 0:
            imageData = this.Mapper.p1;
            break;
          case 1:
            imageData = this.Mapper.p2;
            break;
          case 2:
            imageData = this.Mapper.p3;
            break;
          case 3:
            imageData = this.Mapper.p4;
            break;
          case 4:
            imageData = this.Mapper.p5;
            break;
          case 5:
            imageData = this.Mapper.p6;
            break;
          case 6:
            imageData = this.Mapper.p7;
            break;
          case 7:
            imageData = this.Mapper.p8;
            break;
          case 8:
            imageData = this.Mapper.p9;
            break;
          default:
            imageData = this.Mapper.p1;
        }

        this.ctx.putImageData( imageData, coord[0], coord[1] );
      }
    }
  }

  // width / 2 == %100

  pixelCalc(xCord, yCord) {
    let normalX;
    let normalY;
    normalX = this._normalize(xCord, this.canvas.width);
    normalY = this._normalize(yCord, this.canvas.height);
    let prevZ = math.complex(normalX, normalY);
    let zSquared;
    let distance = 0;
    let times = 0;
    while (distance < this.bound) {
      if (times > this.maxIterations - 1) {
        break;
      }
      zSquared = math.multiply(prevZ, prevZ);
      prevZ = math.add(zSquared, this.constant);
      distance = math.sqrt(prevZ.re * prevZ.re + prevZ.im * prevZ.im);
      times++;
    }
    return [xCord, yCord, times];
  }

  _normalize(coord, axis) {
    const halved = axis / 2;
    return (coord - (halved)) / halved;
  }

}

module.exports = JuliaFractal;
