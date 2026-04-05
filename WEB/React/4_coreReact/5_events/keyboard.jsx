// File: KeyboardEventsDemo.jsx
import React, { useState } from "react";

function KeyboardEventsDemo() {
  // KeyDown example
  const [keyDown, setKeyDown] = useState("");
  const handleKeyDown = (e) => {
    setKeyDown(e.key);
  };

  // KeyUp example
  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      alert("You pressed Enter!");
    }
  };

  // Ctrl+S example
  const handleCtrlS = (e) => {
    if (e.ctrlKey && e.key === "s") {
      e.preventDefault();
      alert("Ctrl + S detected!");
    }
  };

  // Arrow key navigation
  const [position, setPosition] = useState(0);
  const handleArrow = (e) => {
    if (e.key === "ArrowUp") setPosition((p) => p + 1);
    if (e.key === "ArrowDown") setPosition((p) => p - 1);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>React Keyboard Events Demo</h2>

      {/* KeyDown */}
      <div>
        <h3>onKeyDown</h3>
        <input
          type="text"
          placeholder="Type here for KeyDown..."
          onKeyDown={(e) => {
            handleKeyDown(e);
            handleCtrlS(e);
            handleArrow(e);
          }}
        />
        <p>Last key pressed: {keyDown}</p>
        <p>Arrow position: {position}</p>
      </div>

      {/* KeyUp */}
      <div>
        <h3>onKeyUp</h3>
        <input
          type="text"
          placeholder="Press Enter for KeyUp..."
          onKeyUp={handleKeyUp}
        />
      </div>

      {/* KeyPress (legacy) */}
      <div>
        <h3>onKeyPress (legacy)</h3>
        <input
          type="text"
          placeholder="Type printable characters..."
          onKeyPress={(e) => console.log(`Character pressed: ${e.key}`)}
        />
        <p>Check console for output</p>
      </div>
    </div>
  );
}

export default KeyboardEventsDemo;