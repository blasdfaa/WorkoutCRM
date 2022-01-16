import React from "react";
import { Link } from "react-router-dom";

// Icons
import { MdLeaderboard } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link className="link" to="/">
          <h2><small>Workout</small>CRM
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
            <span>Выход</span>
            <MdLogout />
          </li>
        </ul>
      </div>
    </nav>
  );
};
