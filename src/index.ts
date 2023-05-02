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


//default value of parameter:
const myFunc = (num1: number, num2: number = 10) => {

}

// myFunc(2) ////default value always last parameter e use korte hoy ts e.

//spread operator & destructuring

//Type allias

type StudentType = {
  name: string,
  age: number,
  subjects: string[],
  address?: string
}

//union & intersection

//Union type example: (represent OR || operator)
const someValue: string | number = 'abcd' || 1234  
const anArray: (string | number)[] = ['abcd', 1234]


//Intersection type example: (represent AND && operator)

//declare an enum (not recommended by ts)

enum Role {
  user = 'user',
  admin = 'admin',
  customer = 'customer',
  employee = 'employee'
}
type User = {
  name: string,
  email: string,
  phone: number
  role: Role
}

type Customer = User & {
  company: string,
  location: string,
  lastPurchaseDate: Date
  role: Role.customer  // enum type
}

type Employee = User & {
  department: string,
  designation: string,
  currentSalary: number
  role: Role.employee  // enum type
}


//never type: kokhono kono kichui return korbe na.

function throwErr(message: string): never {
  throw new Error(message)
}

