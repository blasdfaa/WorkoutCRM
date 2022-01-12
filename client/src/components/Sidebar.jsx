import React from "react";
import { NavLink } from "react-router-dom";
import { sidebarList } from "../utils/linkList";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-list">
        {sidebarList.map((link) => (
          <li className="sidebar-list-item">
            <NavLink
              className="link"
              to={link.to}
              activeClassName="active-link"
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
