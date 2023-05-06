//Mapped Type

const arrOfNumbers = [1, 2, 3];
const arrOfStrings = arrOfNumbers.map((number) => number.toString());
console.log(arrOfStrings); // output: ['1', '2', '3']

//We can do the same task with type:
type Volume = {
  height: number;
  width: number;
  depth: number;
};

type AreaType = {
  [key in keyof Volume]: string; //index signature use kora hoise
};
// output is:
// type AreaType = {
//     height: string;
//     width: string;
//     depth: string;
// }

type AreaType2 = {
  [key in keyof Volume]: Volume[key]; //index signature use kora hoise
};
//We can make in generic:

type GenericArea<T> = {
  readonly [index in keyof T]: T[index]; //we can make key/index or any other name
};
//We can use readonly for key

const area1: GenericArea<{ height: number; width: number; unit: string }> = {
  height: 10,
  width: 5,
  unit: "metre square",
};
