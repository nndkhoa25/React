// src/routes/index.jsx
import { Routes, Route } from "react-router-dom";
import { Home, Login, Register } from "../pages/Public";
import HomeContent from "../pages/Public/HomeContent";
import Room from "../pages/Public/Room";
import { path } from "../ultils/constant";

function AppRoutes() {
  return (
    <div className="h-screen w-screen">
      <Routes>
        {/* Đăng nhập / đăng ký */}
        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.REGISTER} element={<Register />} />

        {/* Trang chính với layout Home */}
        <Route path={path.HOME} element={<Home />}>
          <Route index element={<HomeContent />} />
          <Route path="trang-chu" element={<HomeContent />} />
          <Route path="phong-tro" element={<Room />} />
        </Route>
      </Routes>
    </div>
  );
}

export default AppRoutes;
