import {
  passwordErrorAlert,
  instructions,
  valid,
  invalid,
} from "./PasswordSection/PasswordSection.module.css";

export default function PasswordErrorAlert({ password }) {
  const classValid = `${passwordErrorAlert} ${valid}`;
  const classInvalid = `${passwordErrorAlert} ${invalid}`;
  return (
    <>
      <p className={`${passwordErrorAlert} ${instructions}`}>
        ATENÇÃO! A senha deve conter no mínimo:
      </p>
      <p className={/[!@#$%^&*.()]/.test(password) ? classValid : classInvalid}>
        &bull; 1 caractere especial{" "}
        <b style={{ fontSize: "1.1em" }}>{"!@#$%^&*.()"}</b>
      </p>
      <p className={/[A-Z]/.test(password) ? classValid : classInvalid}>
        &bull; 1 Letra maiúscula A-Z
      </p>
      <p className={/[a-z]/.test(password) ? classValid : classInvalid}>
        &bull; 1 Letra minúscula a-z
      </p>
      <p className={/[0-9]/.test(password) ? classValid : classInvalid}>
        &bull; 1 Número 0-9
      </p>
      <p className={password.length >= 8 ? classValid : classInvalid}>
        &bull; 8 caracteres
      </p>
    </>
  );
}
