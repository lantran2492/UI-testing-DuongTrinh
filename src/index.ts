let name1 = "Test with me";
let name2 = "Test with me";
let name3 = `Name 1: ${name1}, Name 2: ${name2}`;
let name4 = "Name 1: " + name1 + "Name 2: " + name2;
console.log(name3);
const rawData: string = " ngUYỄN VAN a;25;devELOPER ";
console.log(rawData.trim());
let arrayData = rawData.split(";");
console.log(rawData.substring(1, 13));
console.log(arrayData[2]?.toLowerCase().includes("dev"));

console.log(arrayData[0]?.toLowerCase().replace("n", "N"));

//Regular expression
// https://regexr.com/
let fruit = [" Xoai", " Coc", " Buoi", " Me"];
let result = fruit.filter((value: string, index: number) => {
  return value.includes("a");
});
console.log(result);

fruit.forEach((val) => {
  console.log(val);
});

let newFruit = fruit.map((value) => {
  return value.trim();
});

console.log(fruit);
console.log(newFruit);
