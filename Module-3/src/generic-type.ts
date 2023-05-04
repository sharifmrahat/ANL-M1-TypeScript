//Generic type

type GenericArray<T> = Array<T>;

const myNumbersArray: GenericArray<number> = [1, 23, 55];
const myStringsArray: GenericArray<string> = ["ab", "cd", "ef"];

const myStudentsArray: GenericArray<{ name: string; roll: number }> = [
  { name: "xyz", roll: 5 },
  { name: "abc", roll: 99 },
];

//Note: We can set Multiple argument as generic type like: GenericArray<X, Y, Z>

type GenericTuple<X, Y, Z> = [X, Y, Z]; //created a generic tuple type

const genericTupleArray: GenericTuple<string, number, { company: string }> = [
  "Name",
  123,
  { company: "nothing" },
];

