// Constants and Variables
const PI = 3.14;
let radius = 3;

console.log("PI:", PI);
console.log("Radius:", radius);


// Type Coercion
const one = 1;
const two = "2";

console.log("one:", one);
console.log("two:", two);

console.log(one + two);          // 12
console.log(one + Number(two));  // 3


// Global and Block Scope
let course = "CSE131";

if (true) {
    let student = "John";

    console.log(course);
    console.log(student);
}

console.log(course);

// This would cause an error because student
// only exists inside the if block:
// console.log(student);