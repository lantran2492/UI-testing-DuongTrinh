//Function
console.log(sum(1, 2));

function sum(a: number, b: number) {
  let sum = a + b;
  console.log(`Sum: ${sum}`);
  return sum;
}

// sum(1, 2);

//với arrow function thì ko thể hoisting nên phải khai báo trước khi gọi hàm
const tinhtong = (a: number, b: number) => {
  let sum = a + b;
  console.log(`Sum: ${sum}`);
  return sum;
};

console.log(tinhtong(2, 2));

const m = () => console.log("AAA");
const sum1 = (a: number, b: number) => a + b;

console.log(sum1(3, 4));

function sum2(a: number = 0, b: number) {
  let sum = a + b;
  console.log(`Sum: ${sum}`);
  return sum;
}
console.log(sum2(undefined, 2));
console.log(sum2(6, 2));

//anonymous function: gọi hàm khi vừa viết ra ngay lập tức
(function () {
  console.log("AAAA");
})();

//rest argument, dynamic argument, tham số mà mình chưa biết rõ số lượng và kiểu dữ liệu
function sum3(a: string, ...args: number[]) {
  let sum = 0;
  if (args != undefined && args != null && args.length > 0) {
    for (let i = 0; i < args.length; i++) {
      let num = args[i] ?? 0;
      sum = sum + num;
    }
  }
  return sum;
}

sum3("a", 1, 2, 3, 4, 5);
