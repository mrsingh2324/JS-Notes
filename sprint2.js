// Objects : "A collection of key-value pairs".
// {
//     key: "value"
// }

// // Literal : "Fixed value"
// const person = { name: "Alice", age: 22, greet() { console.log("Hi " + this.name); } };
// person.name = "Bob";
// console.log(person.name);
// const a = 10;

// const obj = {
//     name:"Satya",
//     company : "Nxtwave",
//     address: {
//         pin: 500032,
//         house: {
//             name: "XYZ",
//             number: 123
//         }
//     }
// }
// console.log(obj.address.house.number); // 123

// constructor
// const user = new Object();
// user.name = "Bob";
// user.age = 25;

// object.create

// const user = Object.create({name:"Satya", age: 25});
// console.log(user);

// const a = fetch("http");
// const b = 6;

// const c =( a ?? 4 )+ (b ?? 9)
// console.log(c);

// (function add(a, b) {
//     return a + b;
// })()

// // Constructor
// const user = new Object();
// user.name = "Bob";
// user.age = 25;

// // Object.create()
// const base = { kind: "Human", age: 30 };
// console.log(typeof base); // object
// const child = Object.create(base);
// child.name = "Charlie";
// console.log(child.kind);  // Inherited
// console.log(child.name); // Own property

// // Access properties
// console.log(person.age);      // dot
// console.log(person["age"]);      // bracket

// const car = {
//   brand: "BMW",        // property
//   start() {            // method
//     console.log("Engine started");
//   }
// };

// const dog ={
//     breed: "Labrador",
//     bark() {
//         console.log("Woof!");
//     },
//     eat() {
//         console.log("meat");
//     }
// }

// const obj = { name: "Sam" };
// obj.age = 30;        // Add
// console.log(obj);
// sam, 30

// obj.name = "Sammy"; // Modify
// console.log(obj);
// sammy, 30.

// delete obj.age;     // Delete
// console.log(obj);
// sammy

// // [city, pin]

// const user = { name: "Mike", age: 21, address: { city: "Delhi", pin: 500032 } };

// console.log(Object.keys(user.address));    //  returning me an array
// console.log(Object.values(user));  // ["Mike", 21, {city: "Delhi", pin: 500032}]

// console.log(Object.entries(user)); // [["name","Mike"],["age",21]]

// // Assign, Freeze, Seal

// Object.freeze(copy); // cannot modify but can access and add new
// copy.name = "Bob";
// copy.place = "Delhi"; //

// console.log(copy); // { name: "Alice", age: 22 }

// Object.seal(copy);
// copy.name = "Bob";
// copy.place = "Delhi"; // cannot add new
// console.log(copy); // { name: "Bob", age: 22 }

// const person = { name: "Alice", age: 22};
// const copy = person
// const copy2 = Object.assign({}, person);
// console.log(copy)
// console.log(copy2)

// person.name = "Bob";
// console.log(person);
// console.log(copy);
// console.log(copy2);

// // console.log(copy.name); // "Alice"
// copy.name = "Bob"; // cannot add new
// console.log(copy); // cannot add/delete but can modify existing

// // Destructuring + Spread + Shorthand
// console.log(person.age, person.name); // "22"

// const person = { name: "Alice", age: 22, city: "Delhi", pin: 500032 };
// const { name, pin, ...rest } = person;
// console.log(name, pin , rest); // "Alice", 22

// const updated = { ...person, place: "Delhi" };

// console.log(updated); // { name: "Alice", age: 22, place: "Delhi" }
// const newPerson = (name, age) => ({ name, age });
// console.log(name, age, updated, newPerson("Bob", 30));

// shorthand
// const name = "John";
// const age = 30;

// const user = {
//   name, // same as name: John
//   age,  // same as age: 30
//   greet() {
//     console.log("Hi!");
//   }
// };
// console.log(user);

// Arrays

// // Creation
// console.log(nums[0]);
// const arr2 = new Array(5); //constructor
// const arr3 = [];    // Empty array
// arr3[0] = 1;
// arr3[1] = 2;
// arr3[2] = 3;
// console.log(arr3);

// const nums = [1, 2, 3]; //literal
// nums[2]

// // Mutating
// const nums = [1, 2, 3, 5, 7, 9, 0]; //literal
// nums.push(4);
// nums.pop();
// nums.shift();
// nums.unshift(3);
// nums.splice(1, 5, 9); // replace // delete 1 element at index 1
// nums.splice(2, 0, 9); // add
// nums.splice(0, 7); // delete 2 elements
// console.log(nums);

