// Objects : "A collection of key-value pairs".
// {
//     key: "value"
// }

// // Literal : "Fixed value"
// const person = { name: "Alice", age: 22, greet() { console.log("Hi " + this.name); } };
// const a = 10; 
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

// // Add/modify/delete properties

// person.city = "Delhi";
// person.age = 23;
// delete person.city;

// // Methods
// const person = { name: "Alice", age: 22, place: "Delhi" };

// console.log(Object.keys(person));    // ['name','age','place']
// console.log(Object.values(person));  // ['Alice',22,'Delhi']
// console.log(Object.entries(person)); // [['name','Alice'],...]

// // Assign, Freeze, Seal
// const person = { name: "Alice", age: 22 };
// const copy = Object.assign({}, person);
// console.log(copy); // { name: "Alice", age: 22 }
// // console.log(copy.name); // "Alice"
// Object.freeze(copy); // cannot modify

// Object.seal(copy);
// copy.name = "Bob"; // cannot add new 
// console.log(copy); // cannot add/delete but can modify existing

// // Destructuring + Spread + Shorthand
// const person = { name: "Alice", age: 22 };
// // console.log(person.name); // "Alice"
// // const { name, age } = person;
// // console.log(name); // "Alice"

// const updated = { ...person, place: "Delhi" };
// // console.log(updated); // { name: "Alice", age: 22, place: "Delhi" }
// const newPerson = (name, age) => ({ name, age });
// console.log(name, age, updated, newPerson("Bob", 30));


// Arrays
// // Creation
// const nums = [1, 2, 3]; //literal
// console.log(nums[0]); 
// const arr2 = new Array(5); //constructor

// // Mutating
// nums.push(4);
// nums.pop();
// nums.shift();
// nums.unshift(3);
// nums.splice(1, 1, 9); // replace 
// nums.splice(1, 0, 2,3,4); // add 
// nums.splice(1, 2); // delete 2 elements 

// arr = [3, 1, 4, 2];
// nums.sort();
// nums.reverse();

// // Non-mutating
// nums= [1,2,3,4,5];
// nums2 = [1,4,5,6]; // copy
// // const sliced = nums.slice(1, 3); // [2,3]
// const combined = nums.concat(nums2).concat([2,3,4,5]); 
// console.log(combined); 
 // [1,2,3,4,5,1,4,5,6]

// console.log(combined.join("-")); // "1-2-3-4-5-1-4-5-6"

// // Iteration
// nums.forEach(n => console.log("forEach:", n)); 
// const squares = nums.map(n => n * n); // transforming

// const even = nums.filter(n => n % 2 === 0);  //searching
// const nums = [1, 2, 3, 4, 5, 6];
// const evenNums = nums.filter((n) => n % 2 === 0);
// console.log(evenNums);   // [2, 4, 6]

// const total = nums.reduce((a,b)=>a+b,0); // aggregating
// const nums = [1, 2, 3, 4];
// const total = nums.reduce((a, b) => a + b, 0);
// console.log(total);

// console.log(nums.find(n=>n>2)) ; // return first match  or undefined
// console.log(nums.findIndex(n=>n>2)); // return first match  or -1


// console.log(nums.some(n=>n>5), nums.every(n=>n<10));  // boolean checks


// // Destructuring + Spread
// const [first, second, ...rest] = combined;
// const merged = [...nums, ...arr2];

// // Array utilities
// const nums = [1, 2, 3];
// console.log(Array.from("123", "456")); // [2,4,6]
// console.log(Array.isArray(nums));
// console.log(Array.isArray(combined));


// Strings  
// let str = " JavaScript Rocks Rocks! ";

// console.log(str.length, str.charAt(2), str.indexOf("S"), str.lastIndexOf("c"));
// console.log(str.includes("Rocks"));

// console.log(str.slice(-1,5)) //5-1 = 4 
// console.log(str.substring(1,5));
// console.log(str.toLowerCase(), str.toUpperCase());


// console.log(str.trim(), str.trimStart(), str.trimEnd());

// console.log(str.split(" "), str.replace("Rocks","Rules"), str.replaceAll("a","@"));
// console.log(str.replace("Rocks","Rules"));

// // Template literals - Backticks ``
// let lang = "JavaScript";
// console.log(`I love ${lang.toUpperCase()}!`);

// ES6+ Features
// var 
// // let, const already seen

// // Arrow functions : 
// A shorter syntax for writing functions.
// Arrow functions do not have their own this — useful in callbacks.

// const greet = (callback) => `Hello ${callback("Alex")}`;

// console.log(greet(name => name));

// // Destructuring
// const [x,y] = [10,20];
// const {name: n, age: a} = {name:"A", age:30};

// Spread + Rest
// Spread : Expands elements of an array or object.
// const nums1 = [1, 2];
// const nums2 = [3, 4];
// const combined = [...nums1, ...nums2];
// console.log(combined); // [1, 2, 3, 4]
// const obj1 = { a: 1 };
// const obj2 = { b: 2 };
// const merged = { ...obj1, ...obj2 };
// console.log(merged); 

