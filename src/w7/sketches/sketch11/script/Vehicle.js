// 클래스 'Vehicle'
class Vehicle {
  constructor(x, y, mass, rad, speedMx, forceMx, color) {
    // 'Vehicle'객체 생성, 함수 설정 괄호 안의 값 받음(위치, 반지름, 색상 등)

    this.pos = createVector(x, y);
    // position 위치 = 좌표(x, y)로 설정, 백터 생성
    this.vel = p5.Vector.random2D();
    // velocity 속도 = 랜덤 반향으로 백터 생성 / 위치를 매 프레임마다 얼마나 이동?
    this.acc = createVector();
    // acceleration 가속도 = 백터 생성 / 매번 속도가 얼마나 변하나?
    this.mass = mass;
    // mass 질량 = mass
    this.rad = rad;
    // radius 반지름 = rad
    this.speedMx = speedMx;
    // 최고 속도 = speedMx / 적용할 수 있는 속도의 최고값
    this.forceMx = forceMx;
    // 최대 힘 = forceMx / 적용할 수 있는 힘의 최대치
    this.neighborhooodRad = 50;
    // 주변에 반응하는 반지름의 반경 = 50 / 화면에 cohesion 구현
    this.color = color;
    // 컬러 설정 = color
  }

  // 함수 'cohesion(응집)'
  // vehicle 화살표들의 평균 위치를 구하고, 무리지어 다니도록 구현

  cohesion(others) {
    // 외부에서 'others' 받아오기
    let cnt = 0;
    // 주변 객체 수를 세는(count) 변수 'cnt' = 처음값 0
    const steer = createVector(0, 0);
    // cohesion 응집 백터 생성, 변수 'steer' = 초기값(0, 0)으로
    others.forEach((each) => {
      // 반복문, others에 있는 각 개체에 부여

      if (each !== this) {
        // others(본인, this)를 제외한 다른 경우에 다음 항목 실행
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        // 'this'와 반복 중인 'each' 사이의 거리의 제곱 계산
        // others의 포지션.x에서 개체의 포지션.x를 뺀 값의 2제곱
        // + others의 포지션.y에서 포지션.y를 뺀 값의 2제곱

        if (distSq < this.neighborhooodRad ** 2) {
          // 계산된 거리의 제곱 'distSq'이 나를 기준으로
          // 다른 친구(주변)의 반경의 2제곱보다 작은가?
          steer.add(each.pos);
          // 만약 거리가 친구 반경 내에 있다면, steer에 친구의 위치 더하기
          // 응집되는 힘 + 다른 친구의 위치
          cnt++;
          // 'ctn' 변수 1 증가
        }
      }
    });

    if (cnt > 0) {
      // 주변 객체가 1개 이상일때(cnt 값이 0보다 클 때) 실행
      steer.div(cnt); // 평균 위치 계산
      // steer백터를 cnt 값으로 나눔
      steer.sub(this.pos); // 내가 평균 위치로 향하는 방향
      // steer백터에서 현재의 위치(포지션) 빼기
      steer.setMag(this.speedMx); // 현재 값의 최고 속도
      // steer백터의 크기를 최고 속도로 설정
      steer.sub(this.vel); // 현재 값이 현재 속도와는 다른 방향으로 향함
      // steer백터에서 현재 값의 현재 속도 빼기
      steer.limit(this.forceMx); //최대힘을 초과하지 않도록(가속방지)
      // steer백터의 크기를 최대 힘으로 제한
    }
    return steer;
    // steer백터 값 반환
  }

  // 함수 'align'
  // vehicle 화살표들의 평균 각도를 구하고, 무리지어 다니도록 구현

  align(others) {
    // 외부에서 'others' 받아오기
    let cnt = 0;
    // 주변 객체 수를 세는(count) 변수 'cnt' = 처음값 0
    const steer = createVector(0, 0);
    // align 백터 생성, 변수 'steer' = 초기값(0, 0)으로
    others.forEach((each) => {
      // 반복문, others에 있는 각 개체에 부여

      if (each !== this) {
        // others(본인, this)를 제외한 다른 경우에 다음 항목 실행
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        // 'this'와 반복 중인 'each' 사이의 거리의 제곱 계산
        // others의 포지션.x에서 개체의 포지션.x를 뺀 값의 2제곱
        // + others의 포지션.y에서 포지션.y를 뺀 값의 2제곱

        if (distSq < this.neighborhooodRad ** 2) {
          // 계산된 거리의 제곱 'distSq'이 나를 기준으로
          // 다른 친구(주변)의 반경의 2제곱보다 작은가?
          steer.add(each.vel);
          // steer.add(p5.Vector.normalize(each.vel));
          // 만약 거리가 친구 반경 내에 있다면, steer에 친구의 위치 더하기
          // allign 힘 + 다른 친구의 위치
          cnt++;
          // 'ctn' 변수 1 증가
        }
      }
    });
    if (cnt > 0) {
      // 주변 객체가 1개 이상일때(cnt 값이 0보다 클 때) 실행
      steer.div(cnt); // 평균 위치 계산
      // steer백터를 cnt 값으로 나눔
      steer.setMag(this.speedMx); // 현재 값의 최고 속도
      // steer백터의 크기를 최고 속도로 설정
      steer.sub(this.vel); // 현재 값이 현재 속도와는 다른 방향으로 향함
      // steer백터에서 현재 값의 현재 속도 빼기
      steer.limit(this.forceMx); //최대힘을 초과하지 않도록(가속방지)
      // steer백터의 크기를 최대 힘으로 제한
    }
    return steer;
    // steer백터 값 반환
  }

