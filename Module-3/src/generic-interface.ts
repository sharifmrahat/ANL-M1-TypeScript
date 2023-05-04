//Generic Interface

interface UserGenericInterface<T>{
    name: string,
    value: T,  //remarks is generic type in interface
}

const student1:UserGenericInterface<number> = {
    name: 'Ryan',
    value: 23
}

const student2:UserGenericInterface<string> = {
    name: 'Ryan',
    value: 'something'
}

//Note: <X, Y=undefined> : We can set the default value for generic type parameter.

interface NewUserGenericInterface<X, Y=undefined> {
    name: string,
    value1: X,
    value2?: Y 
}