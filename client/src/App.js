import React, { useState, useEffect } from "react";
import { AuthContext } from "./context";
import MainLayout from "./layouts/MainLayout";

export const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth("true");
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <MainLayout />
    </AuthContext.Provider>
  );
};
