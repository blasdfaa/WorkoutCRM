import React, { useContext } from "react";
import AppInput from "../components/UI/input/AppInput";
import AppButton from "../components/UI/button/AppButton";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const login = (event) => {
    event.preventDefault();
    localStorage.setItem("auth", "true");
    setIsAuth(true);
  };

  return (
    <section className="login">
      <h2>Форма авторизации</h2>
      <form className="login-form" onSubmit={login}>
        <div className="input-list">
          <AppInput
            placeholder="Введите логин"
            style={{ marginRight: "20px" }}
          />
          <AppInput placeholder="Введите email" />
        </div>
        <div className="input-control">
          <AppInput placeholder="Введите пароль" />
        </div>
        <div className="login-btn">
          <AppButton type="submit">Войти</AppButton>
        </div>
      </form>

      <div className="login-redirect">
        Нет аккаунта? <NavLink to="/register" className="login-link">Зарегистрируйтесь!</NavLink>
      </div>
    </section>
  );
};

export default Login;
