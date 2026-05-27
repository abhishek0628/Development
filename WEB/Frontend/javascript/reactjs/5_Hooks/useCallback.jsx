// File: App.jsx
import React, { useState, useCallback, memo } from "react";

// Child component that only re-renders if props change
const Button = memo(({ handleClick, label }) => {
  console.log(`Rendering Button: ${label}`);
  return <button onClick={handleClick}>{label}</button>;
});

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // useCallback prevents this function from being recreated on every render
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  // Another useCallback example with dependency
  const logText = useCallback(() => {
    console.log("Current text:", text);
  }, [text]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>useCallback Demo</h1>
      <p>Count: {count}</p>
      <Button handleClick={increment} label="Increment Count" />

      <hr />

      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Type something"
      />
      <Button handleClick={logText} label="Log Text" />
    </div>
  );
}

export default App;