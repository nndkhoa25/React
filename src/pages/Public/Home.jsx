// src/pages/Home.js
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import { Outlet, useNavigate } from "react-router-dom";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null); // ❗️Ban đầu là null
  const navigate = useNavigate();

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    if (loginStatus === "true") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      navigate("/login");
    }
  }, [navigate]);

  // ❗ Đợi kiểm tra xong mới render
  if (isLoggedIn === null) {
    return null; // hoặc loading spinner
  }

  return (
    <div className="w-full flex flex-col items-center h-full">
      <Header />
      {isLoggedIn && <Navigation />}
      <div className="w-full max-w-[1100px] flex flex-col items-center justify-start p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
