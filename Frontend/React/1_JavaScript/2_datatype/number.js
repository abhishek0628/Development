// filename: numbers_cheatsheet.js

// ---------------------------
// 1️⃣ Number Basics
// ---------------------------
let age = 25;           // integer
const pi = 3.14159;     // float
const bigNum = 123456789012345678901234567890n; // BigInt (rare)

// Check type
console.log(typeof age); // "number"
console.log(typeof pi);  // "number"
console.log(typeof bigNum); // "bigint"

// ---------------------------
// 2️⃣ Arithmetic Operations
// ---------------------------
const a = 10;
const b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.3333333
console.log(a % b); // 1  (modulus)
console.log(a ** b); // 1000  (exponentiation)

// ---------------------------
// 3️⃣ Number Methods
// ---------------------------
let num = 12.3456;

console.log(num.toFixed(2)); // "12.35"   -> rounds to 2 decimals
console.log(num.toPrecision(4)); // "12.35" -> total digits
console.log(Math.round(num));     // 12
console.log(Math.floor(num));     // 12
console.log(Math.ceil(num));      // 13
console.log(Math.sqrt(16));       // 4
console.log(Math.pow(2, 3));      // 8
console.log(Math.random());       // random number 0-1

// ---------------------------
// 4️⃣ Converting Strings to Numbers
// ---------------------------
const strNum = "42";
console.log(Number(strNum));   // 42
console.log(parseInt(strNum)); // 42
console.log(parseFloat("3.14")); // 3.14

// ---------------------------
// 5️⃣ React Usage Example
// ---------------------------
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // number state

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
}

// Export the component for use
export default Counter;

// ---------------------------
// 6️⃣ Number Tips for React
// ---------------------------
// 1. Keep numeric state in useState as numbers, not strings.
// 2. Use parseInt or parseFloat when reading from input fields.
// 3. Math methods help with rounding, random numbers, or calculations.
// 4. Avoid mutating numbers directly in objects; create new objects.