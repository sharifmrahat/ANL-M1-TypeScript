//declare a class with construction

//Before:
// class Vehicles {
//   name: string;
//   type: string;
//   year: number;
//   constructor(name: string, type: string, year: number) {
//     this.name = name;
//     this.type = type;
//     this.year = year;
//   }
//   //Create a normal function/method: cz arrow function e this property kaj kore na.
//   about() {
//     return `${this.name} is a ${this.type} which is release on ${this.year}`;
//   }
// }

//After:
class Vehicles {
    constructor(public name: string, public type: string, public year: number) {}
    about() {
      return `${this.name} is a ${this.type} which is release on ${this.year}`;
    }
  }
  
  //create some instance
  
  const bike = new Vehicles("Suzuki Gixxer SF", "bike", 2022);
  const superCar = new Vehicles("Ferrari F8", "super car", 2020);
  
  console.log(bike.about(), superCar.about());
  