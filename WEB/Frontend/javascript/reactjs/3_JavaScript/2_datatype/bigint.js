// bigint_tutorial.js
// JavaScript BigInt Tutorial

console.log("=== JavaScript BigInt Tutorial ===\n");

// 1️⃣ What is BigInt?
// BigInt allows integers larger than Number.MAX_SAFE_INTEGER
const bigNumber = 9007199254740991n; // note the 'n' at the end
console.log("BigInt value:", bigNumber);

// 2️⃣ Creating BigInt
const fromLiteral = 123456789012345678901234567890n; // literal
const fromNumber = BigInt(1234567890);               // from number
const fromString = BigInt("98765432109876543210");  // from string
console.log("fromLiteral:", fromLiteral);
console.log("fromNumber:", fromNumber);
console.log("fromString:", fromString);

// 3️⃣ Operations
const a = 10n;
const b = 3n;

console.log("\n--- Arithmetic ---");
console.log("Addition:", a + b);      // 13n
console.log("Subtraction:", a - b);   // 7n
console.log("Multiplication:", a * b);// 30n
console.log("Division:", a / b);      // 3n (floor division)
console.log("Remainder:", a % b);     // 1n
console.log("Exponent:", a ** b);     // 1000n

// 4️⃣ Comparisons
console.log("\n--- Comparisons ---");
console.log("a === b:", a === b);      // false
console.log("a > b:", a > b);          // true
console.log("a < b:", a < b);          // false

// 5️⃣ Mixing with Number
console.log("\n--- Mixing with Number ---");
const num = 10;
// console.log(a + num); // ❌ TypeError: Cannot mix BigInt and Number
console.log(a + BigInt(num));          // ✅ 20n

// 6️⃣ Bitwise Operations
console.log("\n--- Bitwise ---");
const x = 5n;  // 101
const y = 3n;  // 011
console.log("x & y:", x & y);  // 1n
console.log("x | y:", x | y);  // 7n
console.log("x ^ y:", x ^ y);  // 6n
console.log("~x:", ~x);         // -6n
console.log("x << 1:", x << 1); // 10n
console.log("x >> 1:", x >> 1); // 2n

// 7️⃣ Converting BigInt to String / Number
const big = 12345678901234567890n;
console.log("\n--- Conversion ---");
console.log("toString:", big.toString());
console.log("toNumber:", Number(big)); // may lose precision if too large

// 8️⃣ JSON & BigInt
console.log("\n--- JSON ---");
const obj = { id: 1n, value: big };
try {
  console.log(JSON.stringify(obj)); // ❌ TypeError
} catch (e) {
  console.log("JSON.stringify error:", e.message);
}
// Solution: convert to string
const objSafe = { id: obj.id.toString(), value: obj.value.toString() };
console.log("Safe JSON:", JSON.stringify(objSafe));

// 9️⃣ React Use Case
// BigInt is rarely used in React state, but sometimes needed for huge IDs or counters
// Example:
function Example() {
  const [count, setCount] = React.useState(0n);

  const increment = () => setCount(prev => prev + 1n);

  return (
    <div>
      <p>Count: {count.toString()}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

// 1️⃣0️⃣ Key Takeaways
console.log("\n--- Takeaways ---");
console.log("1. BigInt is for integers larger than Number.MAX_SAFE_INTEGER");
console.log("2. Always append 'n' to literals or use BigInt()");
console.log("3. Cannot mix BigInt and Number directly");
console.log("4. JSON does not support BigInt natively, convert to string");
console.log("5. Rarely needed in React, mostly for very large numbers or IDs");