import { useState } from "react";
import PasswordErrorAlert from "./PasswordErrorAlert";

export default function PasswordSection() {
  const [password, setPassword] = useState("Test");

  return (
    <div>
      <input
        className="inputPassword"
        type="text"
        placeholder="your password"
        onChange={(event) => setPassword(event.target.value)}
        value={password}
      />
      {typeof password === "string" && password.length > 0 && (
        <div className="passwordSection">
          <PasswordErrorAlert password={password} />
        </div>
      )}
    </div>
  );
}
