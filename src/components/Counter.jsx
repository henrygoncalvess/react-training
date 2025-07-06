import { useState } from "react";
import Button from "./Button/Button";

export default function Counter() {
  const [count, setCount] = useState(0);

  const styles = {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    marginTop: "1rem",
  };

  return (
    <div style={styles}>
      <p
        style={{
          flex: "1 1 100%",
          marginBottom: "0.5rem",
          fontSize: "2em",
        }}
      >
        {count}
      </p>
      <Button handleClick={() => setCount(count - 1)}>Decrement</Button>
      <Button handleClick={() => setCount(0)}>Reset</Button>
      <Button handleClick={() => setCount(count + 1)}>Increment</Button>
    </div>
  );
}
