// File: UseRefExamples.jsx
import { useRef, useState, useEffect } from "react";

function UseRefExamples() {
  // 1️⃣ DOM Reference
  const inputRef = useRef();

  // 2️⃣ Persistent value without re-render
  const clickCountRef = useRef(0);

  // 3️⃣ Tracking previous state
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0);

  // 4️⃣ Timer example
  const timerRef = useRef();

  // Focus input on mount
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Track previous count
  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  // Start a timer
  const startTimer = () => {
    timerRef.current = setInterval(() => {
      console.log("Timer running:", new Date().toLocaleTimeString());
    }, 1000);
  };

  // Stop the timer
  const stopTimer = () => {
    clearInterval(timerRef.current);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>useRef Examples</h2>

      {/* 1️⃣ DOM ref */}
      <div>
        <h3>1. DOM Reference (Focus Input)</h3>
        <input ref={inputRef} placeholder="I am focused on load" />
      </div>

      <hr />

      {/* 2️⃣ Persistent value */}
      <div>
        <h3>2. Persistent Value (Click Count)</h3>
        <button
          onClick={() => {
            clickCountRef.current += 1;
            console.log("Button clicked", clickCountRef.current, "times");
          }}
        >
          Click Me
        </button>
      </div>

      <hr />

      {/* 3️⃣ Previous state */}
      <div>
        <h3>3. Previous State</h3>
        <p>
          Current Count: {count}, Previous Count: {prevCountRef.current}
        </p>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
      </div>

      <hr />

      {/* 4️⃣ Timer */}
      <div>
        <h3>4. Timer with useRef</h3>
        <button onClick={startTimer}>Start Timer</button>
        <button onClick={stopTimer}>Stop Timer</button>
      </div>
    </div>
  );
}

export default UseRefExamples;