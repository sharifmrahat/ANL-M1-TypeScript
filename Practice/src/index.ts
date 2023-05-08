//----------------------------> Problem: 0 <-----------------------------\\

// 0. Convert the following JavaScript array into a TypeScript tuple
//     `const userInfo = [101, "Ema", "John", true,  , "2023"];`

const userInf: [number, string, string, boolean, undefined, string] = [
  101,
  "Ema",
  "John",
  true,
  undefined,
  "2023",
];


//----------------------------> Problem: 1 <-----------------------------\\

// 1. Write a TypeScript function that takes in two arrays of numbers as parameters. The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays.

//     > For example, if the first array is [1, 2, 3, 4, 5] and the second array is [2, 4, 6, 8], the function should return a new array with the elements 2 and 4 because they are present in both arrays.
//     >

//     > The function should handle arrays of any length and should return the resulting array in the same order as they appear in the first array.
//     >

type arrOfNum = number[];

const matchingNumbers = (arr1: arrOfNum, arr2: arrOfNum): arrOfNum => {
  const set2 = new Set(arr2);
  const commonNumbers: arrOfNum = [];

  for (const element of arr1) {
    if (set2.has(element) && !commonNumbers.includes(element))
      commonNumbers.push(element);
  }
  return commonNumbers.sort();

  //sorting from low to high: array.sort(a, b) => a - b  (default) output: [1, 2, 3, 4]
  //sorting from high to low: array.sort(a, b) => b - a   [4, 3, 2, 1]
  //regular without sorting: array.sort(a, b) => a + b   output: [2, 1, 4, 3 ]
};

const arr1: arrOfNum = [1, 2, 6, 3, 3];
const arr2: arrOfNum = [1, 6, 2, 3, 3, 5];

const commonEl = matchingNumbers(arr1, arr2);
// console.log(commonEl);


//----------------------------> Problem: 2 <-----------------------------\\


// 2. You have an interface for `Product`, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value.

//     > Write a TypeScript generic function that takes this array, a criterion , and returns a new array containing only the products that match the given criterion and value. Use a generic type parameter in the function signature to ensure type safety.
//     >

//Solution-1: Fokira Way

// interface Product {
//     id: number;
//     name: string;
//     price: number;
//     category: string;
//   }

//   type CriterionType = 'id' | 'name' | 'price' | 'category';

//   interface Criterion<T> {
//     type: CriterionType;
//     value: T;
//   }

//   const findProduct = <T>(products: Product[], criteria: Criterion<T>): Product[] => {
//     const { type, value } = criteria;

//     const available = products.filter((product) => {
//       switch (type) {
//         case 'id':
//           return product.id === value;
//         case 'name':
//           return product.name === value;
//         case 'price':
//           return product.price === value;
//         case 'category':
//           return product.category === value;
//         default:
//           return false;
//       }
//     });

//     return available;
//   };

//Solution-2: Smart Way
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

type Criterion<T> = {
  [K in keyof Product]: { type: K; value: T };
}[keyof Product];

const filterProductsByCriterion = <T>(
  products: Product[],
  criterion: Criterion<T>
): Product[] => {
  const { type, value } = criterion;

  return products.filter((product) => product[type] === value);
};

const products: Product[] = [
  { id: 1, name: "apple", price: 20, category: "fruits" },
  { id: 2, name: "light", price: 100, category: "electronics" },
  { id: 3, name: "table", price: 2500, category: "furniture" },
];

const myCriteria: Criterion<number> = { type: "price", value: 100 };

const myProduct = filterProductsByCriterion(products, myCriteria);

// console.log(myProduct);


//----------------------------> Problem: 3 <-----------------------------\\

// 3. Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.

type ProductTuple = [string, number, number];
type ProductArray = ProductTuple[];

const calculateTotalCost = (products: ProductArray): number => {
  let totalCost = 0;

  for (const [name, price, quantity] of products) {
    const productCost = price * quantity;
    totalCost += productCost;
  }

  return totalCost;
};

const myProducts: ProductArray = [
  ['Apple', 10, 2],
  ['Orange', 15, 3],
  ['Banana', 20, 1],
];

const totalCost = calculateTotalCost(myProducts);
// console.log(totalCost);


//----------------------------> Problem: 4 <-----------------------------\\

// Suppose you have an array of numbers in TypeScript, and you want to find the sum of all the even numbers in the array. How would you approach this problem and write code to solve it?

//Solution-1:
// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;

// for (const number of numbers) {
//   if (number % 2 === 0) {
//     sum += number;
//   }
// }

// console.log(`Sum of even numbers: ${sum}`);

//Solution-2:

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numbers.reduce((acc, number) => acc + (number % 2 === 0 ? number : 0), 0);

// console.log(`Sum of even numbers: ${sum}`);


//----------------------------> Problem: 5 <-----------------------------\\

// Create an interface called Person that includes properties for name (string), age (number), and email (string). Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found.

interface Person {
  name: string;
  age: number;
  email: string;
}

function findPersonByEmail(people: Person[], email: string): Person | null {
  const foundPerson = people.find((person) => person.email === email);
  return foundPerson || null;
}

const people: Person[] = [
  { name: "John Doe", age: 25, email: "john@example.com" },
  { name: "Jane Smith", age: 30, email: "jane@example.com" },
  { name: "Mike Johnson", age: 35, email: "mike@example.com" },
];
// Example usage
const emailToSearch = "jane@example.com";
const personFound = findPersonByEmail(people, emailToSearch);

// console.log(personFound)


//----------------------------> Problem: 6 <-----------------------------\\

// Create a TypeScript program that declares an array of numbers. Use the spread operator to pass the elements of the array as arguments to a function that finds the minimum and maximum values of the array. Use destructuring to assign the minimum and maximum values to separate variables, and log them to the console.

function findMinMax(numbers: number[]): [number, number] {
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  return [min, max];
}

const allNumbers = [10, 5, 8, 3, 12, 6];

const [minValue, maxValue] = findMinMax(allNumbers);

// console.log("Minimum value:", minValue);
// console.log("Maximum value:", maxValue);


//----------------------------> Problem: 7 <-----------------------------\\

// Create a TypeScript program that declares a function that takes a string parameter with a literal type of "red", "green", or "blue", and an optional boolean parameter. If the boolean parameter is true, log the string parameter in uppercase. If the boolean parameter is false or not provided, log the string parameter in lowercase.

type LiteralColorType = 'red' | 'green' | 'blue'
const colorFunction = (color: LiteralColorType, available?: boolean): string => {
  if(available)
  return color.toUpperCase()
  else
  return color.toLowerCase()
}

const colorResult = colorFunction('blue', true)
console.log(colorResult)

//solution-2:
// function logColor(color: "red" | "green" | "blue", uppercase?: boolean) {
//   if (uppercase) {
//     console.log(color.toUpperCase());
//   } else {
//     console.log(color.toLowerCase());
//   }
// }

// // Example usage
// logColor("red", true);    // Output: "RED"
// logColor("green", false); // Output: "green"
// logColor("blue");         // Output: "blue"
