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

  iteratePixels(contextReal, contextImaginary){
    this.constant = math.complex(contextReal, contextImaginary);
    let coord, intensity, imageData;
    let image = this.ctx.createImageData(this.canvas.width, this.canvas.height);
    let imageIndex = 0;
    for (var y = 0; y < this.canvas.height; y++) {
      for (var x = 0; x < this.canvas.width; x++) {
        coord = this.pixelCalc(x, y);
        image.data[imageIndex++] = 0;
        image.data[imageIndex++] = 0;
        image.data[imageIndex++] = 0;
        image.data[imageIndex++] = Math.round(255 - (31.875 * Math.round(coord / 16)));
      }
    }
    this.ctx.putImageData( image, 0, 0 );
  }

  pixelCalc(xCord, yCord) {
    let normalX = this._normalize(xCord, this.canvas.width);
    let normalY = this._normalize(yCord, this.canvas.height);
    let prevZ = math.complex(normalX, normalY);
    let distance = 0;
    let times = 0;
    let zSquared;

    while (distance < this.squaredBound && times < this.maxIterations) {

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
