//Guard-1: keyof guard
type Alphanumeric = string | number;

function add(num1: Alphanumeric, num2: Alphanumeric): Alphanumeric {
  if (typeof num1 === "string" && typeof num2 === "string") {
    return num1 + num2;
  } else {
    return num1.toString() + num2.toString();
  }
}

//Guard-2: in guard

type NormalUser = {
  name: string;
};

type AdminUser = NormalUser & {
  role: "admin";
};

//Create a function which will return something based on user role:

const findUserRole = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    return `I'm the owner, my role is ${user.role}`;
  } else {
    return `I'm a normal user`;
  }
};

const normalUser1: NormalUser = { name: "Sadman" };
const adminUser1: AdminUser = { name: "Elon Musk", role: "admin" };

console.log(findUserRole(normalUser1));
console.log(findUserRole(adminUser1));

//Guard-3: Instanceof Guard

class Animal {
  name: string;
  species: string;
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  makeSound() {
    console.log("I am making sound");
  }
}

class Dog extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBark() {
    console.log(" I am barking");
  }
}
class Cat extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeMeaw() {
    console.log("I am Meawing");
  }
}

//checking type with function
function isDog(animal: Animal): animal is Dog {
  return animal instanceof Dog;
}

function isCat(animal: Animal): animal is Cat {
  return animal instanceof Cat;
}

//access methods with instanceof guard
function getAnimal(animal: Animal) {
  if (isDog(animal)) {
    animal.makeBark();
  } else if (isCat(animal)) {
    animal.makeMeaw();
  } else {
    animal.makeSound();
  }
}

const animal1 = new Dog("German Shepard", "dog"); // instance -> Dog
const animal2 = new Cat("Bangladeshi Bilai", "cat"); // inatance -> Cat
