// string_cheatsheet.js

// 1️⃣ Creating Strings
const singleQuote = 'Hello';
const doubleQuote = "World";
const templateLiteral = `Hello World!`;
const name = "Abhishek";
const greeting = `Hello ${name}, welcome to React!`;

console.log(singleQuote);       // Hello
console.log(doubleQuote);       // World
console.log(templateLiteral);   // Hello World!
console.log(greeting);          // Hello Abhishek, welcome to React!

// 2️⃣ Concatenation
const firstName = "Abhi";
const lastName = "Kumar";
const fullName1 = firstName + " " + lastName; // old way
const fullName2 = `${firstName} ${lastName}`; // template literals

console.log(fullName1); // Abhi Kumar
console.log(fullName2); // Abhi Kumar

// 3️⃣ Length & Access
const str = "ReactJS";
console.log(str.length);       // 7
console.log(str[0]);           // "R"
console.log(str[str.length-1]); // "S"

// 4️⃣ Useful Methods
const msg = "hello world";

console.log(msg.toUpperCase());       // HELLO WORLD
console.log(msg.toLowerCase());       // hello world
console.log(msg.includes("world"));   // true
console.log(msg.startsWith("he"));    // true
console.log(msg.endsWith("ld"));      // true
console.log(msg.slice(0,5));          // hello
console.log(msg.replace("world","React")); // hello React

// 5️⃣ Splitting & Joining
const sentence = "React is awesome";
const words = sentence.split(" "); // ["React", "is", "awesome"]
const joined = words.join("-");    // React-is-awesome

console.log(words);
console.log(joined);

// 6️⃣ Strings in React JSX Example (pseudo code, can be used in React)
function Greeting({ name }) {
  // dynamically format string
  const msg = `Hello ${name.toUpperCase()}!`;
  return `<h1>${msg}</h1>`; // in React: <h1>{msg}</h1>
}

// Test function
console.log(Greeting({ name: "Abhishek" })); // <h1>Hello ABHISHEK!</h1>

// 7️⃣ String Immutability
let text = "React";
text.replace("R", "r");  // returns new string, original unchanged
console.log(text);        // React

// Correct way to update
text = text.replace("R", "r");
console.log(text);        // react

// 8️⃣ Bonus: Multi-line strings with backticks
const multiLine = `This is
a multi-line
string.`;

console.log(multiLine);