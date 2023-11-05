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
      align.mult(0.5);
      eachVehicle.applyForce(align);
      const cohesion = eachVehicle.cohesion(this.vehicles);
      cohesion.mult(0.5);
      eachVehicle.applyForce(cohesion);
      eachVehicle.update();
      eachVehicle.borderInfinite();
      eachVehicle.display();
    });
  }

  addVehicle(x, y) {
    // const mass = floor(random(1, 3));
    const mass = 1;
    this.vehicles.push(
      new Vehicle(x, y, mass, mass * 12, 5, 0.1, color(random(360), 100, 40))
    );
  }
}
