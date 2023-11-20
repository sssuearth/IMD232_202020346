class Cell {
  constructor(x, y, w, h, state, idx) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.state = state;
    this.nextState = state;
    this.idx = idx;
    this.friends = [];
    // this.rule = [
    //   false, //111 = 7
    //   false, //110 = 6
    //   false, //101 = 5
    //   true, //100 = 4
    //   true, //011 = 3
    //   true, //010 = 2
    //   true, //001 = 1
    //   false, //000 = 0
    // ];
    // this.rule = [
    //   false, //000 = 0
    //   true, //001 = 1
    //   true, //010 = 2
    //   true, //011 = 3
    //   true, //100 = 4
    //   false, //101 = 5
    //   false, //110 = 6
    //   false, //111 = 7
    // ];
  }

  // // rule설정 (10진수를 8자리 2진수로)
  // setRule(denaryNum) {
  //   let binaryString = denaryNum.toString(2);
  //   while (binaryString.length < 8) {
  //     binaryString = '0' + binaryString;
  //   }
  //   for (let idx = 0; idx < 8; idx++) {
  //     this.rule[idx] = binaryString[idx] === '1';
  //   }
  // }

  // 친구들의 범위를 설정하고 더해주기
  addFriends(cellArray) {
    const idxList = [
      this.idx - 1, //왼
      this.idx + 1, //오
    ];

    // 내 위치
    const myCol = this.idx % colNum;

    //왼쪽 귀퉁이 (맨 앞 없는 부분 삭제)
    if (myCol === 0) {
      idxList[0] = -1;
    }
    //오른쪽 귀퉁이 (맨 뒤 없는 부분 삭제)
    else if (myCol === colNum - 1) {
      idxList[1] = -1;
    }

    idxList.forEach((eachIdx) => {
      this.friends.push(cells[eachIdx]);
    });
  }

  calcNextState() {
    let binaryString = '';
    binaryString += this.friends[0]?.state ? '1' : '0';
    binaryString += this.state ? '1' : '0';
    binaryString += this.friends[1]?.state ? '1' : '0';
    // console.log('binary', binaryString);
    const decimalNum = parseInt(binaryString, 2);
    // console.log('decimalNum', decimalNum);
    const ruleIdx = rule.length - 1 - decimalNum;
    this.nextState = rule[ruleIdx];
    // console.log(this.nextState);
  }

  updateState() {
    this.state = this.nextState;
  }

  // 나의 다음 세대
  createNextGen() {
    // 자신을 셀 속 인스턴스로 만들어 뱉는다
    return new Cell(
      this.x,
      this.y + this.h,
      this.w,
      this.h,
      this.nextState,
      this.idx + colNum
    );
  }

  display() {
    push();
    translate(this.x, this.y);
    // if (this.state) {
    //   fill(32);
    // } else {
    //   fill(255);
    // }
    fill(this.state ? 32 : 255);
    rect(0, 0, this.w, this.h);
    pop();
  }
}
