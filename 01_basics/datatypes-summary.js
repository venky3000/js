/* 
Primitive
7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
*/
/*
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 3425342534232356456345n
*/
/*
Reference(Non Primitive)

Arrays, Objects, Functions
*/
/*
const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Venky",
    age: 22,
}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof score);

console.log(typeof scoreValue);

console.log(typeof isLoggedIn);

console.log(typeof outsideTemp);

console.log(typeof userEmail);

console.log(typeof id);

console.log(typeof anotherId);

console.log(typeof bigNumber);

console.log(typeof heros);

console.log(typeof myObj);

console.log(typeof myFunction);
*/

// ***********************************************************

// Stack(Primitive), Heap(Non-Primitive)

let myGameName = "Venky"

let anotherName = myGameName
anotherName = "don"

console.log(myGameName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@123"
}

let userTwo = userOne

userTwo.email = "venky@123"

console.log(userOne.email);
console.log(userTwo.email);
