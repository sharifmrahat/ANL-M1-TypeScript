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
    name: 'The Consolers',
    employee: number,
    location: string,
} = {
    name: 'The Consolers', // literal type er value chara onno kichu dile error dibe
    employee: 2203,
    location: 'Bangladesh'
}