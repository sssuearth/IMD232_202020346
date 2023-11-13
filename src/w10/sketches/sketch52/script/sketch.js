let cells = [];

//가로 10개
const colNum = 100,
  rowNum = colNum;

let w, h;

//const rowNum = 100;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  randomSeed(1);

  w = width / colNum;
  h = height / rowNum;

  //내가 몇번?
  //  let cnt = 0;

  //row 행 = 줄
  //cal 컬럼 = 가로
  //가로 열이 안쪽에 있는
  for (let row = 0; row < rowNum; row++) {
    for (let col = 0; col < colNum; col++) {
      const x = w * col;
      const y = h * row;
      // let state;
      // if (random() < 0.5) {
      //   state = false;
      // } else {
      //   state = true;
      // }
      const state = random() < 0.5;
      const idx = colNum * row + col;
      const newCell = new Cell(x, y, w, h, state, idx);

      // 다 만들고 나서 해주기
      //newCell.addFriends(cells);
      cells.push(newCell);
      //cells.push(new Cell(x, y, w, h, state, idx));
      //친구만들고 실행하는 명령어
    }
  }

  // 다 만들고 나서 해주기
  cells.forEach((eachCell) => {
    eachCell.addFriends(cells);
  });

  console.log(cells);

  background('white');
}

function draw() {
  background('white');

  cells.forEach((eachCell) => {
    eachCell.calcNextState();
  });
  cells.forEach((eachCell) => {
    eachCell.updateState();
  });

  cells.forEach((eachCell) => {
    eachCell.display();
  });
}
