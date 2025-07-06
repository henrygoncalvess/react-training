import { button } from "./Button.module.css";

export default function Button({ handleClick, children }) {
  return (
    <button className={button} onClick={handleClick}>
      {children}
    </button>
  );
}
