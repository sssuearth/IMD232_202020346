function setup() {
  setCanvasContainer('p5-canvas', 600, 600, true);
  background('white');
}

function draw() {
  background('#FFF4D9');
  //초기화, 설정값
  rectMode(CORNER);
  colorMode(RGB); //컬러
  strokeWeight(1); //선 두께

  //문
  stroke('#316BFF'); //선 색상
  fill('#FFFFFF'); //흰색
  // rect(25, 37, 290, 433, 3, 3, 0, 0); //문 테두리
  rect(width / 24, height / 16.2, width / 2.06, height / 1.38, 3, 3, 0, 0); //문 테두리
  // rect(40, 50, 260, 420, 3, 3, 0, 0); //문 안쪽
  rect(width / 15, height / 12, width / 2.3, height / 1.43, 3, 3, 0, 0); //문 안쪽

  //하늘
  stroke('#316BFF'); //선 색상
  fill('#CBE2FF'); //하늘색
  // rect(56, 65, 99, 212, 3); //왼쪽창
  rect(width / 10.7, height / 9.23, width / 6.06, height / 2.83, 3); //왼쪽창
  //  rect(185, 65, 99, 212, 3); //오른쪽창
  rect(width / 3.24, height / 9.23, width / 6.06, height / 2.83, 3); //오른쪽창

  //문 세부요소
  stroke('#316BFF'); //선 색상
  fill('#FFFFFF'); //흰색
  // rect(56, 242, 99, 12); //왼쪽창 세로선
  // rect(185, 242, 99, 12); //오른쪽창 세로선
  // line(170, 50, 170, 470); //중앙 세로선
  rect(width / 10.7, height / 2.479, width / 6.06, height / 50); //왼쪽창 세로선
  rect(width / 3.24, height / 2.479, width / 6.06, height / 50); //오른쪽창 세로선
  line(width / 3.53, height / 12, width / 3.53, height / 1.27); //중앙 세로선

  // rect(56, 293, 99, 162, 3); //왼쪽아래
  // rect(185, 293, 99, 162, 3); //오른쪽아래
  // rect(68, 305, 75, 139, 3); //왼쪽아래안쪽
  // rect(197, 305, 75, 139, 3); //오른쪽아래안쪽
  rect(width / 10.7, height / 2.04, width / 6.06, height / 3.7, 3); //왼쪽아래
  rect(width / 3.24, height / 2.04, width / 6.06, height / 3.7, 3); //오른쪽아래
  rect(width / 8.82, height / 1.967, width / 8, height / 4.3, 3); //왼쪽아래안쪽
  rect(width / 3.04, height / 1.967, width / 8, height / 4.3, 3); //오른쪽아래안쪽

  // ellipse(155, 293, 15); //왼쪽 손잡이
  // ellipse(185, 293, 15); //왼쪽 손잡이
  ellipse(width / 3.87, height / 2.04, width / 40); //왼쪽 손잡이
  ellipse(width / 3.24, height / 2.04, width / 40); //왼쪽 손잡이

  //오른쪽 창가 구름
  fill('#FFFFFF');
  noStroke(); //스트로크 없애기
  // rect(64, 66, 35, 9, 0, 0, 50, 50); //맨위 잘린구름
  // rect(102, 86, 52, 33, 20, 0, 0, 20); //오른쪽 큰 잘린구름
  // rect(74, 109, 58, 20, 20); //그아래 구름
  // rect(57, 148, 52, 20, 0, 20, 20, 0); //왼쪽 잘린 구름
  // rect(76, 158, 58, 20, 20); //그아래 구름
  rect(
    width / 9.375,
    height / 9.09,
    width / 17.14,
    height / 66.6,
    0,
    0,
    50,
    50
  ); //맨위 잘린구름
  rect(width / 5.88, height / 6.97, width / 11.5, height / 18.18, 20, 0, 0, 20); //오른쪽 큰 잘린구름
  rect(width / 8.108, height / 5.5, width / 10.3, height / 30, 20); //그아래 구름
  rect(width / 10.5, height / 4.054, width / 11.5, height / 30, 0, 20, 20, 0); //왼쪽 잘린 구름
  rect(width / 7.89, height / 3.79, width / 10.3, height / 30, 20); //그아래 구름

  //왼쪽 창가 구름
  // rect(186, 86, 27, 30, 0, 50, 50, 0); //왼쪽과 이어진 구름
  // rect(231, 104, 52, 30, 20, 0, 0, 20); //오른쪽 끝 잘린구름
  // rect(208, 123, 52, 22, 20); //그아래 구름
  // rect(210, 170, 49, 16, 20);
  rect(width / 3.22, height / 6.97, width / 22.2, height / 20, 0, 50, 50, 0); //왼쪽과 이어진 구름
  rect(width / 2.59, height / 5.76, width / 11.5, height / 20, 20, 0, 0, 20); //오른쪽 끝 잘린구름
  rect(width / 2.88, height / 4.87, width / 11.5, height / 27.27, 20); //그아래 구름
  rect(width / 2.85, height / 3.5, width / 12.2, height / 37.5, 20);

  //바닥
  stroke('#316BFF'); //선 색상
  fill('#FFEEC1'); //노란색
  //rect(0, 470, 600, 130);
  rect(0, height / 1.28, width * 1, height / 4.615);

  //카펫
  fill('#CCEDFF'); //노란색
  // quad(68, 500, 532, 500, 587, 600, 12, 600);
  quad(
    width / 8.823,
    height / 1.2,
    width / 1.127,
    height / 1.2,
    width / 1.022,
    height * 1,
    width / 50,
    height * 1
  );

  //벽 액자
  // stroke('#316BFF'); //선 색상
  // fill('#D4FAFF'); //노란색
  // rect(474, 116, 55, 72, 3);
  // fill('#FFFCBE'); //안쪽블루
  // rect(482, 124, 38, 56, 3);

  // fill('#CBECFF'); //파란색
  // rect(551, 59, 67, 88, 3);
  // fill('#FFDCF9'); //안쪽핑크
  // rect(561, 68, 47, 69, 3);

  stroke('#316BFF'); //선 색상
  fill('#D4FAFF'); //노란색
  rect(width / 1.265, height / 5.172, width / 10.9, height / 8.3, 3);
  fill('#FFFCBE'); //안쪽블루
  rect(width / 1.244, height / 4.838, width / 15.78, height / 10.714, 3);

  fill('#CBECFF'); //파란색
  rect(width / 1.088, height / 10.16, width / 8.955, height / 6.81, 3);
  fill('#FFDCF9'); //안쪽핑크
  rect(width / 1.069, height / 8.823, width / 12.76, height / 8.695, 3);

  //천장조명
  stroke('#316BFF'); //선 색상
  fill('#FDD2CF'); //레드
  // rect(364, 49, 128, 27, 80);
  // rect(364, 76, 128, 27, 80);
  // rect(364, 103, 128, 27, 80);
  // line(428, 0, 428, 49); //천장 세로선
  rect(width / 1.64, height / 12.24, width / 4.6875, height / 22.2, 80);
  rect(width / 1.64, height / 7.89, width / 4.6875, height / 22.2, 80);
  rect(width / 1.64, height / 5.82, width / 4.6875, height / 22.2, 80);
  line(width / 1.4, 0, width / 1.4, height / 12.24); //천장 세로선

  //서랍장
  stroke('#316BFF'); //선 색상
  fill('#B8EDC3'); //그린
  // rect(373, 426, 26, 49, 37); //왼쪽 다리
  // rect(585, 426, 26, 49, 37); //오른쪽 다리
  // rect(338, 268, 364, 185, 37); //본체
  // rect(351, 281, 302, 157, 27); //본체 안
  // line(493, 281, 493, 438); //서랍장 세로선
  // line(351, 332, 493, 332); //서랍장 가로선1
  // line(351, 384, 493, 384); //서랍장 가로선2
  // rect(392, 303, 61, 7, 20); //서랍장 손잡이1
  // rect(392, 354, 61, 7, 20); //서랍장 손잡이1
  // rect(392, 406, 61, 7, 20); //서랍장 손잡이1
  // rect(527, 355, 28, 6, 20); //오른쪽 손잡이 뼈대
  // ellipse(523, 358, 15); //오른쪽 동글 손잡이
  rect(width / 1.608, height / 1.408, width / 23.07, height / 12.24, 37); //왼쪽 다리
  rect(width / 1.025, height / 1.408, width / 23.07, height / 12.24, 37); //오른쪽 다리
  rect(width / 1.775, height / 2.238, width / 1.64, height / 3.243, 37); //본체
  rect(width / 1.709401, height / 2.135, width / 1.98, height / 3.8216, 27); //본체 안
  line(width / 1.217, height / 2.135, width / 1.217, height / 1.369); //서랍장 세로선
  line(width / 1.709401, height / 1.807, width / 1.217, height / 1.807); //서랍장 가로선1
  line(width / 1.709401, height / 1.5625, width / 1.217, height / 1.5625); //서랍장 가로선2
  rect(width / 1.5306, height / 1.98, width / 9.836, height / 85.714, 20); //서랍장 손잡이1
  rect(width / 1.5306, height / 1.69, width / 9.836, height / 85.714, 20); //서랍장 손잡이1
  rect(width / 1.5306, height / 1.477, width / 9.836, height / 85.714, 20); //서랍장 손잡이1
  rect(width / 1.138, height / 1.69, width / 21.428, height / 100, 20); //오른쪽 손잡이 뼈대
  ellipse(width / 1.147, height / 1.675, width / 40); //오른쪽 동글 손잡이

  //서랍장 위 버섯조명
  stroke('#316BFF'); //선 색상
  fill('#FFC8A9'); //그린
  // quad(409, 250, 421, 250, 428, 268, 402, 268); //조명 받침
  quad(
    width / 1.466,
    height / 2.4,
    width / 1.425,
    height / 2.4,
    width / 1.4018,
    height / 2.238,
    width / 1.49,
    height / 2.238
  ); //조명 받침
  // rect(365, 224, 100, 27, 70, 70, 5, 5); //버섯 조명 뚜껑
  rect(width / 1.64, height / 2.678, width / 6, height / 22.2, 70, 70, 5, 5); //버섯 조명 뚜껑

  //책3개
  // stroke('#316BFF'); //선 색상
  // fill('#BAD1FF'); //블루
  // rect(495, 232, 82, 12, 2); //상
  // fill('#DDD8FF'); //퍼플
  // rect(502, 244, 82, 12, 2); //중
  // fill('#FFE8BA'); //옐로
  // rect(495, 256, 82, 12, 2); //하
  stroke('#316BFF'); //선 색상
  fill('#BAD1FF'); //블루
  rect(width / 1.21, height / 2.586, width / 7.31707, height / 50, 2); //상
  fill('#DDD8FF'); //퍼플
  rect(width / 1.195, height / 2.459, width / 7.31707, height / 50, 2); //중
  fill('#FFE8BA'); //옐로
  rect(width / 1.21, height / 2.34375, width / 7.31707, height / 50, 2); //하

  //핑크소파
  //다리
  stroke('#316BFF'); //선 색상
  fill('#F2DEBA'); //세미브라운
  // rect(105, 506, 28, 47, 30); //왼쪽다리
  // rect(381, 506, 28, 47, 30); //오른쪽다리
  rect(width / 5.714, height / 1.185, width / 21.428, height / 12.76, 30); //왼쪽다리
  rect(width / 1.574, height / 1.185, width / 21.428, height / 12.76, 30); //오른쪽다리

  //본체
  fill('#FFD7E8'); //핑크
  // rect(103, 479, 308, 45, 30); //바닥면
  // rect(121, 328, 272, 142, 30); //등면
  // rect(81, 398, 51, 130, 30); //왼쪽 팔걸이
  // rect(380, 398, 51, 130, 30); //왼쪽 팔걸이
  // rect(111, 447, 293, 46, 30); //앉는면
  rect(width / 5.825, height / 1.252, width / 1.948, height / 13.3, 30); //바닥면
  rect(width / 4.958, height / 1.829, width / 2.205, height / 4.225, 30); //등면
  rect(width / 7.407, height / 1.507, width / 11.76, height / 4.615, 30); //왼쪽 팔걸이
  rect(width / 1.578, height / 1.507, width / 11.76, height / 4.615, 30); //왼쪽 팔걸이
  rect(width / 5.405, height / 1.342, width / 2.047, height / 13.04, 30); //앉는면

  //소파 꾸밈 선_가로지르는 선
  stroke('#316BFF'); //선 색상
  // line(166, 368, 192, 394); //1-1
  // line(192, 368, 166, 394); //1-2
  // line(244, 368, 270, 394); //2-1
  // line(270, 368, 244, 394); //2-2
  // line(322, 368, 348, 394); //2-1
  // line(348, 368, 322, 394); //2-2
  line(width / 3.614, height / 1.6304, width / 3.125, height / 1.5228); //1-1
  line(width / 3.125, height / 1.6304, width / 3.614, height / 1.5228); //1-2
  line(width / 2.459, height / 1.6304, width / 2.2, height / 1.5228); //2-1
  line(width / 2.2, height / 1.6304, width / 2.459, height / 1.5228); //2-2
  line(width / 1.863, height / 1.6304, width / 1.724, height / 1.5228); //2-1
  line(width / 1.724, height / 1.6304, width / 1.863, height / 1.5228); //2-2

  //소파 꾸밈 단추_원
  // ellipse(179, 381, 14); //1
  // ellipse(257, 381, 14); //2
  // ellipse(335, 381, 14); //3
  ellipse(width / 3.351, height / 1.574, width / 42.85); //1
  ellipse(width / 2.334, height / 1.574, width / 42.85); //2
  ellipse(width / 1.791, height / 1.574, width / 42.85); //3

  //쿠션 모서리 둥글게 불가능
  // quad(120, 410, 182, 415, 194, 460, 124, 467, 30);

  //쿠션 2개
  // fill('#BAD1FF'); //블루
  // stroke('#316BFF'); //선 색상
  // rect(193, 407, 110, 46, 50); //눕혀진 원 쿠션
  // rect(192, 425, 115, 7, 50); //눕혀진 원 쿠션 세로
  // fill('#FFF6A2'); //옐로우
  // ellipse(157, 428, 96, 77); //원 쿠션 밖
  // ellipse(157, 428, 78, 60); //원 쿠션 안
  fill('#BAD1FF'); //블루
  stroke('#316BFF'); //선 색상
  rect(width / 3.108, height / 1.474, width / 5.45, height / 13.04, 50); //눕혀진 원 쿠션
  rect(width / 3.108, height / 1.411, width / 5.217, height / 85.714, 50); //눕혀진 원 쿠션 세로
  fill('#FFF6A2'); //옐로우
  ellipse(width / 3.821, height / 1.4018, width / 6.25, height / 7.792); //원 쿠션 밖
  ellipse(width / 3.821, height / 1.4018, width / 7.69, height / 10); //원 쿠션 안

  //액자 속 꽃
  //   fill('#FFC0ED'); //안쪽핑크
  //   translate(501, 153);
  //   noStroke();
  //   for (let i = 0; i < 10; i++) {
  //     ellipse(0, 3, 8, 30);
  //     rotate(PI / 5);
  // }
  fill('#FFC0ED'); //안쪽핑크
  translate(width / 1.197, height / 3.921);
  noStroke();
  for (let i = 0; i < 10; i++) {
    ellipse(0, height / 200, width / 75, height / 20);
    rotate(PI / 5);
  }
}
