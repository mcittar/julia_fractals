document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
  let c = document.getElementById('julia');
  let ctx = c.getContext('2d');
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, c.width, c.height);
});
