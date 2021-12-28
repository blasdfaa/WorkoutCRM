import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>WorkoutCRM</h2>
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
