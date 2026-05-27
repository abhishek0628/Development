// undefined_examples.js

console.log("=== UNDEFINED IN JAVASCRIPT ===\n");

// 1️⃣ Declaration without initialization
let a;
console.log(a); // undefined
console.log(typeof a); // "undefined"

// 2️⃣ Accessing missing object properties
const user = { name: "Abhishek", age: 20 };
console.log(user.name);    // "Abhishek"
console.log(user.city);    // undefined

// 3️⃣ Functions without return
function greet(name) {
  console.log(`Hello ${name}`);
}
let result = greet("Abhi");
console.log(result); // undefined

// 4️⃣ Function parameters not passed
function multiply(x, y) {
  return x * y;
}
console.log(multiply(5)); // NaN (y is undefined)
console.log(multiply(5, undefined)); // NaN

// 5️⃣ Arrays with empty slots
const arr = [1,,3]; // missing element at index 1
console.log(arr[1]); // undefined

// 6️⃣ Explicitly assigning undefined (not recommended)
let x = undefined;
console.log(x); // undefined

// 7️⃣ Comparison with undefined
console.log(undefined == null);  // true
console.log(undefined === null); // false

// 8️⃣ React context example
// Imagine a React state or prop is undefined
const state = {
  name: undefined,
  age: 25
};

console.log(state.name || "Default Name"); // "Default Name"

// 9️⃣ Checking if a value is undefined
let val;
if (val === undefined) {
  console.log("val is undefined");
}

// 10️⃣ Summary in comments
/*
- undefined means "value not assigned"
- default value of uninitialized variables
- accessing missing object keys returns undefined
- function without return returns undefined
- be careful in React: undefined in JSX shows nothing
- use optional chaining (obj?.key) to avoid errors with undefined
*/

console.log("\n=== END OF UNDEFINED EXAMPLES ===");