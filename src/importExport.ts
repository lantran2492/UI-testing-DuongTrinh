//typescriptlang.org
//cách export
//cách 1:
// export const PI = 3.14;

// export function SuperSum(a: number, b: number) {
//   return a + b;
// }

// export type Student = {
//   name: string;
//   age: number;
// };

// export interface Car {
//   model: string;
//   year: number;
// }

//cách 2
const PI = 3.14;

function SuperSum(a: number, b: number) {
  return a + b;
}

type Student = {
  name: string;
  age: number;
};

interface Car {
  model: string;
  year: number;
}
export { PI as PIPI, SuperSum };
export type { Student, Car };

const AAA: number = 100;
export default AAA;
