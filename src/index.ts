console.log("Hello World!!");

let isActive: boolean;

isActive = true;
isActive = false;

let age: number;

age = 10;
age = 10.5;

let name: string;
name = "A'BC";
name = "ABC";
name = `ABC`;

let num = 200;
// num = '2';
let onOff = true;
// onOff = 'true';
let fullName = "ABC";
// fullName = true;

let user = {
  name: "duong",
  age: 20,
  married: true,
};

const PI = 3.14;
const url = "abc.com";

let something: any;
something = "abc";
something = 123;
something = true;

something + something;

let dontKnown: unknown;
dontKnown = true;
dontKnown = "abc";
dontKnown = 123;

// dontKnown + dontKnown;

let a: any;
let b: any;
a = 3;
b = 4;
console.log(a + b);

let myNever: never; //không bao giờ trả về kiểu dữ liệu, function không bao giờ trả về gì cả, sử dụng trong trường hợp quăng lỗi or lặp cho tới khi nào hết
// never = undefined;
function throwError(): never {
  throw new Error();
}

let myNum;
console.log(myNum);
//undefined là chưa gán -> kiểm tra lại code, null là đã được gán nhưng không có giá trị -> kiểm tra lại code nhưng thiên về cái mà mình get về
myNum = null;
console.log(myNum);
myNum = 5;
let custom = myNum ?? 1; //env or mapping data
console.log(custom);

let booleanArray: boolean[] = [true, false, true, false];
console.log(booleanArray);
let numberArray: number[] = [1, 2, 3, 4];
console.log(numberArray);
let stringArray = ["abc", "def", "ghk"];
console.log(stringArray);

let mixArray: any[] = [1, "abc", true];
console.log(mixArray);
let numberArrayInfer = [1, 2, 3, 4];
// numberArray[1] = 'ABC';
let mixArrayInfer = [1, "abc", true];
mixArray[0] = "aaa";

const constArray = [1, 2, 3];
constArray[0] = 3;
let arrB = constArray;
constArray[1] = 3;
console.log(constArray);
//UI behavior
//chuẩn bị dữ liệu
//bóc tách dữ liệu
//compare expected và actual result
const constArrayB: readonly number[] = [1, 2, 3];
// constArrayB[0] = 3