// arr = [3, 1, 4, 2];
// arr.reverse();
// arr.reverse();
// console.log(arr);

// const arr = [5,2,6,1]
// arr.sort(reverse= true);
// console.log(arr);

// // Non-mutating

// nums= [1,2,3,4,5];
// nums2 = [1,4,5,6];
// const combined = nums.concat(nums2)
// console.log(combined);

// [1,2,3,4,5,1,4,5,6]

// const sliced = nums.slice(1, 5); // [2,3]
// console.log(combined.join("-")); // "1-2-3-4-5-1-4-5-6"

// // Iteration
// nums= [1,2,3,4,5];
// for(int i =0; i< nums.length; i++){
//     print(nums[i]);
// }
// nums.forEach(n => console.log("forEach:", n));
// const squares = nums.map(n => n * n); // transforming

// const even = nums.filter(n => n % 2 === 0);  //searching
// const nums = [1, 2, 3, 4, 5, 6];
// nums.length; // 6

// const evenNums = nums.filter((n) => n % 2 === 0);
// console.log(evenNums);   // [2, 4, 6]

// const total = nums.reduce((a,b)=>a+b,0); // aggregating
// const total = nums.reduce((a, b) => a + b, 0);
// console.log(total);

// const nums = [1, 6, 2, 11];
// console.log(nums.find(n=>n>1)) ; // return first match  or undefined
// console.log(nums.findIndex(n=>n>2)); // return first match  or -1

// console.log(nums.some(n=>n>5), nums.every(n=>n<10));  // boolean checks

// // Destructuring + Spread
// const [first, second, ...rest] = [56,4,7];
// console.log(first, second, rest);
// const merged = [...nums, ...arr2];

// // Array utilities
// const nums = [1, 2, 3];
// console.log(Array.from("Satya")) // ["S","a","t","y","a"]
// console.log(Array.from("123", n => n * 2)); // [2,4,6]
// console.log(Array.from("123", n => n * 2)); // [2,4,6]

// console.log(Array.isArray(nums));
// console.log(Array.isArray(combined));

// Strings
// console.log(str.length); //25
// str.length;

// console.log(str.charAt(2))

// const text = "JavaScript";
// // text.includes(a); //3

// console.log(text.slice(3,-1));       // "Java"
// console.log(text.substring(3,-1));  // "Script"
// console.log(text.substr(2,-1));
//
// console.log(text.slice(1,5))
// console.log(text.substring(5,-9) )  // "Script")

// console.log(str.length, str.charAt(2), str.indexOf("S"), str.lastIndexOf("c"));
// console.log(str.includes("Rocks"));

// console.log(str.slice(-1,5)) //5-1 = 4
// console.log(str.substring(1,5));
// console.log(str.toLowerCase(), str.toUpperCase());

// console.log(str.trim(), str.trimStart(), str.trimEnd());

// console.log(str.split(" ").length) //
// let str = " JavaScript Rocks Rocks! ";
// console.log(str.replace("Rock","Rules")) //
// console.log(str.replaceAll("Rock", "Rules"));

// console.log(str.split(" "), str.replace("Rocks","Rules"), str.replaceAll("a","@"));
// console.log(str.replace("Rocks","Rules"));

// // Template literals - Backticks ``
// let lang = "JavaScript";
// console.log(`I love ${lang.toUpperCase()}!`);

// String Destructuring
// const [a, b, c] = "hey";
// console.log(a, b, c); // h e y

// Spread Operator with Strings
// const chars = [..."Code"];
// console.log(chars); // ["C","o","d","e"]

// string interpolation example

// console.log(`I love ${lang.toUpperCase()}!`);

// String.fromCharCode() & charCodeAt()
// console.log("A".charCodeAt(0)); // 65
// console.log(String.fromCharCode(65)); // "A"

// ES6+ Features

// let and const

// Block-scoped variables.
// let count = 10;   // can be reassigned
// const PI = 3.14;  // cannot be reassigned

// Arrow Functions
// Short syntax + lexical this.
// function greet() {
//   console.log("Hello");
// }
// const greet = () => console.log("Hello");

// const obj = {
//     name: "Satya",
//     greet: function() {
//         console.log(`Hello, ${this}!`); //satya
//     },
//     greet2 : () => {
//         console.log(`Hello, ${this}!`);  // undefined
//     }

