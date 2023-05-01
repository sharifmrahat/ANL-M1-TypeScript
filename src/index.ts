const course: string = "apollo next level web development mission";

console.log(course);

//Primitive type
//string
//number
//boolean
//undefined
//null

const number = 313;

const fruits: string[] = ["apple", "orange"];
const rolls: number[] = [34, 12, 23, 3, 4];

const myArray: [number, string] = [27, "Sharif"];

// myArray[0] = 'abcd' //string is not assignable to number

//Object Type

const user: {
  name: string;
  age: number;
  isMarried: boolean;
  skills: string[];
  phone?: number; // optional type
} = {
  name: "Arman",
  age: 28,
  isMarried: false,
  skills: ["js", "ts", "react"],
};

// Literal type
const company: {
  name: "The Consolers";
  employee: number;
  location: string;
} = {
  name: "The Consolers", // literal type er value chara onno kichu dile error dibe
  employee: 2203,
  location: "Bangladesh",
};

//TS function

// const myFunc = (a, b) => a+b
//Error: Parameter 'a' implicitly has an 'any' type.
//Solution: ts config file > noImplicitAny: false kore dile implicit any type er error ar show korbe na. Not recommended

const addNumber = (num1: number, num2: number): number => num1 + num2;

const arr: number[] = [2, 5, 8];

const sqrArray: number[] = arr.map((e: number) => e * e);
console.log(sqrArray);

const person: {
  name: string;
  balance: number;
  addBalance(money: number): void; // kichu  na thakle return type void
} = {
  name: "Sharif",
  balance: 5,
  addBalance(money: number) {
    console.log(this.balance + money);
  },
};
