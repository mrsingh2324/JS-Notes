// create a basic js file
// console.log("Hello, World!");

// common function

// console.log("Hello, World!"); // prints in console
// alert("This is an alert box!");
// let name = prompt("What’s your name?");
// let ok = confirm("Do you want to continue?");
// console.log("User:", name, "Confirmed:", ok);

// Single line comment
/* Multi-line
   comment */

// Variables & Data Types
// Data Types: string, number, boolean, undefined, null, object, array
// let age = 25; // number
// let name = "John";
// let isStudent = true; // boolean
// let address;
// let phone = null; // null
// // //  reference data types
// let person = { firstName: "Jane", lastName: "Doe" }; // object
// let colors = ["red", "green", "blue", 1, true]; // array
// let fn = function(){console.log("Hi")}; // Function

// Hoisting

// let b = 2;

// var a = 1;
// const c = 3;

// const getValue = function(){
// var a;
//    console.log(a);
//    var a = 10;
//    console.log(a);
// };
// getValue(); // undefined due to hoisting

// var greeting = "Hello Greetings from Hoisting!";
// console.log(greeting); // undefined due to hoisting

// console.log(x); // Error! (let/const not hoisted)
// const x = 5;

// console.log(y); // Error! (let/const not hoisted)
// let y = 10;

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
// let user = {profile: {email: "me@mail.com"}};
// console.log(user.profile?.email);  // "me@mail.com"
// console.log(user.address?.city);
// console.log(user?.email);

// Control Structures

// let score = 85;
// if (score > 90) console.log("Excellent");
// else if (score > 60) console.log("Good");

// else console.log("Try again");

// switch
// let color = "red";
// switch(color) {
//   case "red": console.log("Stop"); break;
//   case "green": console.log("Go"); break;
//   default: console.log("Invalid");
// }

// loops //used to execute a particular block of code for n
//  number of time
// for (let i=1; i<=3; i++) console.log("For:", i);

// let j=1;
// while (j<=3) { console.log("While:", j); j++; }

// let k=1;
// do {console.log("Do-while:", k); k++;} while (k<1);

// for...in (objects)
// let obj = {a:1,b:2};
// for (let key in obj) console.log(key, obj[key]);

// for...of (arrays)
// for (let num of [10,20,30]) console.log(num);

// // break / continue
// for (let n=1; n<=5; n++) {
//   if (n===3) continue;
//   if (n===4) break;
//   console.log(n);
// }

// Function declaration
// console.log(greet("Alice"));
// console.log(greet("Bob"));
// console.log(greet("Charlie"));
// function greet(name) {
//   return "Hello " + name;
// }

// console.log(greet("Alice"));
// console.log(greet("Bob"));
// console.log(greet("Charlie"));

// // Function expression
// const add = function(a,b){  return a+b; };
// console.log(add(2,3));

// // Arrow function
// const square = n => n*n;
// console.log(square(5));

// // Default & Rest parameters
// function sum(a, b, ...rest) {
//   return a+b+rest.reduce((acc,v)=>acc+v,0); // sum of rest
// }
// console.log(sum(1,2,3,4,5,6)); // 10

// // IIFE
// (function(){
//   console.log("IIFE runs immediately");
// })();

// // Callback function
// A callback function is simply a function that is passed as an argument to another function — and that function will call it (or "call it back") later.
// function processUserInput(callback) {
//   let name = "John";
//   console.log("Processing user input...");
//   callback(name);
// }
// processUserInput(n => console.log("Hi " + n));

// // Higher-order function
// example for higher order function
// function multiplyBy(factor) {
//   return function(number) {
//     return number * factor;
//   };
// }

// function
// const double = multiplyBy(2);
// console.log(double(5)); // 10

// Scope & Closures
// Understand variable access and memory persistence.

// let globalVar = "I am global";

// Function scope
// function testScope() {
//   let local = "I am local";
//   console.log(local);
//   console.log(globalVar);
//   function innerFunc() {
//       console.log(local); // has access to outer function's variable
//   }
//   innerFunc();
// }

// console.log(local); // not accessible
// testScope();

// Block scope
// if (true) {
//   let block = "I exist only here";
//   console.log(block); // inside block only
// }

// // Lexical scope & Closures
// // Where the data can be accessed from nested functions
// function outer() {
//   let secret = "Hidden data";
//   function inner() {
//     console.log(secret); // has access
//   }
//   return inner;
// }
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
// //
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
// sayHello.apply(user, [35, 20, 15]); // set value of this (to - 35) as its scope is lost
// const boundFn = sayHello.bind(user, 35);
// boundFn();