// }
// console.log(obj.greet());
// console.log(obj.greet2());

// const a  = (a = 5) => {

//         console.log(a);
//     }
// a();

// Template Literals

// String with variables using backticks.

// const name = "Satya";
// console.log(`Hello, ${name}!`);

// 4. Destructuring

// Extract values from arrays/objects.

// const [a, b] = [10, 20];
// const { name, age } = { name: "Aarav", age: 24 };

// 5. Spread Operator (...)

// Expands or copies arrays/objects.

// const arr1 = [1,2];
// const arr2 = [...arr1, 3,4]; // [1,2,3,4]

// const obj2 = { ...{a:1}, b:2 }; // {a:1,b:2}

// 6. Rest Parameters

// Collects multiple arguments into an array.

// function sum(...nums) {
//   return nums.reduce((a,b)=>a+b);
// }

// 7. Default Parameters

// Fallback value if nothing passed.

// function greet(name = "Guest") {

//   console.log(`Hello ${name}`);
// }

// 8. Object Shorthand

// If key and variable name are same.

// const age = 25;
// const user = { age }; // instead of { age: age }
// console.log(user);

// 9. Enhanced Object Literals

// Add methods directly, use computed keys.

// const key = "score";
// const student = {
//   name: "Riya",
//   [key]: 95,
//   greet() { console.log("Hi") }
// };

// 10. for...of Loop

// Iterates over iterable items (arrays, strings).

// const arr = [10, 20, 30, 40, 50]
// for (const num of arr) {
//   console.log(num);
// }

// 11. Modules (import/export)

// export:
// export const PI = 3.14;

// import:
// import { PI } from './math.js';

// 12. Classes

// Blueprint for creating objects.

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     console.log(`Hello, I'm ${this.name}`);
//   }
// }

// const p = new Person("Satya");
// p.speak();

// Type.          	Meaning	                                    Example
// Synchronous	    Code runs line by line; next line waits	    Regular functions
// Asynchronous	    Code runs without waiting; continues later	setTimeout, network calls, promises

// console.log("A");
// console.log("B");
// console.log("C");


// console.log("A");
// setTimeout(() => console.log("B"),1000);
// console.log("C");

// Output: A, C, B

// ⏱ setTimeout(), setInterval(), clearTimeout(), clearInterval()
// const timer = setTimeout(() => console.log("Runs once after delay"), 1000);

// const interval = setInterval(() => console.log("Repeats"), 1000);

// clearTimeout(timer);     // stops timeout
// clearInterval(interval); // stops interval

// const fun = () => {
//     let a = 5;
//     const b = setInterval(() => {
//         a = a + 1;
//         console.log(a);
//         if(a == 10){
//             clearInterval(b);
//         }
//     }, 1000);

// }
// fun();

// Callbacks and Callback Hell

// Callback: A function passed into another function.

// function fetchData(fun) {
//   setTimeout(() => fun("Data received"), 1000);
// }
// fetchData(func);

// const func = ()=> {console.log}

// Callback Hell (nested callbacks):


// callback hell easy example





// const getUser = (callback) => {
//   setTimeout(() => {
//     console.log("Got user");
//     callback();
//   }, 1000);
// };

// const getPosts = (callback) => {
//   setTimeout(() => {
//     console.log("Got posts");
//     callback();
//   }, 1000);
// };

// const getComments = (callback) => {
//   setTimeout(() => {
//     console.log("Got comments");
//     callback();
//   }, 1000);
// };



// Promises

// A promise represents a future result.
// A Promise in JavaScript is an object that represents the result of an asynchronous operation
// — either it completes successfully (resolved) 
// - or fails (rejected)
// — and allows you to run code when the result is available.

// const promise = new Promise((resolve, reject) => {
//     try {
//         fetch("https://jsonplaceholder.typicode.com/users/1") // resolve
//         .then((response) => response.json())
//         .then((data) => resolve(data))
//         .catch((error) => reject(error));

//     } finally {
//         console.log("Done");
//     }
// });

// Promise States


// console.log("A");
// const B = fetch("https://jsonplaceholder.typicode.com/users/1")
// console.log(B);
// console.log("C");

// Pending
// Fulfilled (resolved)
// Rejected

// .then() .catch() .finally()

// promise
//   .then(res => console.log(res))
//   .catch(err => console.log(err))
//   .finally(() => console.log("Done"));

