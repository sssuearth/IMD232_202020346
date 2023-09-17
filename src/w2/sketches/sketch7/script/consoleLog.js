console.log(2);
console.log('문자');
console.log(true);

const two = 2;
console.log(two);

const four = 4;
console.log(four);

let undefinedVal;
console.log(undefinedVal);

// console 변수 활용해서 사직연산 계산
//변수가 아닌 상수라 선언, 한번 값이 정해진 이후에는 바꿀 수 없음
const additionConst = two + four;
console.log(additionConst);

//변수
let addition = two + four;
console.log(addition);

let subtraction = two - four;
console.log(subtraction);

let multiplication = two * four;
console.log(multiplication);

let division = two / four;
console.log(division);

//6
// additionConst = additionConst + two;
// console.log(additionConst);

// 6+2=8
addition = additionConst + two;
console.log('더하기', addition);
// 8+2=10
addition += two;
console.log('더하기', addition);

subtraction = subtraction - two;
console.log('빼기', subtraction);
subtraction -= two;
console.log('빼기', subtraction);
subtraction += -two;
console.log('빼기', subtraction);
subtraction += -1 * two;
console.log('빼기', subtraction);

multiplication = multiplication * two;
console.log('곱하기', multiplication);
multiplication *= two;
console.log('곱하기', multiplication);

//제곱 n승
console.log('square, 제곱', 8 ** 2);
console.log('세제곱', 8 ** 3);
console.log('root square, 제곱근', 64 ** (1 / 2));

division = division / two;
console.log('나누기', division);
division /= two;
console.log('나누기', division);
division *= 1 / two;
console.log('나누기', division);

let counter = 0;
counter += 1;
console.log('counter', counter);
counter += 1;
console.log('counter', counter);
counter++; //1씩 더하기
console.log('counter', counter);
counter++; //1씩 더하기
console.log('counter', counter);
counter++; //1씩 더하기
console.log('counter', counter);
counter--; //1씩 빼기
console.log('counter', counter);

//연산자
let remainder = counter % 8;
console.log('remainder', remainder);

counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);

counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);

let boolean = true;
console.log(boolean);
boolean = false;
console.log(boolean);
boolean = !boolean;
console.log(boolean);
//위 !는 not을 의미 마지막 값 flase의 not = true
boolean = !boolean;
console.log(boolean);

//글자와 숫자 조합
const textTwo = '2';
console.log(two); //보라색 - 숫자다, 글자가 아니다
console.log(textTwo); //흰색 - 글자다

console.log('num + twt', two + textTwo); //숫자2+글자2
console.log('num + num', two + two); //숫자2+숫자2
console.log('twt + twt', textTwo + textTwo); //글자2글자2
//텍스트 2를 숫자 2로 변환하기
console.log('solution', two + Number(textTwo));
