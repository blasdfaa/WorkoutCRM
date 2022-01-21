import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Icons
import { MdLeaderboard } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { AuthContext } from "../context";

export const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link className="link" to="/">
          <h2>
            <small>Workout</small>CRM
          </h2>
        </Link>
      </div>
      <div className="navbar-list">
        <ul>
          <li className="navbar-list-item active-link">
            <span>Статистика</span>
            <MdLeaderboard />
          </li>
          <li className="navbar-list-item">
            <span>Профиль</span>
            <MdAccountCircle />
          </li>
          <li className="navbar-list-item">
            <span onClick={logout}>Выход</span>
            <MdLogout />
          </li>
        </ul>
      </div>
    </nav>
  );
};
