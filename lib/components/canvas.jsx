import React from 'react';
import Numbers from './numbers.jsx';
var options = [-0.221, -0.713];
var paletteTexture;


class Canvas extends React.Component {
  constructor(props){
    super(props);
    const surface = undefined;
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  componentDidMount(){
    this.surface = document.getElementById('rendering-surface');
    const gl = this.surface.getContext('experimental-webgl');
    gl.viewport(0, 0, this.surface.width, this.surface.height);
    gl.clearColor(1.0, 0.0, 0.0, 1.0);
    initWebGL(gl);
  }

  onMouseMove(e) {
    let pos = this.getMousePos(e);
    let widthHalved = this.surface.width / 2;
    let heightHalved = this.surface.height / 2;
    let constantReal = pos.x / this.surface.width * 2 - 1;
    let constantImaginary = 1 - pos.y / this.surface.height * 2;
    options = [constantReal, constantImaginary];
  }

  getMousePos(e) {
    let rect = this.surface.getBoundingClientRect();
    return {
      x: Math.round((e.clientX - rect.left) / (rect.right - rect.left) * this.surface.width),
      y: Math.round((e.clientY - rect.top) / (rect.bottom - rect.top) * this.surface.height)
    };
  }

  render() {
    return (
      <div>
        <Numbers options={ options }/>
        <canvas onMouseMove={ this.onMouseMove }id="rendering-surface" width="650" height="650"></canvas>
      </div>
    );
  }
}

function render(gl, scene) {
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.useProgram(scene.program);

  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, paletteTexture);
  gl.uniform1i(scene.program.samplerUniform, 0);

  gl.uniform2fv(scene.program.cUniform, new Float32Array(options));

  gl.bindBuffer(gl.ARRAY_BUFFER, scene.object.vertexBuffer);
  gl.drawArrays(
    scene.object.primitiveType, 0,
    scene.object.vertexCount);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  gl.useProgram(null);
  requestAnimationFrame(function() {
    render(gl,scene);
  });
}

function initTextures(gl) {
  paletteTexture = gl.createTexture();
  paletteTexture.image = new Image();
  paletteTexture.image.onload = function() {
    handleLoadedTexture(gl, paletteTexture);
  };
  paletteTexture.image.src = "./textures/pal.png";
}

function handleLoadedTexture(gl, texture) {
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.image);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.bindTexture(gl.TEXTURE_2D, null); //unbind
}


function initWebGL(gl) {
  var program = createProgram(
    gl,
    [{container: 'vertex-shader', type: gl.VERTEX_SHADER},
     {container: 'fragment-shader', type: gl.FRAGMENT_SHADER}]
  );

  gl.useProgram(program);

  var quadVtx = [
    -1,	-1, 0,
    1,	-1,	0,
    1,	1,	0,
    -1,	-1, 0,
    -1,	1,	0,
    1,	1,	0,
  ];

  let quadbuffer_vtx = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, quadbuffer_vtx);
  gl.enableVertexAttribArray(program.vtxPosAttrib);
  gl.vertexAttribPointer(program.vtxPosAttrib, 3, gl.FLOAT, false, 0, 0);
  quadbuffer_vtx.itemSize = 3;
  quadbuffer_vtx.numItems = quadVtx.length / quadbuffer_vtx.itemSize;

  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(quadVtx),
    gl.STATIC_DRAW
  );

  var quadUV = [
    0,	0,
    1,	0,
    1,	1,
    0,	0,
    0,	1,
    1,	1,
  ];

  let quadbuffer_uv = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, quadbuffer_uv);
  gl.enableVertexAttribArray(program.vtxUVAttrib);
  gl.vertexAttribPointer(program.vtxUVAttrib, 2, gl.FLOAT, false, 0, 0);
  quadbuffer_uv.itemSize = 2;
  quadbuffer_uv.numItems = quadUV.length / quadbuffer_uv.itemSize;

  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(quadUV),
    gl.STATIC_DRAW
  );

  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  gl.useProgram(null);

  var square = {
    vertexCount: quadbuffer_vtx.numItems,
    primitiveType: gl.TRIANGLES
  };

  square.vertexBuffer = quadbuffer_vtx;

  var scene = {
    program: program,
    object: square,
  };

  initTextures(gl);

  requestAnimationFrame(function() {
    render(gl, scene);
  });
}

function createProgram(gl, shaderSpecs) {
  var program = gl.createProgram();
  for ( var i = 0 ; i < shaderSpecs.length ; i++ ) {
    var spec = shaderSpecs[i];
    var shader = gl.createShader(spec.type);
    var source = document.getElementById(spec.container).text;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      throw gl.getShaderInfoLog(shader);
    }
    gl.attachShader(program, shader);
    gl.deleteShader(shader);
  }
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw gl.getProgramInfoLog(program);
  }
  program.vtxPosAttribute = gl.getAttribLocation(program, 'vtx_pos');
  program.vtxUVAttrib = gl.getAttribLocation(program, "vtx_uv");
  program.samplerUniform = gl.getUniformLocation(program, "uSampler");
  program.cUniform = gl.getUniformLocation(program, "c");

  return program;
}


export default Canvas;
