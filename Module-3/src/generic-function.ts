//Generic Function

const explicitArrayFunc = (param: string): string[] => {
    return [param];
  };
  
  const genericArrayFunc = <T>(param: T): T[] => {
    return [param];
  };
  //Function param type and return type both are generic
  
  const newResult1 = genericArrayFunc<string>("Hello World");
  const newResult2 = genericArrayFunc<number>(313);
  const newResult3 = genericArrayFunc<{ name: string; roll: number }>({
    name: "Ryan",
    roll: 3,
  });
  
  //We can use multiple parameter with generic in a function
  
  const multiParamGenericFunc = <X, Y>(param1: X, param2: Y): [X, Y] => {
    return [param1, param2];
  };
  
  const multiResult = multiParamGenericFunc<string, number>("Hello", 123);
  
  //We can use tuples here as well
  