//Example-1: same takeNap() method used for different output
class Person {
    takeNap(): void {
      console.log("I am sleeping 8 hours per day");
    }
  }
  
  class Pupil extends Person {
    takeNap(): void {
      console.log(`I am sleeping 10 hours per day`);
    }
  }
  
  class Developer extends Person {
    takeNap(): void {
      console.log(`I am sleeping 5 hours per day`);
    }
  }
  
  function getNap(param: Person) {
    param.takeNap();
  }
  
  const person1 = new Person();
  const person2 = new Pupil();
  const person3 = new Developer();
  getNap(person1);
  getNap(person2);
  getNap(person3);
  
  
  
  //Example-2: same getArea() method returning different output
  
  class Shape {
    getArea(): number {
      return 0;
    }
  }
  
  // area -> pi *r *r
  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }
    getArea(): number {
      return this.width * this.height;
    }
  }
  
  function getAreaOfShape(param: Shape) {
    console.log(param.getArea());
  }
  
  getAreaOfShape(new Circle(10));
  getAreaOfShape(new Rectangle(10, 12));
  