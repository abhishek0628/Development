import React from "react";

function DragExample() {
  const handleDragStart = (e) => {
    console.log("Drag Start");
    e.dataTransfer.setData("text/plain", "Dragged Item");
  };

  const handleDrag = () => {
    console.log("Dragging...");
  };

  const handleDragEnd = () => {
    console.log("Drag End");
  };

  const handleDragEnter = () => {
    console.log("Drag Enter Drop Zone");
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // REQUIRED to allow drop
    console.log("Drag Over Drop Zone");
  };

  const handleDragLeave = () => {
    console.log("Drag Leave Drop Zone");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    console.log("Dropped:", data);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>React Drag Events Demo</h2>

      {/* Draggable Element */}
      <div
        draggable
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        style={{
          width: "150px",
          height: "50px",
          backgroundColor: "lightblue",
          textAlign: "center",
          lineHeight: "50px",
          cursor: "grab",
          marginBottom: "30px",
        }}
      >
        Drag Me
      </div>

      {/* Drop Zone */}
      <div
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        style={{
          width: "300px",
          height: "150px",
          border: "2px dashed black",
          textAlign: "center",
          lineHeight: "150px",
        }}
      >
        Drop Here
      </div>
    </div>
  );
}

export default DragExample;