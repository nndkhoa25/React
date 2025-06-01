import React, { useState, useEffect } from "react";
import { Inputform } from "../../components";
import icons from "../../ultils/icons";
import { FaInstagram } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const { FaFacebook, FaGoogle } = icons;

function generateCaptcha(length = 6) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let captcha = "";
  for (let i = 0; i < length; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
}

const Register = () => {
  const navigate = useNavigate();
  const [captcha, setCaptcha] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");
  const [error, setError] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userCaptcha.toUpperCase() !== captcha) {
      setError("Mã CAPTCHA không đúng, vui lòng thử lại.");
      setCaptcha(generateCaptcha());
      setUserCaptcha("");
      return;
    }

    setError("");
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userPhone", phone);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="bg-white w-[500px] p-[30px] pb-[50px] rounded-2xl shadow-sm"
        onSubmit={handleSubmit}
      >
        <h3 className="font-bold text-2xl mb-3 flex justify-center">ĐĂNG KÝ</h3>
        <div className="w-full flex flex-col gap-3 ">
          <Inputform label={"HỌ TÊN: "} placeholder={"Nhập họ tên của bạn"} />
          <Inputform
            label={"SỐ ĐIỆN THOẠI: "}
            placeholder={"Nhập số điện thoại của bạn"}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Inputform
            label={"GMAIL: "}
            placeholder={"Nhập email của bạn"}
            type="email"
          />
          <Inputform label={"NGÀY SINH: "} type="date" />
          <Inputform
            label={"NƠI Ở HIỆN TẠI: "}
            placeholder={"Nhập nơi ở hiện tại"}
          />
          <Inputform label={"MẬT KHẨU: "} type="password" />
          <Inputform label={"XÁC NHẬN MẬT KHẨU: "} type="password" />

          <div className="flex flex-col mt-4 ">
            <label>Nhập mã CAPTCHA:</label>
            <div className="flex items-center gap-4 mb-2">
              <div className="select-none bg-gray-200 text-xl font-mono px-4 h-[48px] rounded tracking-widest flex items-center justify-center">
                {captcha}
              </div>
              <button
                type="button"
                onClick={() => setCaptcha(generateCaptcha())}
                className="h-[48px] cursor-pointer transition-all bg-blue-500 text-white px-6 rounded-lg
                border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
              >
                Đổi mã
              </button>
            </div>

            <input
              type="text"
              className="border rounded px-3 py-2"
              placeholder="Nhập mã CAPTCHA"
              value={userCaptcha}
              onChange={(e) => setUserCaptcha(e.target.value)}
            />
            {error && <p className="text-red-600 mt-1">{error}</p>}
          </div>

          <button
            type="submit"
            className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
            border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] mt-6"
          >
            Đăng Ký
          </button>
        </div>

        <div className="flex items-center justify-between mt-5">
          <small className="text-[blue] hover:text-[red] cursor-pointer">
            <Link to="/login">Bạn đã có tài khoản? Đăng nhập</Link>
          </small>
          <small className="text-[blue] hover:text-[red] cursor-pointer">
            Quên mật khẩu?
          </small>
        </div>

        <div className="flex items-center justify-center my-6">
          <div className="flex items-center justify-center w-full max-w-md gap-4">
            <div className="w-[100px] h-px bg-gray-300"></div>
            <span className="text-gray-700 whitespace-nowrap">Đăng ký với</span>
            <div className="w-[100px] h-px bg-gray-300"></div>
          </div>
        </div>

        <div className="flex justify-center mt-6 gap-5">
          <FaFacebook size={50} color="#1877f3" />
          <FaInstagram size={50} color="#c13584" />
          <FaGoogle size={48} color="#db4437" />
        </div>
      </form>
    </div>
  );
};

export default Register;
