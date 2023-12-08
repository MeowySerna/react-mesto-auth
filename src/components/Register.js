import React from "react";
import { Link } from "react-router-dom";

function Register(props) {
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
    props.onRegister(email, password);
  }

  return (
    <>
      <section className="auth">
        <h2 className="auth__title">Регистрация</h2>
        <form className="auth__form" onSubmit={handleSubmit}>
          <input
            className="auth__form-input"
            placeholder="Email"
            onChange={handleEmailChange}
            value={email || ""}
            name="email"
            type="email"
            autoComplete="username"
            required
          ></input>
          <input
            className="auth__form-input"
            placeholder="Пароль"
            onChange={handlePasswordChange}
            value={password || ""}
            name="password"
            type="password"
            autoComplete="current-password"
            required
          ></input>

          <button className="auth__form-button" type="submit">
            Зарегистрироваться
          </button>
          <div className="auth__signup">
            <p className="auth__signup-text">
              Уже зарегистрированы?{" "}
              <Link className='auth__signup-link' to='sign-in'>Войти</Link>
            </p>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
