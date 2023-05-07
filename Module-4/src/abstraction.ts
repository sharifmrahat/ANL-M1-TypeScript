//Abstraction using interface:

interface IVehicle {
    startEngine(): void;
    stopEngine(): void;
    move?(): void;
  }
  
  class Car implements IVehicle {
    constructor(
      public name: string,
      public brand: string,
      public model: number
    ) {}
    startEngine(): void {
      console.log(" I am starting engine... ");
    }
    stopEngine(): void {
      console.log(" I am stopping engine");
    }
    // move(): void {
    //   console.log(" I am stopping engine");
    // }
  }
  
  const vehicle1 = new Car("Car", "Toyota", 2000);


//Abstraction using abstract class:

abstract class AnimalCls {
    abstract makeSound(): void;
  
    move(distance: number): void {
      console.log(`The animal moves ${distance} meters.`);
    }
  }
  
  class DogCls extends AnimalCls {
    makeSound(): void {
      console.log('Woof!');
    }
  }
  
  class CatCls extends AnimalCls {
    makeSound(): void {
      console.log('Meow!');
    }
  }
  
  const dog: AnimalCls = new DogCls();
  dog.makeSound(); // Output: Woof!
  dog.move(10); // Output: The animal moves 10 meters.
  
  const cat: AnimalCls = new CatCls();
  cat.makeSound(); // Output: Meow!
  cat.move(5); // Output: The animal moves 5 meters.