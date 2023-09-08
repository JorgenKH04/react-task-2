import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-div">
      <h2>Counter:</h2>
      <h3>{count}</h3>
      <div>
        <button
          type="button"
          onClick={() => setCount((oldCount) => oldCount + 1)}
        >
          Increment
        </button>
        <button
          type="button"
          onClick={() => setCount((oldCount) => oldCount - 1)}
        >
          Decrement
        </button>
        <button type="button" onClick={() => setCount(0)}>
          Reset counter
        </button>
      </div>
    </div>
  );
}
