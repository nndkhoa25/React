import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const provinces = [
  { name: "Hà Nội", label: "Cho thuê nhà" },
  { name: "Hồ Chí Minh", label: "Cho thuê nhà" },
  { name: "Đà Nẵng", label: "Cho thuê nhà" },
  { name: "Bình Dương", label: "Cho thuê nhà" },
];

const ProvinceSelector = () => {
  const [selected, setSelected] = useState("Hà Nội");

  return (
    <div className="mt-5">
      <h3 className="uppercase text-sm font-semibold mb-2">Tỉnh thành</h3>
      <div className="flex gap-3 flex-wrap">
        {provinces.map((item) => (
          <div
            key={item.name}
            className={`relative px-4 py-2 rounded-md shadow-sm border text-center cursor-pointer 
              ${
                selected === item.name
                  ? "border-red-500 text-red-600 bg-white"
                  : "bg-white text-blue-600 border-transparent"
              }`}
            onClick={() => setSelected(item.name)}
          >
            <p className="text-sm">{item.label}</p>
            <p className="font-semibold">{item.name}</p>
            {selected === item.name && (
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-t-red-500 border-l-[20px] border-l-transparent">
                <FaCheck className="absolute top-[-16px] right-[2px] text-xs text-white" />
              </div>
            )}
          </div>
        ))}

        {/* Tất cả button */}
        <div
          className="px-4 py-2 rounded-md shadow-sm bg-white text-blue-600 cursor-pointer flex items-center gap-1"
          onClick={() => setSelected("all")}
        >
          <span className="font-medium">Tất cả</span>
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
};

export default ProvinceSelector;