// promise example
// function getUser() {
//   return fetch("https://jsonplaceholder.typicode.com/users/1") // API request
//     .then(response => {
//       if (!response.ok) {
//         throw new Error("Network error!");
//       }
//       return response.json(); // convert response to JSON
//     });
// }

// promise using constructor
// function fetchUserData() {
//   return new Promise((resolve, reject) => {
//     fetch("https://jsonplaceholder.typicode.com/user/1")
//       .then(response => {
//         if (!response.ok) {
//           reject("Network error: " + response.status);
//         }
//         return response.json();
//       })
//       .then(data => resolve(data))
//       .catch(error => reject(error));
//   });
// }

// // // // Consuming the Promise
// fetchUserData()
//   .then(result => console.log("User Data:", result))
//   .catch(error => console.log("Error:", error))
//   .finally(() => console.log("Request Completed 🚀"));

// // // // Using the promise
// getUser()
//   .then(data => console.log("User Data:", data))
//   .catch(err => console.log("Error:", err.message))
//   .finally(() => console.log("Request Completed"));

// Promise Utility Methods
// Method	Behavior
// Promise.all()	Waits for all promises → fails if any fails // returns a single promise
// Promise.race()	Returns first completed (success or fail) // returns a single promise
// Promise.allSettled()	Returns result of all, even failures. // return array of promises
// Promise.any()	Returns first successful; ignores failures // returns a single promise

// Example:

// const p1 = new Promise(resolve => setTimeout(() => resolve("P1 done"), 1000));
// const p2 = new Promise(resolve => setTimeout(() => resolve("P2 done"), 2000));
// const p3 = new Promise((resolve, reject) => setTimeout(() => reject("P3 done"), 500));

// Promise.all([p1, p2, p3])
//   .then(result => console.log("All success:", result))
//   .catch(error => console.log("Failed:", error));

  // All success: ["P1 done", "P2 done", "P3 done"]

// Promise.race([p1, p2, p3])
//   .then(result => console.log("Winner:", result))
//   .catch(error => console.log("Winner failed:", error));

// Winner: P3 done

// Promise.allSettled([p1, p2, p3])
//   .then(result => console.log(result));

// [
//   { status: "fulfilled", value: "P1 done" },
//   { status: "fulfilled", value: "P2 done" },
//   { status: "rejected", reason: "P3 failed" }
// ]

// Promise.any([p1, p2, p3])
//   .then(result => console.log("First success:", result))
//   .catch(error => console.log("All failed:", error));

// First success: P1 done

// Promise.all([p1, p2]);
// Promise.race([p1, p2]);
// Promise.allSettled([p1, p2]);
// Promise.any([p1, p2]);

// Async/Await

// Cleaner way to handle promises.

// async function fetchData() {
//   return "Data";
// }

// Use await to pause until promise resolves:

// async function run() {
//     try {
//         const result = await fetch("https://jsonplaceholder.typicode.com/post/1");
//         const finalResult = await result.json();
//         console.log(finalResult);
//     } catch (error) {
//         console.log(error);
//     }
// }
// run();

// Error Handling (try...catch)
// async function run() {
//   try {
//     const data = await fetchData();
//     console.log(data);
//   } catch (err) {
//     console.log("Error:", err);
//   }
// }

// // Async/Await
// Declaring a function with async makes it return a Promise automatically.
// The await keyword pauses the function execution until the Promise is resolved.
// async function loadData(){
// //   try{
//     let data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     console.log("Awaited:", data);
// //   }catch(err){ console.error(err); }
// }
// loadData();

// Event Loop & Execution Context

// Execution Context
// Where JS code runs.

// Types:
// Global Execution Context
// Created first.
// Contains global variables, functions, and window (in browser).

// Function Execution Context
// Created each time a function runs.
// Has its own variables, arguments, and this.

// Call Stack
// A stack -----  where JS keeps track of what function is currently running.
// Functions get pushed when called and popped when finished.

// function a(){ b(); }
// function b(){ console.log("Hi"); }
// a(); // a → b → log → pop → pop

// Web APIs
// Browser-provided features (NOT part of JavaScript).
// Examples: setTimeout(), DOM, fetch(), localStorage.
// JS sends async tasks here so they can run in background.

// Callback Queue (Task Queue)
// Stores completed async callbacks like:
// setTimeout, setInterval, DOM events
// Sent to execution only when call stack is empty.

