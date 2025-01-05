import { useState } from "react";

const Count = () => {
const [count, setCount] = useState(0);

// Increase count by 1
const increase = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Decrease count by 1
  const decrease = () => {
    setCount(prevCount => prevCount - 1);
  };

  // Reset count to 0
  const clear = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Current count: {count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={clear}>Clear All</button>
    </div>
  );
};

export default Count;
