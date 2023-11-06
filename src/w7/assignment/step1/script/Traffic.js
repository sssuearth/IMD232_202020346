// 클래스 'Traffic'
class Traffic {
  constructor() {
    this.vehicles = [];
    // vehicles을 array로 생성
  }

  // vehicles(화살표) 실행 함수
  run() {
    // run 실행 함수
    this.vehicles.forEach((eachVehicle) => {
      // 반복문, vehicle에게 변수 'eachVehicles' 할당
      const separate = eachVehicle.separate(this.vehicles);
      // seperate 변수 = vehicle(화살표)간의 힘을 나눈 값
      separate.mult(1);
      //  separate에 1 곱하기
      eachVehicle.applyForce(separate);
      // separate의 값을 applyForce에 전달
      const align = eachVehicle.align(this.vehicles);
      // align 변수 생성 vehicles간 정렬값 저장
      align.mult(0.5);
      // align에 0.5 곱하기
      eachVehicle.applyForce(align);
      // applyForce 정렬값에 align값 할당
      const cohesion = eachVehicle.cohesion(this.vehicles);
      // 변수 cohesion 변수 생성 vehicles간 응집력 저장
      cohesion.mult(0.5);
      // cohesion에 0.5 곱하기
      eachVehicle.applyForce(cohesion);
      // applyForce 정렬값에 cohesion값 할당
      eachVehicle.update();
      // vehicle update
      eachVehicle.borderInfinite();
      // borderInfinite 함수 실행
      eachVehicle.display();
      // Vehicle 그리기
    });
  }

  // Vehicle 추가
  addVehicle(x, y) {
    // 외부에서 x, y값 받아오기
    // const mass = floor(random(1, 3));
    const mass = 1;
    // 질량 값 1
    this.vehicles.push(
      // 새로운 Vechicle 생성하기
      new Vehicle(x, y, mass, mass * 12, 5, 0.1, color(random(360), 100, 40))
      //(x, y위치, 질량, 반지름, 최고 속도, 최대 힘, 360도 범위 안 랜덤 컬러)
    );
  }
}
