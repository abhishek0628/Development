import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prev=>prev + 1);
    setCount(prev=>prev + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>+2</button>
    </>
  );
}

export default Counter;