class CommonClass {
    name: string
    id: number
    address: string

    constructor(name: string, id: number, address: string){
        this.name = name
        this.id = id
        this.address = address
    }

    about() {
        return `Name: ${this.name}, ID: ${this.id}, Address: ${this.address}`
    }
}

//We can use this common class into another class: meaning we are Inheriting this common class with its properties and methods.

class Student extends CommonClass{
    constructor(name: string, id: number, address: string,){
        super(name, id, address)
    }
}

class Teacher extends CommonClass{
    designation: string  //own property

    constructor(name: string, id: number, address: string, designation: string){
        super(name, id, address)
        this.designation = designation
    }

    //own method
    teacherMethod() {
        return `${this.about()}, Profession: ${this.designation}`
    }
}


//Create instance:

const student1 = new Student('Ryan', 3, 'Dhaka')
console.log(student1.about()) //common method

const teacher1 = new Teacher('Mr. Alu', 420, 'BD', 'Lecturer')
console.log(teacher1.teacherMethod());  //own method
