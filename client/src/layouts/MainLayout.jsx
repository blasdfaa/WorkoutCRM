import React, { useContext, useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "../components/AppRouter";
import { AuthContext } from "../context";

const MainLayout = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <BrowserRouter>
      {isAuth ? (
        <div>
          <Navbar />
          <Sidebar />
        </div>
      ) : (
        ""
      )}
      <div className="content">
        <AppRouter />
      </div>
    </BrowserRouter>
  );
};

export default MainLayout;
