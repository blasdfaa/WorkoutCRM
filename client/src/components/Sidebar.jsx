import React from "react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-list-item active-link">Создать тренировку</li>
        <li className="sidebar-list-item">Виды тренировок</li>
        <li className="sidebar-list-item">Готовые тренировки</li>
        <li className="sidebar-list-item">Расписание</li>
        <li className="sidebar-list-item">Антропометрия</li>
        <li className="sidebar-list-item">Цели</li>
        <li className="sidebar-list-item">Виды упражнений</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
