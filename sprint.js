// create a basic js file
// console.log("Hello, World!");

// common function
// console.log("Hello, World!"); // prints in console
// alert("This is an alert box!");
// // a = input()
// let name = prompt("What’s your name?");
// let ok = confirm("Do you want to continue?");
// console.log("User:", name, "Confirmed:", ok);
// function alert(a){
//    console.log(a);
// }
// alert("print something");
// Single line comment
/* Multi-line
   comment */


// obj = null;

// console.log(obj ?? "Default Value"); // "Default Value"



// Variables & Data Types
// primitive data types definition: the data types that do not require any pther data typet to be declared,
// data that is not an object and has no methods
// Data Types: string, number, boolean, undefined, null, object, array
// let age = 25; // number
// console.log(typeof(age))
// let name = 'John';
// console.log(typeof(name))

// let isStudent = true; // boolean
// let address;
// var phone = null; // null
// phone = 0987654323;
// null vs undefined

// var a = undefined;
// console.log(a); // undefined


// null is an assignment value. It can be assigned to a variable as a representation of no value.
// undefined means a variable has been declared but has not yet been assigned a value.
// // //  reference data types
// let person = { firstName: "Jane", lastName: "Doe" }; // object
// let colors = ["red", "green", "blue", 1, true]; // array
// let fn = function(){console.log("Hi")}; // Function


// (function c() {
//    let a;
//    console.log(a);
//    a= 5;
//    function d(){
//       console.log(a);
//    }
// })()


// Hoisting
// define hoisting
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.



// let b = 2; //declaration + initialisation
// b = 5; // initialisation
// // let b = 3; // redeclare
// var a = 1;
// var a = 5; //reclare

// const c = 10; // declare + initialise
// // const c = 15; // redeclare
// const c = 3; // redeclare

// let can be re-assigned but not re-declared
// var can be re-declared and re-assigned
// const cannot be re-declared or re-assigned

// const getValue = function(){
//    // console.log(a); 
//    console.log("Hello")// undefined
//    console.log("Hello")// undefined
//    console.log("Hello")// undefined
//    console.log("Hello")// undefined
//    const a = 10;
//    console.log(a); // 10
// };
// getValue(); // undefined due to hoisting

// var a = true;
// 


// var greeting = "Hello Greetings from Hoisting!";
// console.log(greeting); // undefined due to hoisting

// console.log(x); // Error! (let/const not hoisted)
// const x = 5;

// console.log(y); // Error! (let/const not hoisted)
// let y = 10;

// let a = 
// console.log(Number(a));
// console.log(Boolean(a));

// const person = {
//     name: "John",
//     age: 30,
//     isStudent: true
// }

//  default value of boolean 
// let a = 1;
// let b = 0;
// console.log(Boolean(a)); // true
// console.log(Boolean(b)); // false

// Typeof operator
// let a = prompt(`Enter a value:`);
// console.log(`The type of the entered value is: ${typeof a}`); // always string
// console.log(typeof 123);     // number
// console.log(typeof "abc");   // string
// console.log(typeof true);  //boolean
// console.log(typeof undefined);

// Type Coercion || Type Casting
// console.log("5" + 1);  // "51" (string)
// console.log("5" - 1);  // 4 (number)
// console.log(Number("123")); // Explicit conversion
// console.log(String(123)); // Explicit conversion
// console.log(Boolean(2)); // true

// Truthy and falsy values

// Falsy values: false, 0, "", null, undefined, NaN
// Truthy values: true, 1, "non-empty string", {}, [] //

// let a = 1
// let b = "1"

// console.log(a == b && typeof(a) == typeof(b)); //false
// console.log(a === b); // false

// Operators

// Arithmetic: +, -, *, /, %, ++, --
// a = 5;
// b = 3;
// console.log(a + b); // 8
// console.log(a - b); // 2
// console.log(a * b); // 15
// console.log(a / b); // 1.666...
// console.log(a % b); // 2
// console.log(a++);   // 5 (returns a, then increments)
// console.log(a);    // 6
// console.log(++b);   // 4

// Assignment: =, +=, -=, *=, /=
// Comparison: ==, ===, !=, !==, >, <, >=, <=
// Logical: &&, ||, !
// let a = "5"
// var b = 5;
// console.log(a === b);  // false (strict check)
// console.log(3 <= 5);
// console.log(5 + 3); // 8

// console.log(5 > 3 && 2 < 4); // true

// console.log(5 == "5");  // true (type coercion)
// console.log(5 === "5"); // false (strict check)

// Logical

// console.log(false && false);
// console.log(false || false);  //false
// console.log(!true);         // false

// Ternary

// let age = 20;
// let msg = (age >= 18) ? "Adult" : "Minor";
// console.log(msg);

// Nullish coalescing

// let name = null;
// console.log(name ?? null); // Guest

// Optional chaining
// let user = {profile: {email: "me@mail.com"}, address: {city: "New York"}, salary: 10000};
// let arr = [1,2,4,5,6,7,7]
// // let S = "Satya"

// for (let key in arr) {
//   console.log(key);
// }

// console.log(user.profile?.email);  // "me@mail.com"
// console.log(user.address?.city);

// Control Structures

// let score = 85;
// if (score > 90) console.log("Excellent");
// else if (score > 60) console.log("Good");

