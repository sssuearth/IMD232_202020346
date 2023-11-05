// 변수들
let traffic;
// traffic 변수
let infiniteOffset = 80;
// infiniteOffset 변수의 값 80

// 캔버스
function setup() {
  // 캔버스 생성
  setCanvasContainer('canvas', 3, 2, true);
  // 시뮬레이션을 위한 캔버스(비율 3:2)
  colorMode(HSL, 360, 100, 100, 100);
  //HSL 컬러모드(HSL, 360도 범위의 색상, 색조값, 채도값, 알파값)
  background('white');
  // 캔버스 색상 지정(화이트)

  traffic = new Traffic();
  // 클래스 'Traffic' 생성, 이를 변수 'traffic'에 저장
  for (let n = 0; n < 10; n++) {
    // for 해당 범위동안 반복, 10번
    // n은 0, 10보다 같거나 클때 1씩 더한다.
    traffic.addVehicle(random(width), random(height));
    // traffic의 addVehicle 생성, 초기값은 width, height의 랜덤값
  }
}

// 그리기
function draw() {
  // 반복해서 그리기
  background('white');
  // 캔버스 색상 지정(화이트), 이전 프레임을 지운다.
  traffic.run();
  // 'traffic' 의 'run' 함수 호출
}

// 마우스 드래그
function mouseDragged() {
  // 마우스를 드래그 할 때
  traffic.addVehicle(mouseX, mouseY);
  // traffic의 새로운 Vehicle을 생성, 초기값은 mouse의 위치
}
