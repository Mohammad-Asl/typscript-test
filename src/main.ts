// RegEx
// let re : RegExp = /\w+/g;
/////////////////////////////////////
// Array
// let names : string[] = ['book','pen'];
// names.push('pencil')
/////////////////////////////////////
// tuple
// let myTuple : [number, string , boolean] = [21, 'book', true]
// let mixed = [1,'pen',false]

// myTuple = mixed // Error
/////////////////////////////////////
// // Type interface with arrays
// let fruits = ['banan', 'apple' , 'orange']

// const f = [10]

// let things = ['sumsung',true,7]
// let t = things[0]
/////////////////////////////////////
// // Object
// let user : {firstName:string , age:number , id:number} = {
//     firstName:'John',
//     age:22,
//     id:10
// }
// user.firstName = 'Alex'

// type Guitarist = {
//     name: string,
//     active?: boolean, // bolean or undefined
//     albums: (string | number)[]
// }

// let evh: Guitarist = {
//     name: 'Ali',
//     active: true,
//     albums: ['banan', 10]
// }

// let jp: Guitarist = {
//     name: 'Mohammad',
//     albums: ['1', '2', '3', '4']
// }
// evh = jp  // true
/////////////////////////////////////
// Type interface with object

// let person = {
//     firstName:'Max',
//     age:20
// }
// person.firstName = 'Rick'
// const age = person.age
/////////////////////////////////////
// // Function
// function addNumber(a:number, b:number) : number {
//     return a + b
// }

// // const subtractNumber = (a:number, b:number) : number => {
// //     return a + b
// // }

// // addNumber(2,7)
// // subtractNumber(9,1)

// const logMessage = (message:any) : void => { // not returning
//     console.log(message)
// }

// logMessage('Hello World')
// logMessage(addNumber(2,7))

// // const addAllNumbers = (items:number[]) : void => {
// //     const total = items.reduce((a,b) => a+b)
// //     console.log(total)
// // }
// // addAllNumbers([1,4,2,1])

// // type mathFunction = (a:number, b:number) => number // (آرایه و آبجکت)تایپ به همه اشکال میتواند نوشته شود

// interface mathFunction { // فقط به صورت آبجکت میاید
//     (a:number, b:number) : number
// }

// let multiply : mathFunction = function(c,d){
//     return c * d
// }

// logMessage(multiply(3,9))

// // Optional parameters
// const addAll = (a:number, b:number , c?:number) : number => {
//     if(typeof c !== 'undefined') {
//         return a + b + c
//     }
//     return a + b
// }

// // Default param value
// const sumAll = (a:number, b:number, c:number=2) : number => {
//     return a + b + c
// }

// logMessage(addAll(1,2,3))
// logMessage(addAll(1,2))
// logMessage(sumAll(1,2))

// // Rest parameters
// const total = (a:number,...nums: number[]) : number => {
//     return a+ nums.reduce((prev,curr) => prev + curr)
// }
// logMessage(total(7,8,10,9))

// const createError = (errorMessage:string) : never => {
//     throw new Error(errorMessage)
// };

// const infinite = () => {
//     let i : number = 1
//     while(true) {
//         i++
//         if( i > 100 ) break
//     }
// }

// // Custom type guard
// const isNumber = (value : any) : boolean => {
//     return typeof value === 'number' ? true : false
// }

// // use of the never type
// const numberOfString = ( value : number | string ) : string => {
//     if ( typeof value === 'string' ) return 'string'
//     if(isNumber(value)) return 'number'
//     return createError('This is should never happen!')
// }

/////////////////////////////////////
// Return type interface
// function formatGreeting(names:string , greeting:string) : string {
//     return `${names}, ${greeting}`
// }

// const result = formatGreeting('mario' , 'hello')
/////////////////////////////////////
// any type
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
/////////////////////////////////////
// type Aliases
// type stringOrNumber = string | number

// type stringOrNumberArray = string | number[]

// type Guitarist = {
//     name?: string,
//     active: boolean,
//     albums: stringOrNumberArray
// }
/////////////////////////////////////
// // Literal types
// let myName : 'Ali'

// let userName : 'Mohammad' | 'Hossein' | 'Reza'
// userName = 'Mohammad' // similar const

/////////////////////////////////////
// chapter 5 : Assertions

// type One = string
// type Two = string | number
// type Three = 'hello'

// // convert to more or less specific
// let a : One = 'hello'
// let b = a as Two
// let c = b as Three

// // not use in React
// let d = <One>'word'
// let e = <string | number>'word'

// let addConcat = (a:number , b:number , c:'add'|'concat') : number | string => {
//     if(c === 'add') return a+b
//     return ''+a+b
// }
// let myVal : string = addConcat(2,2,'concat') as string

// // the DOM
// const img =document.querySelector('img') as HTMLImageElement // or const img =document.querySelector('img')!
// const myImg = document.getElementById('#img') as HTMLImageElement

// img.src
// myImg.src

////////////////////////////////////
// chapter 6 : Classes

// class Coder {
//     // name: string;
// //   age: number;
// //   music: string;
// //   lang: string;
//
//     constructor(public readonly name: string, public age: number, private music: string, protected lang: string) {
//         this.name = name;
//         this.age = age;
//         this.music = music;
//         this.lang = lang;
//     }
//
//     public getAge() {
//         return `Hello ${this.name}!`;
//     }
// }
//
// const Asl = new Coder('mohammad', 'Rock', 20)
// console.log(Asl.getAge())
// console.log(Asl.age)

///////////////////////////////////
// chapter 7 : Index Signatures & keyof Assertions

// interface transactinObj {
//     readonly [index : string]: number
//     Pizza: number,
//     Books: number,
//     Job: number,
// }
//
// const todaysTransactions: transactinObj = {
//     Pizza: 100,
//     Books: 200,
//     Job: 300,
//     // dave:'ojo' // Error, because is not number
// }
// console.log(todaysTransactions.Books)
// console.log(todaysTransactions['Books'])
//
// let prop : string = 'Pizza'
// console.log(todaysTransactions[prop])
//
// const todaysNet = (transactions : transactinObj) : number => {
//     let total = 0
//     for (const transaction in transactions) {
//         total += transactions[transaction]
//     }
//     return total
// }
// console.log(todaysNet((todaysTransactions)))
//
// console.log(todaysTransactions['dave'])

//////////

interface Student {
    name: string,
    GPA : number,
    classes ?: number[]
}
const student : Student = {
    name:'mohammad',
    GPA:3.6,
    classes:[20,100]
}

for (const key in student) {
    console.log(`${key} : ${student[key as keyof Student]}`)
}

const logStudentKey = (student : Student , key : keyof Student) : void => {
    console.log(`student ${key} : ${student[key]}`)
}