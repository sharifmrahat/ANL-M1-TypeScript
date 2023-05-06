console.log('Module 4 is ready');

//Functional Programming
const addNumber = (num1: number, num2: number): number => {
    return num1+num2
}

const sum1 = addNumber(2,3)


//Object Oriented Programming
class Calculator {
    add(num1: number, num2: number): number{
        return num1+num2
    }
}

const sum2 = new Calculator().add(2,3)

//OOP Build Blocks:
    // - Encapsulation
    // - Polymorphism
    // - Abstraction
    // - Inheritance