//User type with alias:
type UserType = {
    name: string,
    age: number,
    devices?: string[]
}

const user1: UserType = {
    name: 'Xyz',
    age: 25
}

//Note: we can not extends type alias but we can user intersection type to extend"

type CustomerAlias = UserType & {
    email: string,
    mobile: number
}

const customer1: CustomerExtend = {
    name: 'Ppr',
    age: 29,
    email: 'prq@gmail.com',
    mobile: 1234
}

//User type with interface:
interface UserInterface {
    name: string,
    age: number,
    devices?: string[]
}

const user2: UserInterface = {
    name: 'Abc',
    age: 27
}

//Note: We can extends interface type like OOP:

interface CustomerExtend extends UserInterface {
    email: string,
    mobile: number
}

const customer2: CustomerExtend = {
    name: 'Ppr',
    age: 29,
    email: 'prq@gmail.com',
    mobile: 1234
}



//Array with type alias and interface

type rollNumber = number[]
const myArray1:rollNumber = [1, 2, 3]

interface rollNumberInterface {
    [index: number]: number  // [index: type alway number]: element type as your wish. [index: number]: string <-- here element type is string.
}
const myArray2: rollNumberInterface = [1, 2, 3]