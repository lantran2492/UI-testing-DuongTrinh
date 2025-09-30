console.log("Hello World!!");

//-------------------------------------------------------------------
//BUỔI 2
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

// ------------------------------------------------------------------
//25/9 - BUỔI 3
//array quy định số lượng phần tử và kiểu dữ liệu phần tử
let userInfo: [string, number, boolean];
userInfo = ["Tai", 20, false];

//enum
enum dayOfWeek {
  MONDAY = "MON",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
}
let dayOne = dayOfWeek.MONDAY;
let dayTwo = dayOfWeek.TUESDAY;
// console.log(dayOne == dayTwo);

let day1 = dayOfWeek.MONDAY;
let day2 = dayOfWeek.MONDAY;
let day3 = dayOfWeek.MONDAY;
console.log();

//khai báo kiểu dữ liệu cho một Object => sử dụng nhiều trong automation api
type Car = {
  name: string;
  model: string;
  door: number;
  power?: number;
  isHybrid?: boolean;
};

let myCar: Car = {
  name: "Vios",
  model: "2020",
  door: 2,
  // power: 1.2,
};

let myCar2: Car = {
  name: "Kia",
  model: "2020",
  door: 2,
  power: 1.2,
};

let myCar3: Car = {
  name: "Vios",
  model: "2020",
  // power: 1.2,
  isHybrid: true,
  door: 2,
};

type Adidas = {
  color: string;
};

type mixCarAdidas = Car & Adidas;
// type mixCar = {
//   name: string;
//   model: string;
//   door: number;
//   power?: number;
//   isHybrid?: boolean;
//   color: string;
// };

let mixSample = {
  name: "Vios",
  model: "2020",
  door: 2,
  power: 1.2,
  isHybrid: true,
  color: "red",
};

console.log();

interface CarInterface {
  name: string;
  model: string;
  door: number;
  power?: number;
  isHybrid?: boolean;
}

interface AdidasInterface {
  color: string;
}

let myCar4: CarInterface = {
  name: "Vios",
  door: 2,
  model: "2020",
};

type yesNo = "Yes" | "No";

let yes: yesNo = "Yes";

let sample: CarInterface & AdidasInterface = {
  name: "Vios",
  door: 2,
  model: "2020",
  color: "red",
};

//Toán tử
//a++2=> cộng sau khi thực thi
//javascript tự ép kiểu thành số cho phép trừ, nhân, chia. Riêng phép cộng tự ép kiểu thành chuỗi => Bug dễ xảy ra ở phép cộng '4'+ 3 = '43'
// let aa = 1;
// let bb = '1';
// console.log(aa==bb);

let myAge = 30;
console.log(myAge >= 18 && myAge <= 65);

let user3 = {
  name: "duong",
  age: 20,
  married: true,
};
//Toán tử spreading, có thể dùng để reuse thông tin và overwrite 1 value nào đó
let user4 = {
  ...user3,
  name: "tai",
};
console.log();

//BUỔI 4 - 30/9
//interface, type, class
let user5 = {
  name: "duong",
  age: 20,
  married: true,
  func: function () {
    console.log("aaa");
  },
};
user5.func();

//class combine được cà hành vi và thuộc tính còn type và interfece thì không
class User {
  name!: string;
  printName() {
    console.log(this.name);
  }
}
