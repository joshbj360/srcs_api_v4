
interface Person {
    name: string,
    age: number,
    address: string
}

const persons: Person[] = [] as Person[]

const John: Person = {} as Person
const Magret: Person = {} as Person

John['name'] = 'John Micheal'
John['age'] = 56

Magret['name'] = John['name']

persons.push(John)
persons.push(Magret)

console.log(persons)