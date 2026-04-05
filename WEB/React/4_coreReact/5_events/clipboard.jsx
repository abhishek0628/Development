import React, { useState } from "react";

function ClipboardDemo() {
  const [pasteData, setPasteData] = useState("");

  // Copy Event
  const handleCopy = (e) => {
    const selectedText = window.getSelection().toString();
    console.log("Copied:", selectedText);
  };

  // Cut Event
  const handleCut = () => {
    console.log("Text Cut!");
  };

  // Paste Event
  const handlePaste = (e) => {
    const text = e.clipboardData.getData("text");
    console.log("Pasted:", text);
    setPasteData(text);
  };

  // Prevent Paste Example
  const handlePreventPaste = (e) => {
    e.preventDefault();
    alert("Pasting is not allowed here");
  };

  // Modify Paste Example (uppercase)
  const handleUppercasePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text");
    const upper = text.toUpperCase();

    document.execCommand("insertText", false, upper);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Clipboard Events Demo</h2>

      {/* Copy */}
      <div>
        <p onCopy={handleCopy}>
          Try copying this text. Open console to see result.
        </p>
      </div>

      {/* Cut */}
      <div>
        <input
          type="text"
          defaultValue="Cut this text"
          onCut={handleCut}
        />
      </div>

      {/* Paste */}
      <div>
        <input
          type="text"
          placeholder="Paste something here"
          onPaste={handlePaste}
        />
        <p>Pasted Data: {pasteData}</p>
      </div>

      {/* Prevent Paste */}
      <div>
        <input
          type="text"
          placeholder="Paste disabled here"
          onPaste={handlePreventPaste}
        />
      </div>

      {/* Modify Paste */}
      <div>
        <input
          type="text"
          placeholder="Paste converts to UPPERCASE"
          onPaste={handleUppercasePaste}
        />
      </div>
    </div>
  );
}

export default ClipboardDemo;