import React, { useState, useMemo } from "react";

// Child component
const List = React.memo(({ items }) => {
  console.log("List rendered");
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
});

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [numbers] = useState(Array.from({ length: 1000 }, (_, i) => i + 1));

  // 1️⃣ Expensive calculation
  const factorial = useMemo(() => {
    console.log("Calculating factorial");
    const calcFactorial = (n) => (n <= 1 ? 1 : n * calcFactorial(n - 1));
    return calcFactorial(count);
  }, [count]);

  // 2️⃣ Filtering list
  const filteredNumbers = useMemo(() => {
    console.log("Filtering numbers");
    return numbers.filter((n) => n % 2 === 0);
  }, [numbers]);

  // 3️⃣ Prevent unnecessary child renders
  const items = useMemo(() => {
    return filteredNumbers.map((n) => `Number: ${n}`);
  }, [filteredNumbers]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>useMemo Demo</h1>

      <div>
        <h2>Factorial of {count}: {factorial}</h2>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>

      <div>
        <h2>Filter Numbers</h2>
        <input
          placeholder="Type here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <List items={items} />
      </div>
    </div>
  );
}

export default App;