//Type Assertion

function kgToGram(param: string | number): string | number | undefined{
    if(typeof param === 'string'){
        return `ans is ${parseFloat(param)*1000} gm`
    }
    if(typeof param === 'number'){
        const result = param*1000
        return result
    }
}

const convertAsString = kgToGram('2') as string // return type
const convertAsNumber = kgToGram(3) as number //return type

console.log(convertAsString)


//customer error type
type CustomError ={
    message: string
}

try {
    
} catch (error) {
    console.log((error as CustomError).message)
}


//Type assertion writing syntax:
//note: we can also write type assertion with < > sign on the left side of the variable:

let myData: any

myData = 'something'

//syntax-1
myData as string

//syntax-2
(<string>myData).length  //this syntax will not work in TSX format.
