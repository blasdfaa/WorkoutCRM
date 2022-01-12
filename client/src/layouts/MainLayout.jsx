import React from "react";
import { Navbar } from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "../components/AppRouter";

const MainLayout = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <div className="content">
        <AppRouter />
      </div>
    </BrowserRouter>
  );
};

export default MainLayout;
