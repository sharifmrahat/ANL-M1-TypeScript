//Generic Keyof

type PersonType = {
    name: string;
    age: number;
    skills: string[];
  };
  
  type NewPersonType = keyof PersonType;
  
  const value1: NewPersonType = "name";
  
  //Example with function:
  
  function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
    obj[key];
  }
  
  const getResult = getProperty(
    { name: "my name", age: 23, skills: ["js", "ts"] },
    "age"
  );
  
  //we can only send 'name' 'age' 'skills' for Y as 2nd parameter of the function
  //Because first param includes only this property
  