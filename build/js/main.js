"use strict";
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
function addNumber(a, b) {
    return a + b;
}
// const subtractNumber = (a:number, b:number) : number => {
//     return a + b
// }
// addNumber(2,7)
// subtractNumber(9,1)
const logMessage = (message) => {
    console.log(message);
};
logMessage('Hello World');
logMessage(addNumber(2, 7));
let multiply = function (c, d) {
    return c * d;
};
logMessage(multiply(3, 9));
// Optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// Default param value
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMessage(addAll(1, 2, 3));
logMessage(addAll(1, 2));
logMessage(sumAll(1, 2));
// Rest parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMessage(total(7, 8, 10, 9));
const createError = (errorMessage) => {
    throw new Error(errorMessage);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// Custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
// use of the never type 
const numberOfString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This is should never happen!');
};
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
