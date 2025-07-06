import { useState } from "react";
import Button from "./Button";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <p>{count}</p>
      <Button handleClick={() => setCount(count - 1)}>Decrement</Button>
      <Button handleClick={() => setCount(0)}>Reset</Button>
      <Button handleClick={() => setCount(count + 1)}>Increment</Button>
    </div>
  );
}
