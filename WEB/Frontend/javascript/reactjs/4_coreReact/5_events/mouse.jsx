import React from "react";

function MouseEventsDemo() {

  const handleClick = () => console.log("onClick: Element clicked!");
  const handleDoubleClick = () => console.log("onDoubleClick: Double clicked!");
  const handleMouseEnter = () => console.log("onMouseEnter: Mouse entered!");
  const handleMouseLeave = () => console.log("onMouseLeave: Mouse left!");
  const handleMouseMove = (e) => console.log(`onMouseMove: Mouse at (${e.clientX}, ${e.clientY})`);
  const handleMouseDown = () => console.log("onMouseDown: Mouse button pressed!");
  const handleMouseUp = () => console.log("onMouseUp: Mouse button released!");

  return (
    <div style={{ padding: "50px" }}>
      <button onClick={handleClick}>Click Me</button>
      <button onDoubleClick={handleDoubleClick}>Double Click Me</button>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        style={{
          width: "300px",
          height: "150px",
          backgroundColor: "lightblue",
          marginTop: "20px",
          textAlign: "center",
          lineHeight: "150px",
          userSelect: "none",
        }}
      >
        Hover, Move or Click Here
      </div>
    </div>
  );
}

export default MouseEventsDemo;