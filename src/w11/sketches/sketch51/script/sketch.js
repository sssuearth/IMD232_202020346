let cam;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  // createCanvas(800, 300);
  cam = createCapture(VIDEO);
  // cam.size(160, 240);ㄴ
  cam.hide();
  console.log(cam);
}

function draw() {
  background('white');

  // cam에 들어온 이미지를 보여주겠다는 함수
  // cam의 너비부분을 width로 바꿈
  // cam의 너비를 cam의 너비로 나누기 > 1에 height를 곱함

  image(cam, 0, 0, width, (cam.height / cam.width) * width);
  loadPixels();
  // console.log('width', cam.width);
  // console.log('height', cam.height);
  // console.log('pixel', cam.pixels[0]);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = width * y + x;
      const color = pixels[idx];
      const b = brightness(color);
      //ellipse(x, y, (b / 255) * 20);
    }
  }
}