// else console.log("Try again");

// switch if color = red
// let color = "violet";
// switch(color) {
//   case "red": console.log("Stop"); break;
//   case "green": console.log("Go"); break;
//   default: console.log("Invalid");
// }

// loops //used to execute a particular block of code for n
//  number of time
// for (let i=1; i<=3; i+2) {
//    console.log("For:", i);
//    console.log("For:", i*5);
// }

// let j=1;
// while (j<=3) { console.log("While:", j); j++; }



// for...in (objects)
// let obj = {
//    a:1,
//    b:2
// };

// for (let key in obj) console.log(obj[key]);

// for...of (arrays)
a=[10,20,30]
for (let num in a) console.log(a[num]);

// // break / continue

// for (let n=1; n<=7; n++) {
//   if (n===3) continue;
//   if (n===4) break;
//   console.log(n); // 1, 2, 4
// }

// Function declaration
// console.log(greet("Alice"));
// console.log(greet("Bob"));
// // console.log(greet("Charlie"));
// const greet = function(name){
//   return "Hello " + name;
// }
// greet("Satya")

// console.log(greet("Alice"));
// console.log(greet("Bob"));
// console.log(greet("Charlie"));

// variable declaration and variable initialization?
// // Function expression
// const add = function(){  return a+b; };
// console.log(add(2,3));

// // Arrow function
// const square = (n, callback) => n*n;
// console.log(square(5));

// // Parameters & Arguments
// function greet(name) {
//   return "Hello " + name;
// }

// greet a = new greet();

// // Default & Rest parameters





// (function sum(a, b, ...rest) {
//   console.log(a+b+rest.reduce((acc,v)=>acc+v,0)); // sum of rest
// })()





// function product(a,b,...rest){
//   const z = 5;
//   console.log(a*b * rest.reduce((acc,v)=>acc*v,1))
//   function access(){
//     console.log(z); 
// }

// console.log(product(4,6,234,2345,1345 ));

// // IIFE
// (function(){
//   console.log("IIFE runs immediately");
// })();

// // Callback function
// A callback function is simply a function that is passed as an argument to another function — and that function will call it (or "call it back") later.
// function processUserInput(greet) {
//   let name = "John";
//   console.log("Processing user input...");
//   return greet(name);
// }

// processUserInput(greet)

// function greet(name){
//   console.log("Hello " + name);
// }




// processUserInput(n => console.log("Hi " + n));

// // Higher-order function
// example for higher order function
// function multiplyBy(factor) {
//   return function(number) {
//     return number * factor;
//   };
// }
// multiplyBy(5);

// function
// const double = multiplyBy(2);
// console.log(double(5)); // 10

// Scope & Closures
// Understand variable access and memory persistence.




// var globalVar = "I am global";

// // Function scope






// function testScope() {
//   var local = "I am local";
//   function innerFunc() {
//       return (local); 
//   }
//   return innerFunc();

// }

// const result = testScope();
// console.log(result); 

// Block scope

// if (true) {
//   let block = "I exist only here";
//   console.log(block); // inside block only
// }

// function testScope() {
//   let local = "I am local";
//    if(true) {
//       let block = "I exist only here";
//       console.log(block); // inside block only
//    }
//    console.log(block); // ReferenceError
// }

// which keywords. let/cost were introduced in es6 



// // Lexical scope & Closures
// // Where the data can be accessed from nested functions
// function outer() {
//   let secret = "Hidden data";
//   function inner() {
//     console.log(secret); // has access
//     function inner2(){
//       let secret2 = "Hidden data2";
//       console.log(secret); // has access
//     }

//     console.log(secret2);  
//   }
//   return inner;
// }
// outer()

// we can see that the inner function has access to the outer function's variable
// secret, even after the outer function has finished executing.
// const closureExample = outer();
// closureExample(); // "Hidden data"

// Closure use case
// function createCounter() {
//   let count = 0;
//   return {
//     increment: () => ++count,
//     get: () => count
//   };
// }
// let counter = createCounter();
// counter.increment();
// console.log(counter.get()); // 1

// Global context
// console.log(this); // window (in browser vs in terminal it is {})

// Object method
// const person = (a) => {
//    name: "Alice",
//    greet() { console.log("Hi " + this.name); 

//    }
//    };
//    person.greet();
//
// const person = {
//   name: "Alice",
//   greet() { console.log("Hi " + this.name); }
// };
// person.greet(); // "Hi Alice"

// // // Arrow function (lexical `this`)
// const obj2 = {
//   name: "Bob",
//   greet: () => console.log("Hi " + this.name) // `this` not bound to obj2
// };
// obj2.greet(); // "Hi undefined"

// // In event handlers (browser)
// <button id="btn">Click</button>
// <script>
// document.getElementById("btn").addEventListener("click", function() {
//   console.log(this.id); // refers to clicked button
// });
// </script>

// // call, apply, bind
// function sayHello(age) {
//   console.log("Hi " + this.name + ", age " + age);
// }
// sayHello(20); // this refers to global object
// const user = { name: "Charlie" };

// sayHello.call(user, 25); // set value of this (to - 25) as its scope is lost
// // sayHello.apply(user, [35, 20, 15]); // set value of this (to - 35) as its scope is lost
// sayHello.bind(user, 35); // 





