import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Trang chủ", path: "/trang-chu" },
  { name: "Cho thuê phòng trọ", path: "/phong-tro" },
  { name: "Nhà cho thuê", path: "/nha-cho-thue" },
  { name: "Cho thuê căn hộ", path: "/can-ho" },
  { name: "Cho thuê mặt bằng", path: "/mat-bang" },
  { name: "Tìm người ở ghép", path: "/ghep" },
  { name: "Blog", path: "/blog" },
  { name: "Hướng dẫn", path: "/huong-dan" },
  { name: "Nạp tiền", path: "/nap-tien" },
  { name: "Bảng giá", path: "/bang-gia" },
];

const Navigation = () => {
  return (
    <div className="w-screen flex justify-center items-center h-[40px] bg-[#0d6efd] text-white text-[15px] font-semibold">
      <div className="w-[1100px] flex flex-nowrap overflow-x-auto">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `min-w-[10px] px-3 h-[40px] flex justify-center items-center text-center whitespace-nowrap 
               ${isActive ? "bg-red-500 text-white" : ""} hover:bg-[#ff385c]`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
