const Mapper = function(ctx) {
  let p1 = ctx.createImageData(1, 1);
  let d1 = p1.data;
  d1[3] = 255;
  let p2 = ctx.createImageData(1, 1);
  let d2 = p2.data;
  d2[3] = 223;
  let p3 = ctx.createImageData(1, 1);
  let d3 = p3.data;
  d3[3] = 191;
  let p4 = ctx.createImageData(1, 1);
  let d4 = p4.data;
  d4[3] = 160;
  let p5 = ctx.createImageData(1, 1);
  let d5 = p5.data;
  d5[3] = 128;
  let p6 = ctx.createImageData(1, 1);
  let d6 = p6.data;
  d6[3] = 96;
  let p7 = ctx.createImageData(1, 1);
  let d7 = p7.data;
  d7[3] = 64;
  let p8 = ctx.createImageData(1, 1);
  let d8 = p8.data;
  d8[3] = 32;
  let p9 = ctx.createImageData(1, 1);
  let d9 = p9.data;
  d9[3] = 0;

  return {
    p1: p1,
    p2: p2,
    p3: p3,
    p4: p4,
    p5: p5,
    p6: p6,
    p7: p7,
    p8: p8,
    p9: p9
  };
};

module.exports = Mapper;
