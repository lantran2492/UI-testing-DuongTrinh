//BUOI 4 - CALL BACK
//call back là đưa cho hàm 1 cái hàm khác làm tham số chứ ko phải value của hàm đó
function sum(a: number, b: number) {
  return a + b;
}

function print(sum: number) {
  console.log(sum);
}

print(sum(1, 2));

type Reaction = () => void;

//Login with multiple type
function login(loginType: "fb" | "gg" | "acc") {
  console.log("Go to url");
  console.log("Check page is loaded");
  switch (loginType) {
    case "fb":
      console.log("FB login");
      break;
    case "gg":
      console.log("GG login");
      break;
    case "acc":
      console.log("Account login");
      break;
  }
}

function loginFB() {}
function loginGG() {}
function loginAcc() {}

// function login2(callback: Function) {
//   console.log("Go to url");
//   console.log("Check page is loaded");
//   callback();
// }

// login2(loginFB);
// login2(loginGG);
// login2(loginAcc);

// function girl meets boy
function meetBoy(isGoodBoy: boolean, callback: Reaction) {
  console.log("1.The girl is meeting a boy...");
  if (isGoodBoy) {
    console.log("2.1.good boy...");
  } else {
    console.log("2.2bad boy...");
  }
  setTimeout(() => {
    callback();
  }, 5000);
}

function smile() {
  console.log("3.1.smile and say 'Nice to meet you! Let's have a coffee'");
}

function walkaway() {
  console.log("3.2.She rolls her eyes and walks away");
}

async function run() {
  await meetBoy(true, smile);
  await meetBoy(false, walkaway);
}
run();
//nhớ kiểm tra hàm mình sử dụng bằng cách hover vào await để kiểm tra lại hàm có đc viết đúng theo dạng Promise hay ko. Nếu viết theo dạng Promise thì mới await dc
//với javascript cũng phải coi xem hàm có phải là một hàm Promise hay không, nếu phải thì phải await

function waitForMessage(isGoodBoy: boolean) {
  console.log("The girl is waiting for message to see if he texts back or not");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isGoodBoy) {
        resolve("He text back");
      } else {
        reject("He ghosted");
      }
    }, 5000);
  });
}

async function loveStory() {
  let message = await waitForMessage(true);
  console.log(message);
  try {
    let message2 = await waitForMessage(false);
  } catch (err) {
    console.log(err);
  }
}
loveStory();

// waitForMessage(true)
//   .then((message) => console.log(message))
//   .catch((message) => console.log(message));

// waitForMessage(false)
//   .then((message) => console.log(message))
//   .catch((message) => console.log(message));
