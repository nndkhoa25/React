import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";


const SearchBar = () => {
  return (
    <div className="py-3 w-full flex justify-center">
      <div className="bg-yellow-500 rounded-md shadow-md flex items-center justify-between flex-wrap gap-2 p-3 w-[1100px]">
        <select className="bg-white border rounded px-3 py-2 flex-1 w-[220px]">
          <option>Phòng trọ, nhà trọ</option>
          <option>Nhà cho thuê</option>
          <option>Cho thuê căn hộ</option>
          <option>Cho thuê mặt bằng</option>
        </select>
        <select className="bg-white border rounded px-3 py-2 flex-1 w-[180px]">
          <option>Toàn quốc</option>
          <option>TP. Hồ Chí Minh</option>
          <option>Hà Nội</option>
          <option>Đà Nẵng</option>
        </select>
        <select className="bg-white border rounded px-3 py-2 flex-1 w-[150px]">
          <option>Chọn giá</option>
          <option>Dưới 1 triệu</option>
          <option>1 - 2 triệu</option>
          <option>2 - 3 triệu</option>
          <option>Trên 3 triệu</option>
        </select>
        <select className="bg-white border rounded px-3 py-2 flex-1 w-[150px]">
          <option>Chọn diện tích</option>
          <option>Dưới 20m²</option>
          <option>20 - 30m²</option>
          <option>30 - 50m²</option>
          <option>Trên 50m²</option>
        </select>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 flex-0.5 flex items-center justify-center">
          <IoSearch /> Tìm kiếm
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
