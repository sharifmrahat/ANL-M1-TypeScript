//Conditional Type

//Here, type a2 depends on type a1:
type a1 = number
type a2 = a1 extends string ? string : null

//we can check the condition in nested way

//Example-1:
interface CarType {
    feature1: string,
    feature2: string
}

type CheckProperty<T, K> = K extends keyof CarType ? true : false

type CheckFeature1 = CheckProperty<CarType, 'feature1'>