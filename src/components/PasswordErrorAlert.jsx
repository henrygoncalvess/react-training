export default function PasswordErrorAlert({ password }) {
  const valid = "passwordErrorAlert valid";
  const invalid = "passwordErrorAlert invalid";
  return (
    <>
      <p className="passwordErrorAlert instructions">
        ATENÇÃO! A senha deve conter no mínimo:
      </p>
      <p className={/[!@#$%^&*.()]/.test(password) ? valid : invalid}>
        &bull; 1 caractere especial{" "}
        <b style={{ fontSize: "1.1em" }}>{"!@#$%^&*.()"}</b>
      </p>
      <p className={/[A-Z]/.test(password) ? valid : invalid}>
        &bull; 1 Letra maiúscula A-Z
      </p>
      <p className={/[a-z]/.test(password) ? valid : invalid}>
        &bull; 1 Letra minúscula a-z
      </p>
      <p className={/[0-9]/.test(password) ? valid : invalid}>
        &bull; 1 Número 0-9
      </p>
      <p className={password.length >= 8 ? valid : invalid}>
        &bull; 8 caracteres
      </p>
    </>
  );
}
