import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link className="link" to="/"><h2>WorkoutCRM</h2></Link>
      </div>
      <div className="navbar-list">
        <ul>
          <li className="navbar-list-item active-link">Статистика</li>
          <li className="navbar-list-item">Профиль</li>
          <li className="navbar-list-item">Выход</li>
        </ul>
      </div>
    </nav>
  );
};
