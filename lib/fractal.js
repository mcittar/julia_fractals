var math = require('mathjs');
var mapper = require('./pixels.js');

class JuliaFractal {
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.constant = math.complex(-0.221, -0.713);
    this.maxIterations = 128;
    this.bound = 2;
    this.squaredBound = Math.pow(this.bound, 2);
    this.Mapper = new mapper(this.ctx);
  }

  iteratePixels(){
    let coord, intensity, imageData;
    for (var y = 0; y < this.canvas.height; y++) {
      for (var x = 0; x < this.canvas.width; x++) {
        coord = this.pixelCalc(x, y);
        switch (Math.round(coord / 16)) {
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
        this.ctx.putImageData( imageData, x, y );
      }
    }
  }

  pixelCalc(xCord, yCord) {
    let normalX = this._normalize(xCord, this.canvas.width);
    let normalY = this._normalize(yCord, this.canvas.height);
    let prevZ = math.complex(normalX, normalY);
    let distance = 0;
    let times = 0;
    let zSquared;

    while (distance < this.squaredBound) {
      if (times >= this.maxIterations) {
        break;
      }

      zSquared = math.multiply(prevZ, prevZ);
      prevZ = math.add(zSquared, this.constant);
      distance = (prevZ.re * prevZ.re + prevZ.im * prevZ.im);
      times++;
    }
    return times;
  }

  _normalize(coord, axis) {
    const halved = axis / 2;
    return (coord - (halved)) / halved;
  }

}

module.exports = JuliaFractal;
