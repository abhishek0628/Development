// null_demo.js

// ------------------------------
// 1. What is null?
// ------------------------------
// 'null' is an explicit assignment of "no value"
// It's a primitive in JavaScript
let emptyValue = null;

console.log("Value of emptyValue:", emptyValue); // null
console.log("Type of null:", typeof emptyValue); // "object" (weird JS quirk)

// ------------------------------
// 2. null vs undefined
// ------------------------------
// undefined: variable declared but not assigned
let notAssigned;
console.log("Value of notAssigned:", notAssigned); // undefined

// null: explicitly assigned "nothing"
let explicitlyEmpty = null;
console.log("Value of explicitlyEmpty:", explicitlyEmpty); // null

// Comparison
console.log(null == undefined); // true (loose equality)
console.log(null === undefined); // false (strict equality)

// ------------------------------
// 3. Boolean conversion
// ------------------------------
// In conditions, null is falsy
if (null) {
  console.log("This won't run");
} else {
  console.log("null is falsy"); // ✅
}

// ------------------------------
// 4. null in objects and arrays
// ------------------------------
const obj = { name: "Abhi", age: null };
console.log("obj.age:", obj.age); // null

const arr = [1, null, 3];
console.log("arr:", arr); // [1, null, 3]

// ------------------------------
// 5. null in React JSX
// ------------------------------
/*
  In React, you can use null to conditionally render nothing
*/

function Greeting({ name }) {
  // If name is null, render nothing
  return name ? <h1>Hello {name}</h1> : null;
}

// Example usage (conceptual, works in React):
// <Greeting name="Abhishek" />  --> renders <h1>Hello Abhishek</h1>
// <Greeting name={null} />       --> renders nothing

// ------------------------------
// 6. Operations with null
// ------------------------------
console.log("null + 5 =", null + 5); // 5
console.log("null * 10 =", null * 10); // 0
console.log("null == 0 ?", null == 0); // false
console.log("null === 0 ?", null === 0); // false

// ------------------------------
// 7. Pitfalls
// ------------------------------
// Accessing properties of null throws an error
let value = null;
try {
  console.log(value.name);
} catch (err) {
  console.log("Error accessing property of null:", err.message);
}

// Safe access using optional chaining (React-friendly)
let safeAccess = value?.name;
console.log("Safe access with optional chaining:", safeAccess); // undefined

// ------------------------------
// 8. Summary
// ------------------------------
/*
  - null is explicitly "nothing"
  - undefined is implicit "nothing"
  - null is falsy
  - null + number -> number
  - In React, null is used to render nothing conditionally
  - Always be careful accessing properties of null
*/

console.log("Demo finished ✅");