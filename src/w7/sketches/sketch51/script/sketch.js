let vehicle;
// let vehicleB;
let mVec;
let debug = true;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  colorMode(HSL, 360, 100, 100, 100);

  //쫒아오는
  vehicle = new Vehicle(
    width / 2,
    height / 2,
    16,
    5,
    0.05,
    color(330, 100, 50)
  );

  // 반지름 16
  // 최대속도 5
  // 0.05

  mVec = createVector();
  colorMode(RGB, 255, 255, 255);
  background(255);

  // //달아나는
  // vehicleB = new Vehicle(
  //   width / 2,
  //   height / 2,
  //   1,
  //   20,
  //   10,
  //   0.1,
  //   color(120, 100, 50)
  // );
}

function draw() {
  background(255);
  mVec.set(mouseX, mouseY);

  vehicle.seek(mVec);
  vehicle.update();
  vehicle.display();

  // vehicleB.flee(mVec);
  // vehicleA.update();
  // vehicleB.update();
  // vehicleA.borderInfinite();
  // vehicleB.borderInfinite();
  // background(255);
  // vehicleA.display();
  // vehicleB.display();
}