// Microtask Queue
// Higher priority queue.
// Stores:
// Promise.then()
// async/await resolved tasks
// Always processed before callback queue.

// Event Loop

// The traffic controller.
// Keeps checking:

// Is the Call Stack empty?
// If yes → run tasks from Microtask Queue first.
// Then move tasks from Callback Queue.

// // Quick Example
// console.log("Start");
// setTimeout(() => console.log("Timeout"), 0);
// Promise.resolve().then(() => console.log("Promise"));
// console.log("End");

// Output:
// Start
// End
// Promise
// Timeout

// Because microtasks (Promise) run before callback queue (setTimeout).

// DOM Manipulation

// define: The DOM (Document Object Model) is a tree-like representation of your webpage’s HTML structure.
// Every HTML element becomes a node (or object) that JS can access and manipulate.
// JavaScript can use the DOM to:
// Change content
// Modify styles
// Add/remove elements
// Handle user events (clicks, inputs, etc.)

//  <body>
//   <h1 id="title">Hello</h1>
//   <button class="btn" onclick="handleClick()">Click</button>
//   <script>
// const title = document.getElementById("title");
// const btn = document.querySelector(".btn");

//     // Modify
// title.innerHTML =<h1>"JS DOM Demo"</h1>;
//     title.style.color = "blue";

//     // Attributes
// title.setAttribute("data-info", "heading");
// console.log(title.getAttribute("data-info"));

//     // ClassList
//     title.classList.add("highlight");
//     console.log(title.classList.contains("highlight"));

//     // Create/Remove elements
// const p = document.createElement("p");
// p.textContent = "Dynamic paragraph";
//     document.body.appendChild(p);
//     // document.body.removeChild(p);

//     // Event handling
//     btn.addEventListener("click", e=>{
//       e.preventDefault();
//       alert("Button clicked!");
//       console.log("Event target:", e.target);
//     });
//   </script>
// </body>

// Selecting Elements
// JavaScript provides several DOM methods to select elements.
// getElementById()

// Selects one element by its unique id.
// const title = document.getElementById("title");
// console.log(title.innerText);

// getElementsByClassName()
// Selects all elements with a given class name (returns an HTMLCollection).

// const paragraphs = document.getElementsByClassName("text");
// console.log(paragraphs[0].innerText);

// getElementsByTagName()
// Selects elements by their tag name (returns an HTMLCollection).
// const divs = document.getElementsByTagName("div");

// querySelector()
// Selects the first matching element (CSS selector syntax).
// const heading = document.querySelector("#title");
// const paragraph = document.querySelector(".text");

// querySelectorAll()
// Selects all matching elements (returns a NodeList, can use .forEach()).
// const allTexts = document.querySelectorAll(".text");
// allTexts.forEach(el => console.log(el.innerText));

// innerHTML, innerText, textContent
// el.innerHTML = "<b>Hi</b>"
// el.innerText = "Hello"
// el.textContent = "Hi"

// setAttribute(), getAttribute(), removeAttribute()
// const link = document.querySelector("a");

// link.setAttribute("href", "https://openai.com");
// console.log(link.getAttribute("href"));
// link.removeAttribute("target");

// classList methods
// box.classList.add("active");
// box.classList.remove("hidden");
// box.classList.toggle("highlight"); // adds if missing, removes if present
// console.log(box.classList.contains("active"));

// style property
// const title = document.getElementById("title");
// title.style.color = "blue";
// title.style.fontSize = "24px";
// title.style.backgroundColor = "lightgray";

// createElement()
// const newDiv = document.createElement("div");
// newDiv.innerText = "I’m new here!";

// createTextNode()
// const text = document.createTextNode("Plain text node");
// newDiv.appendChild(text);

// appendChild()
// document.body.appendChild(newDiv);

// insertBefore()
// const parent = document.getElementById("container");
// const reference = document.getElementById("reference");
// parent.insertBefore(newDiv, reference);

// removeChild()
// parent.removeChild(reference);

// replaceChild()
// const anotherDiv = document.createElement("div");
// anotherDiv.innerText = "I replaced the reference div!";
// parent.replaceChild(anotherDiv, reference);

// removeChild() and .remove()
// const parent = document.getElementById("container");
// const child = document.getElementById("old");
// parent.removeChild(child);
// // or simply
// child.remove();

