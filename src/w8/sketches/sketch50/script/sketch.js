let dom;
let htmlDom;
let canvasW = 600;
let canvasH = 400;

function setup() {
  //변수 dom을 여기에 만들었음
  //setup 벗어나면 못써먹음
  //let dom = select('#hereGoesMyP5Sketch');
  dom = select('#hereGoesMyP5Sketch');
  //   console.log('p5 select', dom);
  //   console.log('p5 select', dom.width);

  htmlDom = document.querySelector('#hereGoesMyP5Sketch');
  //   console.log('querySelector', htmlDom);
  //   console.log('querySelector', htmlDom.clientWidth);

  let canvas = createCanvas(canvasW, canvasH);
  //캔버스 원하는 위치에 넣기a
  canvas.parent(dom);
  background('black');
}

function draw() {}

// 창이 줄어들때 캔버스 사이즈

function windowResized() {
  //사이즈 호출
  ////값을 가져오긴하나 실시간으로 사이즈 값 연결되지 않음 해결하기
  //dom = select('#hereGoesMyP5Sketch');

  //console.log('p5 select', dom);
  // console.log('querySelector', htmlDom.clientWidth); //요게 더 편함
  ////윈도우가 resize될때
  //   console.log(dom);
  if (htmlDom.clientWidth < canvasW) {
    console.log('작아서 잘립니다.');
    resizeCanvas(
      htmlDom.clientWidth,
      (htmlDom.clientWidth * canvasH) / canvasW
    );
    background('black');
  } else if (width !== canvasW) {
    console.log('리사이즈됩니다.');
    //똑같거나 더 클때 600과 동일하지 않을때
    resizeCanvas(canvasW, canvasH);
    background('black');
  }
}