// REST : Collects all remaining arguments into a single array parameter.
// function sum(a,b, ...vals){ return vals.reduce((a,b)=>a+b); }
// console.log(sum(1,2,3,4,5));

// // Object shorthand & enhanced literals
// const city = "Delhi";
// const student = { city, introduce() { console.log("From", this.city); } };
// const key = "score";
// const student = {
//   name: "Emma",
//   // Method shorthand
//   greet() {
//     console.log(`Hello, ${this.name}`);
//   },
//   // Computed property name
//   [key]: 95
// };

// student.greet(); // Hello, Emma
// console.log(student.score); // 95



// // for...of
// for (let num of [1,2,3]) console.log(num);

// // Modules (conceptual)
// export const add = (a,b)=>a+b;
// import { add } from './sprint.js';
// console.log(add(2, 3));


// // Classes : Classes are templates for creating objects — part of object-oriented programming in JS.
// class Animal {
//   constructor(name){ this.name = name; }
//   speak(){ console.log(this.name + " makes sound"); }
//   eat(){ console.log(this.name + " eats"); }
// }
// class Dog extends Animal {
//   speak(){ console.log(this.name + " barks"); }
// }
// new Dog("Buddy").speak();
// new Dog("Buddy").eat();

// Asynchronous JavaScript
// Synchronous
// Code runs line by line — one statement must finish before the next starts.
// It blocks further execution until the current line is done.
// console.log("1");
// console.log("2");
// console.log("3");
// // Output: 1 2 3

// Asynchronous
// Code does not wait for tasks to finish.
// Tasks like API calls, file reading, or timers run in the background while the rest of the code continues.

// console.log("1");
// setTimeout(()=>console.log("2"),2000); // runs after current stack is clear
// console.log("3");
// Output: 1 3 2

// setTimeout(()=>console.log("After 2s"),2000);
// const id = setInterval(()=>console.log("Tick"),1000); //clock
// setTimeout(()=>clearInterval(id),3500);

// // Callbacks
// function fetchData(cb){
//   cb("Data received");
// }
// fetchData(console.log);

// // Callback Hell
// setTimeout(() => {
//   console.log("Task 1");
//   setTimeout(() => {  // what if this fails?
//     console.log("Task 2"); 
//     setTimeout(() => { 
//       console.log("Task 3"); 
//     }, 1000);
//   }, 1000);
// }, 1000);

// // Promises : A Promise represents the eventual completion (or failure) of an asynchronous task.
// const promise = new Promise((resolve,reject)=>{
//       let success = true
//       setTimeout(()=> success?resolve("Done"):reject("Error"),3000);
//     });
//
// Pending → operation in progress
// Resolved → operation successful (resolve())
// Rejected → operation failed (reject())
// promise.then(console.log).catch(console.error).finally(()=>console.log("Finished"));


// // Promise helpers
// Promise.all([Promise.resolve(1),Promise.resolve(2)]).then(console.log);

// Promise.race([
//   new Promise(res => setTimeout(() => res("Fast"), 3000)),
//   new Promise(res => setTimeout(() => res("Slow"), 2000))
// ]).then(console.log); // Slow

// Promise.allSettled([
//  Promise.reject("Failed")
//   Promise.resolve("Done"),
//   Promise.reject("Failed")
// ]).then(console.log);

// Promise.any([
//   Promise.reject("Err1"),
//   Promise.resolve("Success"),
//   Promise.reject("Err2")
// ]).then(console.log).catch(console.error); 


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

// Call Stack → 
// When a function is called, it’s pushed onto the stack.

// When it finishes, it’s popped off.

// JS executes one function at a time — hence it’s single-threaded.

// function first() {
//   console.log("First");
// }

// function second() {
//   first();
//   console.log("Second");
// }

// second();

// call stack ------- 

// → second() pushed
//   → first() pushed
//   → console.log("First") executed
//   → first() popped
// → console.log("Second") executed
// → second() popped
// (Stack empty)



// Web APIs → timers, fetch
// When JS runs in the browser, it has access to features provided by the environment — 
// these are Web APIs, such as:

// setTimeout()
// const data = fetch("https://jsonplaceholder.typicode.com/posts/1")
// DOM events
// console


// Callback Queue → setTimeout callbacks

// After Web APIs finish their tasks, the callbacks (like from setTimeout, click events, etc.) 
// are placed into the Callback Queue.

// // Microtask Queue → Promises
// Event Loop → moves tasks to stack when free

// // Event Loop - js 
// // Definition:
// The Event Loop continuously checks:

// is the head of the Call Stack empty?
// Is the Call Stack empty?
// If yes, are there Microtasks to run?
// If Microtasks done, then process Callbacks (from Callback Queue).
// Repeat forever ♻️

// This mechanism gives JavaScript its asynchronous non-blocking behavior.

// Execution Context (Global and Function)
// Definition:
// Every time JS code runs, it creates an execution context, 
// which defines where and how variables and functions are stored and accessed.


// Global/Function Execution Context
// function outer() {
//   var a = 5;
//   function inner() {
//     let b = 10;
//     console.log(a + b); // inner can access outer variables
//   }
//   console.log(b); // outer cannot access inner variables 
//   inner();
// }

// outer();

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