// addEventListener() & removeEventListener()
// function greet() {
//   alert("Button clicked!");
// }

// const btn = document.querySelector("button");
// btn.addEventListener("click", greet);

// // remove it
// btn.removeEventListener("click", greet);

// When an event occurs, a special event object is passed automatically.
// document.querySelector("button").addEventListener("click", (e) => {
//   console.log("Event Target:", e.target);
//   e.preventDefault(); // stops default action (like form submission)
//   console.log("Event Type:", e.type);
//   console.log("Event Timestamp:", e.timeStamp);
// });

// Event Bubbling (Default)
// When you click an element, the event triggers on that element, then bubbles UP to its parent, grandparent, etc. Order: Child -> Parent -> Grandparent

// Event Capturing
// The reverse of bubbling. The event goes DOWN from the root to the target. Order: Grandparent -> Parent -> Child

// Event Delegation
// A technique where you add one event listener to a parent element to manage events for all its children (even those added dynamically in the future).

// e.target → element that triggered the event
// e.preventDefault() → stops default browser behavior
// e.stopPropagation() → prevents bubbling to parent elements

// document.querySelector("#parent").addEventListener("click", () => console.log("Parent clicked!"));
// document.querySelector("#child").addEventListener("click", () => console.log("Child clicked!"));
// // Child clicked!
// Parent clicked!

// Event Delegation
// Instead of adding event listeners to multiple child elements,
// add a single listener to their parent and use event.target to identify the clicked child.
// document.getElementById("menu").addEventListener("click", (e) => {
//   if (e.target.tagName === "LI") {
//     console.log("You clicked:", e.target.innerText);
//   }
// });

// Browser Storage & APIs - Persistent storage options in the browser.
// // localStorage
// localStorage.setItem("name", "Alice");
// console.log(localStorage.getItem("name"));
// localStorage.removeItem("name");
// localStorage.clear();

// // sessionStorage works same way
// sessionStorage.setItem("token", "123abc");
// console.log(sessionStorage.getItem("token")); // 123abc

// sessionStorage.removeItem("token");
// sessionStorage.clear();

// // Cookies (basic)
// document.cookie = "user=John; max-age=3600";

// // JSON
// const obj = {name:"JS"};
// const json = JSON.stringify(obj);
// console.log(json); // '{"name":"JS"}'
// console.log(JSON.parse(json));

// // Fetch API

// GET, POST, PUT, DELETE requests

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.error("Fetch error:", err));

// try {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   if (!response.ok) {
//     throw new Error("Network response was not ok " + response.statusText);
//   }
//   const data = await response.json();
//   console.log("Fetched:", data);
// } catch (err) {
//   console.error("Error:", err);
// } finally {
//     console.log("Fetch attempt finished");
//   }

//type error example
// try {
//   cons result = nonExistentFunction();
//  console.log(resul) // This will throw a ReferenceError
// } catch (err) {
//   console.error("Caught an error:", err.name, err.message);
//

// Headers and Options
// You can include headers like authorization tokens, content types, etc.

// fetch("https://api.example.com/data", {
//   method: "GET",
//   headers: {
//     "Authorization": "Bearer 123abc",
//     "Accept": "application/json"
//   }
// })
//   .then(res => res.json())
//   .then(data => console.log(data));

// Error Handling
// try {
//   let x = y + 2; // ReferenceError
// } catch (err) {
//   console.error("Caught:", err.name, err.message);
// } finally {
//   console.log("Always runs");
// }

// // Custom error
// function divide(a,b){
//   if(b===0) throw new Error("Cannot divide by zero");
//   return a/b;
// }
// try { console.log(divide(4,0)); } catch(e){ console.error(e.message); }

//Advanced Concepts

// Understand prototypes, classes, and performance patterns.
// // Prototype
// function Person(name){ this.name = name; }

// Person.prototype.sayHi = function(){ console.log("Hi", this.name); }; //constructor function

// const p1 = new Person("Bob");
// p1.sayHi();

// // Class (syntactic sugar)
// class Car {
//   constructor(brand){ this.brand = brand; }
//   get info(){ return `Car: ${this.brand}`; }
//   static category(){ return "Vehicle"; }
// }

// Inheritance
// class SuperCar extends Car {
//   constructor(brand,speed){ super(brand); this.speed = speed; }
//   describe(){ console.log(`${this.brand} runs at ${this.speed}km/h`); }
// }
// const ferrari = new SuperCar("Ferrari", 300);
// ferrari.describe();

