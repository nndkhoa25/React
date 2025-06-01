import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Trang chủ", path: "/" },
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
      {/* w-screen: chiều rộng chiếm toàn bộ màn hình.
            flex justify-center items-center: dùng Flexbox để căn giữa nội dung theo cả trục ngang và dọc.
            h-[40px]: chiều cao 40px.
            bg-[#0d6efd]: màu nền xanh dương (mã hex).
            text-white: chữ màu trắng.
            text-[15px]: cỡ chữ 15px
            font-semibold: độ đậm trung bình (semi-bold).
 */}
      <div className="w-[1100px] flex flex-nowrap overflow-x-auto">
        {/* w-[1100px]: chiều rộng giới hạn là 1100px.
            flex: sử dụng Flexbox để sắp xếp các mục điều hướng theo chiều ngang.
            flex-nowrap: không cho phép các mục xuống dòng (ngang liên tục).
            overflow-x-auto: nếu chiều ngang vượt quá 1100px, sẽ hiện thanh cuộn ngang.
 */}
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `min-w-[10px] px-3 h-[40px] flex justify-center items-center text-center whitespace-nowrap 
                ${isActive ? "#0d6efd" : ""} hover:bg-[#ff385c]`
            }
          >
            {item.name}
          </NavLink>
        ))}
        {/* navItems là một mảng các đối tượng { name, path } (tên tab và đường dẫn).
            .map(...): lặp qua từng item và tạo một NavLink.
            to={item.path}: liên kết đến URL tương ứng.
            key={index}: khóa duy nhất cho mỗi phần tử (React cần).
            className={({ isActive }) => ...}:
                isActive: tự động được cung cấp bởi NavLink, true nếu đường dẫn hiện tại khớp với to.
                Nếu isActive, thêm lớp bg-blue-800 (nền xanh đậm).
                Khi rê chuột (hover), đổi màu nền sang đỏ (hover:bg-[#ff385c]). */}
      </div>
    </div>
  );
};

export default Navigation;
