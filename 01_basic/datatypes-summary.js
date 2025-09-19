//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

/*=====================================*/
// Stack Memory (Primitive), Heap Memory (non-Primitive)
let name1 = "Parvej"
anothername1 = name1
name1 = "hello testing"
// console.log(anothername1)
// console.log(name1)

let user1 = {
    email: "test@gmail.com",
    upi: "test@ybl"
}

let user2 = user1
user2.email = "test@google.com"
console.log(user1)
console.log(user2)