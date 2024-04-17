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
const student = {
    name: 'mohammad',
    GPA: 3.6,
    classes: [20, 100]
};
for (const key in student) {
    console.log(`${key} : ${student[key]}`);
}
const logStudentKey = (student, key) => {
    console.log(`student ${key} : ${student[key]}`);
};
