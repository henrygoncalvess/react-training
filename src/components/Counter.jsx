import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const styleButton = {
    padding: "10px 15px",
    fontSize: "1.5em",
    margin: "0px 5px",
  };

  return (
    <div style={{ textAlign: "center" }}>
      <p style={{ fontSize: "3em", margin: "10px" }}>{count}</p>
      <button style={styleButton} onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button style={styleButton} onClick={() => setCount(0)}>
        Reset
      </button>
      <button style={styleButton} onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