  // 함수 'separate'
  // 분리되는, 멀어지는

  separate(others) {
    // 외부에서 'others' 받아오기
    let cnt = 0;
    // 주변 객체 수를 세는(count) 변수 'cnt' = 처음값 0
    const steer = createVector(0, 0);
    // separate 백터 생성, 변수 'steer' = 초기값(0, 0)으로
    others.forEach((each) => {
      // 반복문, others에 있는 각 개체에 부여

      if (each !== this) {
        // others(본인, this)를 제외한 다른 경우에 다음 항목 실행
        const dist = this.pos.dist(each.pos);
        // 현재 객체와 다른 객체 사이의 거리
        // 다른 객체의 위치에서 현재 객체의 위치 빼기

        if (dist > 0 && this.rad + each.rad > dist) {
          // 나의 반지름 + 다른 객체의 반지름 > 거리라면
          const distNormal = dist / (this.rad + each.rad);
          // 상수 'distNormal' 나를 향하는 거리
          const towardMeVec = p5.Vector.sub(this.pos, each.pos);
          // 현재의 객체 위치에서 다른 객체의 위치 빼기
          towardMeVec.setMag(1 / distNormal);
          // 거리에 따른 힘
          steer.add(towardMeVec);
          // separate의 힘 + 나를 향하는 거리
          cnt++;
          // 'ctn' 변수 1 증가
        }
      }
    });

    if (cnt > 0) {
      // 주변 객체가 1개 이상일때(cnt 값이 0보다 클 때) 실행
      steer.div(cnt); // 평균 위치 계산
      // steer백터를 cnt 값으로 나눔
      steer.setMag(this.speedMx); // 현재 값의 최고 속도
      // steer백터의 크기를 최고 속도로 설정
      steer.sub(this.vel); // 현재 값이 현재 속도와는 다른 방향으로 향함
      // steer백터에서 현재 값의 현재 속도 빼기
      steer.limit(this.forceMx); //최대힘을 초과하지 않도록(가속방지)
      // steer백터의 크기를 최대 힘으로 제한
    }
    return steer;
    // steer백터 값 반환
  }

  // 함수 'applyForce'
  // 외부에서 힘을 받아와 현재 객체에 적용

  applyForce(force) {
    // 외부에서 'force' 받아오기
    const forceDivedByMass = p5.Vector.div(force, this.mass);
    // 가속도 = 외부에서 주어진 힘 나누기 질량
    this.acc.add(forceDivedByMass);
    // 현재 가속도에 계산된 가속도를 더함
  }

  // 업데이트(위치, 속도)
  update() {
    this.vel.add(this.acc);
    // 속도에 가속도를 더하기
    this.vel.limit(this.speedMx);
    // 속도를 최고 속도로 제한
    this.pos.add(this.vel);
    // 위치에 속도를 더하기
    this.acc.mult(0);
    // 가속도에 0을 더해 (0, 0) 초기화
  }

  // 객체를 캔버스 안에 머물게 하는 함수
  // 화살표 vehicle이 캔버스 경계 밖으로 나갈 때
  borderInfinite() {
    if (this.pos.x < -infiniteOffset) {
      // 객체가 x값보다 작으면 : 캔버스 왼쪽 경계 밖으로 나갈때
      this.pos.x = width + infiniteOffset;
      // 객체를 캔버스 오른쪽으로 이동 : 오른쪽에서 나오게
    } else if (this.pos.x > width + infiniteOffset) {
      // 객체가 캔버스 오른쪽 경계 밖으로 나갈때
      this.pos.x = -infiniteOffset;
      // 객체를 캔버스 왼쪽으로 이동 : 왼쪽에서 나오게
    }
    if (this.pos.y < -infiniteOffset) {
      // 객체가 y값 보다 작으면 : 캔버스 아래쪽 밖으로 나갈때
      this.pos.y = height + infiniteOffset;
      // 객체를 캔버스 위쪽으로 이동 : 위쪽에서 나오게
    } else if (this.pos.y > height + infiniteOffset) {
      // 객체가 캔버스 위쪽 밖으로 나갈때
      this.pos.y = -infiniteOffset;
      // 객체를 캔버스 아래쪽으로 이동 : 아래쪽에서 나오게
    }
  }

  // 그릴 객체를 화면에 표시하는 함수
  display() {
    push(); // 반복문(리셋), 새롭게 적용되는 구문, pop();과 세트
    translate(this.pos.x, this.pos.y); // 현재 위치로 원점 이동
    rotate(this.vel.heading()); // 회전, vel(속도) 방향을 따라서
    noStroke(); // 선X
    fill(this.color); // 채움색 설정, 외부에서 'this.color'값 받아오기
    beginShape(); // 다각형(화살표) 그리기
    vertex(this.rad, 0);
    // 다각형의 첫 번째 꼭짓점
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135)));
    // 다각형의 두 번째 꼭짓점
    vertex(0, 0);
    // 다각형의 세 번째 꼭짓점
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135)));
    // 다각형의 네 번째 꼭짓점
    endShape(CLOSE);
    // 다각형 꼭짓점 끼리 이어서 닫아주기

    // noFill();
    // stroke(0, 0, 60);
    // ellipse(0, 0, 2 * this.rad);
    // stroke(0, 0, 80);
    // ellipse(0, 0, 2 * this.neighborhooodRad);

    pop(); //끝 push();와 세트
  }
}