// class User {
//   constructor(name) {
//     this._name = name; // underscore = internal variable
//   }
//   get name() {
//     return this._name.toUpperCase();
//   }
//   set name(value) {
//     if (value.length < 3) console.log("Name too short!");
//     else this._name = value;
//   }
// }

// static methods
// class MathHelper {
//   static add(a, b) {
//     return a + b;
//   }
// }

// console.log(MathHelper.add(2, 3)); // 5
// const user = new User("Ravi");
// console.log(user.name); // RAVI
// user.name = "Al"; // Name too short!
// user.name = "Alex";
// console.log(user.name); // ALEX

// // Debounce & Throttle (concept)
// Debouncing ensures a function is only called after a certain period of inactivity.
// function debounce(func, delay) {
//   let timer;
//   return function(...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => func.apply(this, args), delay);
//   };
// }

// function searchQuery() {
//   console.log("Fetching data...");
// }

// const debouncedSearch = debounce(searchQuery, 1000);

// // Simulate rapid typing
// debouncedSearch();
// debouncedSearch();
// debouncedSearch();

// throttling :
// function throttle(func, limit) {
//   let inThrottle;
//   return function(...args) {
//     if (!inThrottle) {
//       func.apply(this, args);
//       inThrottle = true;
//       setTimeout(() => inThrottle = false, limit);
//     }
//   };
// }

// function logScroll() {
//   console.log("Scrolled!");
// }

// const throttledScroll = throttle(logScroll, 1000);

// window.addEventListener("scroll", throttledScroll);

// Prototypes & Prototypal Inheritance

// Every JavaScript object has a hidden property called [[Prototype]] that allows it to inherit methods and properties from another object.

// const animal = {
//   sound() { console.log("Some sound"); }
// };

// const dog = Object.create(animal);
// dog.sound(); // inherited → "Some sound"

// 🏗️ Constructor Functions

// Used to create multiple objects with the same structure before ES6 classes.

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.greet = function() {
//   console.log(`Hello, I'm ${this.name}`);
// };

// const p1 = new Person("Satya");
// p1.greet();

// 🧱 Classes (ES6)

// A modern and cleaner syntax but still uses prototypes under the hood.

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     console.log(`Hello, I'm ${this.name}`);
//   }
// }

// 🪜 Inheritance (extends, super)

// Classes can inherit from another class using extends.
// super() calls the parent constructor.

// class Animal {
//   constructor(name) { this.name = name; }
//   sound() { console.log("Animal sound"); }
// }

// class Dog extends Animal {
//   constructor(name) {
//     super(name); // calls parent constructor
//   }
//   sound() { console.log("Bark!"); }
// }

// const d = new Dog("Tommy");
// d.sound();

// 🎭 Getters & Setters

// Used to control access to object properties.

// class User {
//   constructor(name) {
//     this._name = name;
//   }
//   get name() {
//     return this._name.toUpperCase();
//   }
//   set name(value) {
//     this._name = value;
//   }
// }

// const u = new User("sara");
// console.log(u.name); // SARA
// u.name = "Mia";

// 🧩 Static Methods

// Methods that belong to the class itself, not instances.

class MathUtility {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtility.add(5, 3)); // Accessible without creating object

// ⏳ Debouncing

// Executes a function after a delay, 
// only if no new call happens during that delay.

// Used for: search input, resize event.

function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => console.log("Hi"), 5000);
  };
}

// const log = debounce(() => console.log("Typing stopped"), 500);

// 🚦 Throttling

// Ensures a function runs at most once in a fixed time interval.

// Used for: scroll events, mouse movement.

// function throttle(fn, delay) {
//   let active = false;
//   return function(...args) {
//     if (!active) {
//       fn(...args);
//       active = true;
//       setTimeout(() => active = false, delay);
//     }
//   };
// }

// const throttledLog = throttle(() => console.log("Scrolling..."), 1000);

// 🔄 Memoization

// Caches function results to avoid redundant calculations.

// function memoize(fn) {
//   const cache = {};
//   return function(...args) {
//     const key = JSON.stringify(args);
//     if (cache[key]) return cache[key];
//     const result = fn(...args);
//     cache[key] = result;
//     return result;
//   };
// }

// const factorial = memoize(n => n <= 1 ? 1 : n * factorial(n - 1));
// console.log(factorial(5)); // Cached for future calls
