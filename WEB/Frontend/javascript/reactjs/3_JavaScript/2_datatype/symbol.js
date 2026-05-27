// symbol_demo.js
// Everything about JavaScript Symbol

// 1️⃣ Creating Symbols
const sym1 = Symbol();               // unique symbol
const sym2 = Symbol("id");           // optional description
const sym3 = Symbol("id");           // another symbol with same description

console.log(sym1);  // Symbol()
console.log(sym2);  // Symbol(id)
console.log(sym3);  // Symbol(id)
console.log(sym2 === sym3); // false, always unique

// 2️⃣ Symbols as Object Keys
const user = {
  name: "Abhishek",
  age: 20,
  [sym1]: "secretValue"   // using symbol as key
};

console.log(user.name);       // Abhishek
console.log(user[sym1]);      // secretValue
console.log(Object.keys(user)); // ["name", "age"]
console.log(Object.getOwnPropertySymbols(user)); // [ Symbol() ]

// 3️⃣ Symbols are ignored in for..in loops
for (let key in user) {
  console.log(key); // only "name" and "age"
}

// 4️⃣ Well-known Symbols
const arr = [1,2,3];
console.log(arr[Symbol.iterator]); // function [Symbol.iterator]() { [native code] }

// Example: using Symbol.iterator manually
const it = arr[Symbol.iterator]();
console.log(it.next()); // { value: 1, done: false }
console.log(it.next()); // { value: 2, done: false }

// 5️⃣ React-Relevant Notes
// React rarely needs Symbol directly. Symbols are mostly used internally
// (like React's own keys for elements, context, or type checking)

// Example: using Symbol to make unique action types in Redux/State Management
const ADD = Symbol("ADD");
const REMOVE = Symbol("REMOVE");

function reducer(state, action) {
  switch(action.type) {
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return state.filter(x => x !== action.payload);
    default:
      return state;
  }
}

let state = [];
state = reducer(state, { type: ADD, payload: "Task1" });
console.log(state); // ["Task1"]

// 6️⃣ Summary
/*
- Symbol is a unique primitive
- Can be used as object keys
- Ignored in for..in loops
- Useful for internal keys or constants
- In React, mostly used indirectly (React, Redux, internal libraries)
*/