function setup() {
  setCanvasContainer('canvas-goes-here', 400, 300, true);
  //true 400*300 비율을 유지하며 플렉시블하게 조절됨
  background('#ff7733');
}

function draw() {
  background('#ff7733');
  circle(mouseX, mouseY, width * 0.1);
  //width * 0.1 비례에 따라 원크기 자동 절
}
