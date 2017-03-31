document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
  let c = document.getElementById('julia');
  let ctx = c.getContext('2d');
  let id = ctx.createImageData(1,1);
  let d  = id.data;
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, c.width, c.height);
});
