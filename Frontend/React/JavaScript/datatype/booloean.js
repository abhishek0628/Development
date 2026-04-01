// boolean-demo.js
// Everything you need to know about Booleans in JS & React

// 1️⃣ Boolean Values
let isLoggedIn = true;
let hasAccess = false;

console.log("Is logged in:", isLoggedIn);  // true
console.log("Has access:", hasAccess);     // false

// 2️⃣ Boolean from expressions
let age = 20;
let canVote = age >= 18; // true
console.log("Can vote:", canVote);

// 3️⃣ Truthy and Falsy Values
// JS automatically converts some values to Boolean
const values = [0, 1, "", "Hello", null, undefined, [], {}, NaN];

values.forEach(val => {
    console.log(val, "is", Boolean(val));
});
/*
Output:
0 is false
1 is true
"" is false
"Hello" is true
null is false
undefined is false
[] is true
{} is true
NaN is false
*/

// 4️⃣ Boolean operations
let a = true;
let b = false;

console.log("a AND b:", a && b); // false
console.log("a OR b:", a || b);  // true
console.log("NOT a:", !a);       // false

// 5️⃣ Conditional rendering in React (JSX style example)
function Greeting(isLoggedIn) {
    return isLoggedIn ? "Welcome back!" : "Please login";
}

console.log(Greeting(true));  // "Welcome back!"
console.log(Greeting(false)); // "Please login"

// 6️⃣ Using Boolean in state (React example)
const { useState } = require("react"); // For demo, requires React installed

function DemoComponent() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Toggle dark mode
    const toggleMode = () => setIsDarkMode(!isDarkMode);

    console.log("Dark mode active?", isDarkMode);
    toggleMode();
    console.log("After toggle:", isDarkMode);
}

// DemoComponent(); // Uncomment in actual React app environment

// 7️⃣ Boolean coercion
console.log(Boolean(""));      // false
console.log(Boolean("React")); // true
console.log(Boolean(0));       // false
console.log(Boolean(123));     // true

// ✅ Key takeaways:
// - Booleans are true/false values
// - Many JS values convert to Boolean in conditions
// - Used for conditional rendering, toggles, flags
// - React state often uses Booleans for UI logic