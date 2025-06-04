import { Routes, Route } from "react-router-dom";
import { Home, Login, Register } from "./pages/Public";
import HomeContent from "./pages/Public/HomeContent"; // import thêm HomeContent
import { path } from "./ultils/constant";

function App() {
  return (
    <div className="h-screen w-screen">
      <Routes>
        {/* Route Login & Register giữ nguyên */}
        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.REGISTER} element={<Register />} />

        {/* Route HOME có con là HomeContent */}
        <Route path={path.HOME} element={<Home />}>
          <Route index element={<HomeContent />} /> // ✅ phần này quan trọng
          <Route path="trang-chu" element={<HomeContent />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
