let isMale = true;
if (!isMale) {
  console.log("FeMale");
}

let variable = ``;
if (variable) {
  console.log("haha");
}

if (isMale) {
  console.log("Male");
} else {
  console.log("Female");
}

//cho trường hợp kết hợp nhiều condition phức tạp
let level = 3;
if (level == 1 || level == 0) {
  console.log("fresher");
} else if (level == 2) {
  console.log("junior");
} else {
  console.log("undefined");
}

//một điều kiện có nhiều tình huống
let condition = 0;
switch (condition) {
  case 0:
  case 1:
    console.log("First time");
    break;
  case 2:
    console.log("Second time");
    break;
  default:
    console.log("Default");
}

let a = 1;
let b = 2;
let c = 3;

let delta = b * b - 4 * a * c;
if (delta > 0) {
  const x1 = (-b + Math.sqrt(delta)) / (2 * a);
  const x2 = (-b - Math.sqrt(delta)) / (2 * a);
  console.log(`x1:${x1}, x2: ${x2}`);
} else if (delta === 0) {
  const x = -b / (2 * a);
  console.log(`x: ${x}`);
} else {
  console.log("phuong trinh vo nghiem");
}

//Vòng lặp
//Vòng for dùng khi điều kiện là đồng nhất tăng/giảm dần đều
//Vòng for thường dùng trong automation để lặp qua các data cho testcase truyền vào dữ liệu lưu trong mảng
for (let i = 0; i < 10; i += 2) {
  console.log(`Number: ${i}`);
  for (let i = 0; i < 5; i++) {
    console.log(`Number AAA: ${i}`);
    break;
  }
}
let input = [1, 2, 3, 4, 5];
for (let index = 0; index < input.length; index++) {
  if (index == 3) {
    break;
  }
  console.log(`ban da nhap gia tri: ${input[index]}`);
}

//vòng while sử dụng được khi có nhiều điều kiện kết hợp với nhau
//ví dụ như khi bắt UI, text expect xuất hiện => break, chờ một element xuất hiện, ...
let age = 18;
let isBreak = true;
while (age > 0 && isBreak) {
  console.log(`While ${age}`);
  if (age == 5) {
    break;
  }
  if (age == 3) {
    isBreak = false;
  }
  age--;
}

//Vòng lặp do while: đảm bảo chạy khối code ít nhất 1 lần
// do {
//   console.log("bb");
// } while (age > 18);

// while (age > 18) {
//   console.log("BB");
// }

//break thì nhảy ra ngoài, continue thì bỏ qua 1 trường hợp
//continue trong while và trong for the same
age = 18;
while (age > 0) {
  age--; //condition để đi tiếp cần nằm trên điều kiện continue, break thì điều kiện nằm dưới
  if (age == 10) {
    continue;
  }
  console.log(`bb ${age}`);
}
// --> class, if else, while, for
