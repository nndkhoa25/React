import { Routes, Route } from "react-router-dom";
import { Home, Login, Register } from "./pages/Public"; // đảm bảo bạn export Register
import { path } from "./ultils/constant";

function App() {
  return (
    <div className="h-screen w-screen">
      <Routes>
        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.REGISTER} element={<Register />} />
        <Route path={path.HOME} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
