function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('white');
}

function draw() {
  //나
  background(255);

  //루프로 인해 아래서 적용한 설정이 타고 넘어오는 것을 방지하기 위해 초기화
  rectMode(CORNER);
  fill(255); //컬러
  colorMode(RGB); //컬러
  stroke(0); //선 기본 존재
  strokeWeight(1); //선 두께

  ellipse(100, 100, 50, 50); //중간부터그림
  rect(100, 100, 50, 50); //왼쪽위부터그림
  ellipse(200, 100, 50, 25);
  rect(200, 100, 25, 50);

  //사각형을 원과 같은 방식으로 좌표 중앙을 기준으로 그리기
  rectMode(CENTER);
  rect(300, 100, 50, 50);
  ellipse(300, 100, 50, 50);

  rect(400, 100, 50, 25);
  ellipse(400, 100, 25, 50);

  fill(255, 74, 204); //핑크컬러
  ellipse(100, 200, 50);

  fill('#00FFFF'); //시안컬러
  circle(200, 200, 50);

  colorMode(HSL); //컬러
  fill(240, 100, 50); //블루컬러
  rect(300, 200, 50);

  noStroke(); //스트로크 없애기
  square(400, 200, 50);

  rect(100, 300, 50, 50, 5); //모서리 굴리기
  rect(200, 300, 50, 50, 5, 10, 15, 20); //모서리 굴리기

  //가로지르는 선, 선다시 나타나게 설정
  stroke(0);
  line(100, 400, 150, 450);

  //선 3개 조합
  stroke('royalblue'); //하늘색 가로선
  line(200, 400, 250, 400); //좌표

  stroke('salmon'); //살몬색 세로선
  strokeWeight(5); //두께
  line(250, 400, 250, 450); //좌표

  stroke('slateblue'); //파란색 세로선
  strokeWeight(10); //두께
  line(200, 450, 250, 450); //좌표

  //점 1
  stroke(50, 100, 10);
  strokeWeight(2);
  point(300, 400);
  point(310, 400);
  point(320, 400);
  point(330, 400);
  point(340, 400);
  point(350, 400);
  //점 2
  stroke(50, 100, 20);
  strokeWeight(3);
  point(300, 410);
  point(310, 410);
  point(320, 410);
  point(330, 410);
  point(340, 410);
  point(350, 410);
  //점 3
  stroke(50, 100, 30);
  strokeWeight(4);
  point(300, 420);
  point(310, 420);
  point(320, 420);
  point(330, 420);
  point(340, 420);
  point(350, 420);
  //점 4
  stroke(50, 100, 40);
  strokeWeight(5);
  point(300, 430);
  point(310, 430);
  point(320, 430);
  point(330, 430);
  point(340, 430);
  point(350, 430);
  //점 4
  stroke(50, 100, 50);
  strokeWeight(6);
  point(300, 440);
  point(310, 440);
  point(320, 440);
  point(330, 440);
  point(340, 440);
  point(350, 440);
  //점 4
  stroke(50, 100, 60);
  strokeWeight(7);
  point(300, 450);
  point(310, 450);
  point(320, 450);
  point(330, 450);
  point(340, 450);
  point(350, 450);
}
