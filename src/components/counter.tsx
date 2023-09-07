import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount((oldCount) => oldCount + 1);
  }

  function decrementCount() {
    setCount((oldCount) => oldCount - 1);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <>
      <h2>Counter:</h2>
      <h3>{count}</h3>
      <div>
        <button type="button" onClick={incrementCount}>
          Increment
        </button>
        <button type="button" onClick={decrementCount}>
          Decrement
        </button>
        <button type="button" onClick={resetCount}>
          Reset counter
        </button>
      </div>
    </>
  );
}
