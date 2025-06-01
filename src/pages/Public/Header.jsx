import React, { useCallback } from "react";
import logowithoutbg from "../../assets/logos/logowithoutbg.png";
import { Button } from "../../components";
import icons from "../../ultils/icons";
import { useNavigate } from "react-router-dom";
import { path } from "../../ultils/constant";

const { AiOutlinePlusCircle } = icons;

const Header = () => {
  const navigate = useNavigate();

  const goLogin = useCallback(() => {
    navigate(path.LOGIN);
  }, [navigate]);

  const goRegister = useCallback(() => {
    navigate(path.REGISTER); // cần thêm path.REGISTER trong file constant.js
  }, [navigate]);

  return (
    <div className="w-[1100px]">
      <div className="w-full flex items-center justify-between">
        <img
          src={logowithoutbg}
          alt="Logo"
          className="w-[240px] h-[70px] object-contain"
        />
        <div className="flex items-center gap-1">
          <small>Phongtro123.com xin chào</small>
          <Button
            text="Đăng ký"
            textColor="text-white"
            bgColor="bg-[#3961fb]"
            onClick={goRegister}
          />
          <Button
            text="Đăng nhập"
            textColor="text-white"
            bgColor="bg-[#3961fb]"
            onClick={goLogin}
          />
          <Button
            text={
              <span className="flex items-center gap-1">
                Đăng tin mới
                <AiOutlinePlusCircle className="text-lg" />
              </span>
            }
            textColor="text-white"
            bgColor="bg-red-500"
            className="flex items-center justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
