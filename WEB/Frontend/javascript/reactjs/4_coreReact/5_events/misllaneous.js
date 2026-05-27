import React, { useEffect } from "react";

function MiscEventsDemo() {

  // Scroll Event
  const handleScroll = () => {
    console.log("Scrolling...");
  };

  // Context Menu (Right Click)
  const handleRightClick = (e) => {
    e.preventDefault();
    alert("Right click disabled 😈");
  };

  // Resize Event (window)
  useEffect(() => {
    const handleResize = () => {
      console.log("Window resized:", window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup (so your app doesn't slowly collapse)
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        height: "200vh", // force scroll
        padding: "20px",
        border: "2px solid black"
      }}
      onScroll={handleScroll}
      onContextMenu={handleRightClick}
    >
      <h1>Miscellaneous Events Demo</h1>

      <p>Scroll this page to trigger scroll event.</p>
      <p>Right-click anywhere inside this box.</p>
      <p>Resize the window and check console.</p>
    </div>
  );
}

export default MiscEventsDemo;