import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(status === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <header className="py-4 w-full">
      <div className="max-w-[1100px] mx-auto w-full px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Website</h1>
        <nav className="space-x-4">
          {isLoggedIn ? (
            <>
              <span>Xin chào, User!</span>
              <button
                onClick={handleLogout}
                className="text-white hover:underline ml-4 border border-red-600 px-3 py-1 rounded bg-red-500"
              >
                Đăng xuất
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white hover:underline font-semibold border px-3 py-1 rounded-md bg-blue-500"
              >
                Đăng nhập
              </Link>
              <Link
                to="/register"
                className="text-white hover:underline font-semibold border px-3 py-1 rounded-md bg-blue-500"
              >
                Đăng ký
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
