import React from "react";

function Login(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    props.onLogin(email, password);
  }


  return (
    <>
      <section className="auth">
        <h2 className="auth__title">Вход</h2>
        <form className="auth__form" onSubmit={handleSubmit}>
          <input
            className="auth__form-input"
            placeholder="Email"
            onChange={handleEmailChange}
            value={email || ""}
            name="email"
            type="email"
            required
            autoComplete="username"
          ></input>
          <input
            className="auth__form-input"
            placeholder="Пароль"
            onChange={handlePasswordChange}
            value={password || ""}
            name="password"
            type="password"
            required
            autoComplete="current-password"
          ></input>

          <button className="auth__form-button" type="submit">
            Войти
          </button>
        </form>
      </section>
    </>
  );
}

export default Login;
