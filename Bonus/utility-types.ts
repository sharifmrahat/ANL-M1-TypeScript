// Please follow notes on Notion for module 5.5

//Pick Type

interface People {
  name: string;
  email: string;
  mobile?: number;
  address: string;
}

type Contact = Pick<People, "mobile" | "email">;

// output:
// type Contact = {
//   mobile?: number | undefined;
//   email: string;
// }

//Omit Type

type Identity = Omit<People, "mobile" | "email">;

// output:
// type Identity = {
//   name: string;
//   address: string;
// }

//Partial Type

type Optional = Partial<People>;

// output:
// type Optional = {
//   name?: string | undefined;
//   email?: string | undefined;
//   mobile?: number | undefined;
//   address?: string | undefined;
// }

//Required Type

type Important = Required<People>;

// output:
// type Important = {
//   name: string;
//   email: string;
//   mobile: number;
//   address: string;
// }

//ReadOnly Type

type ReadOnlyProp = Readonly<People>;

// type ReadOnlyProp = {
//   readonly name: string;
//   readonly email: string;
//   readonly mobile?: number | undefined;
//   readonly address: string;
// }

const personProp: ReadOnlyProp = {
  name: "Abcd",
  email: "email@gmail.com",
  address: "",
};

//you can't assign new value for the properties of personProp

//Record type

// type MyObj = {
//   a: string
//   b: string
//   c: string
//   n: string
// }

//We can create a same type using index signature

// type MyObj = {
//   [key: string]: string
// }

//We can do the record utility to fix the properties

// type MyObj = Record<string, string>  //Record<key type, return type>

//We can set the name of property as here
type MyObj = Record<"a" | "b" | "c", string>;

const myObj: MyObj = {
  a: "1",
  b: "2",
  c: "3",
  //can't use n property here
};
