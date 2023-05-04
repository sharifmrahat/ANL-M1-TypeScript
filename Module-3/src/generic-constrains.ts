//Generic constrains
interface MyInfoType {
    name: string,
    age: number,
    skills: string[]
}

const addMyInfo = <T extends MyInfoType>(myInfo: T) => {
    const company = 'Programming Hero'
    const result = {...myInfo, company}
    return result
}

const myInfo: MyInfoType = {
    name: 'xyz',
    age: 34,
    skills: ['js', 'ts', 'react']
}

const result = addMyInfo<MyInfoType>(myInfo)
