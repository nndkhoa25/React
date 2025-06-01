// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Inputform from "../../components/Inputform"; // Đảm bảo đúng đường dẫn
import { FaInstagram, FaFacebook, FaGoogle } from "react-icons/fa";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("Phone:", phone, "Password:", password); // Debug

    if (!phone.trim() || !password.trim()) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    // Lưu trạng thái đăng nhập và chuyển hướng về Home
    localStorage.setItem("isLoggedIn", "true");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-[500px] p-[30px] pb-[50px] rounded-2xl shadow-sm">
        <h3 className="font-bold text-2xl mb-3 flex justify-center">
          ĐĂNG NHẬP
        </h3>

        <div className="w-full flex flex-col gap-3">
          <Inputform
            label="SỐ ĐIỆN THOẠI:"
            placeholder="Nhập số điện thoại của bạn"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Inputform
            label="MẬT KHẨU:"
            placeholder="Nhập mật khẩu của bạn"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleSubmit}
            className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
              border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[10px] 
              hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] mt-4"
          >
            Đăng Nhập
          </button>
        </div>

        <div className="flex items-center justify-between mt-5 text-sm">
          <span className="text-blue-600 hover:text-red-500 cursor-pointer">
            Bạn quên mật khẩu?
          </span>
          <span className="text-blue-600 hover:text-red-500 cursor-pointer">
            <Link to="/register">Chưa có tài khoản? Đăng ký</Link>
          </span>
        </div>

        <div className="flex justify-center mt-6 gap-5">
          <FaFacebook size={50} color="#1877f3" />
          <FaInstagram size={50} color="#c13584" />
          <FaGoogle size={48} color="#db4437" />
        </div>
      </div>
    </div>
  );
};

export default Login;
