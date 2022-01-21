import React from "react";
import AppInput from "../components/UI/input/AppInput";
import AppButton from "../components/UI/button/AppButton";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <section className="register">
      <h2>Форма Регистрации</h2>
      <form className="register-form">
        <div className="input-list">
          <AppInput placeholder="Введите имя" style={{ marginRight: "20px" }} />
          <AppInput placeholder="Введите фамилию" />
        </div>
        <div className="input-control">
          <AppInput placeholder="Введите email" />
        </div>
        <div className="input-list">
          <AppInput
            placeholder="Введите пароль"
            style={{ marginRight: "20px" }}
          />
          <AppInput placeholder="Подтвердите пароль" />
        </div>
        <div className="input-check">
          <input id="check" type="checkbox" className="checkbox"/>
          <label htmlFor="check" className="label-check">Подтвердите согласие на обработку данных</label>
        </div>
        <div className="register-btn">
          <AppButton>Зарегистрироваться</AppButton>
        </div>
      </form>

      <div className="register-redirect">
        Уже есть аккаунт? <NavLink to="/login" className="register-link">Авторизуйтесь!</NavLink>
      </div>
    </section>
  );
};

export default Register;
