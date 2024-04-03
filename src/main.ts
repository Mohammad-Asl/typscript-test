// RegEx
// let re : RegExp = /\w+/g;

// Array
// let names : string[] = ['book','pen'];
// names.push('pencil')

// tuple
// let myTuple : [number, string , boolean] = [21, 'book', true]
// let mixed = [1,'pen',false]

// myTuple = mixed // Error

// // Type interface with arrays
// let fruits = ['banan', 'apple' , 'orange']

// const f = [10]

// let things = ['sumsung',true,7]
// let t = things[0]

// // Object
// let user : {firstName:string , age:number , id:number} = {
//     firstName:'John',
//     age:22,
//     id:10
// }
// user.firstName = 'Alex'


type Guitarist = {
    name: string,
    active?: boolean, // bolean or undefined
    albums: (string | number)[]
}

let evh : Guitarist = {
    name:'Ali',
    active: true,
    albums: ['banan', 10]
}

// // Type interface with object

// let person = {
//     firstName:'Max',
//     age:20
// }
// person.firstName = 'Rick'
// const age = person.age

// // Function
// function addNumber(a:number, b:number) : number {
//     return a + b
// }

// const subtractNumber = (a:number, b:number) : number => {
//     return a + b
// }

// addNumber(2,7)
// subtractNumber(9,1)

// const addAllNumbers = (items:number[]) : void => {
//     const total = items.reduce((a,b) => a+b)
//     console.log(total)
// }

// addAllNumbers([1,4,2,1])

// // Return type interface
// function formatGreeting(names:string , greeting:string) : string {
//     return `${names}, ${greeting}`
// }

// const result = formatGreeting('mario' , 'hello')

// // any type
// let age : any
// let title

// age = 30
// age = true

// title = 25
// title = {
//     hello:'word'
// }

// // any type in array 
// let things : any[] = ['hey' , 23 , true , null]
// things.push({id : 3})

// // any type in function
// function addTogether(value:any) : any {
//     return value + value 
// }

// const result = addTogether('hello')