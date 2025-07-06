import { useState } from "react";
import { passwordSection } from "./PasswordSection.module.css";
import PasswordErrorAlert from "../PasswordErrorAlert";

export default function PasswordSection() {
  const [password, setPassword] = useState("Test");

  const styles = {
    border: "1px solid black",
    margin: "0.5rem 0rem",
    padding: "0.3rem 0.8rem",
    color: "black",
    width: "80%",
  };

  return (
    <div>
      <input
        style={styles}
        className="inputPassword"
        type="text"
        placeholder="your password"
        onChange={(event) => setPassword(event.target.value)}
        value={password}
      />
      {typeof password === "string" && password.length > 0 && (
        <div className={passwordSection}>
          <PasswordErrorAlert password={password} />
        </div>
      )}
    </div>
  );
}
