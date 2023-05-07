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

  