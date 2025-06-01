import React,{memo} from "react";
import icons from "../ultils/icons";

const { AiOutlinePlusCircle } = icons;

const Button = ({ text, textColor, bgColor, IcAfter, onClick, fullWidth}) => {
  console.log('re-render');
  // Hàm console.log('re-render') sẽ được gọi mỗi khi component Button được re-render.
  // Điều này giúp bạn theo dõi khi nào component Button được cập nhật lại, có thể hữu ích trong quá trình phát triển và tối ưu hóa hiệu suất.
  // IcAfter là một prop tùy chọn để hiển thị biểu tượng sau văn bản nút, nếu có.
  return (
    <button
      type="button"
      className={`${textColor} ${bgColor} ${fullWidth && "w-full"} cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]`}
      onClick={onClick}
    >
      <span>{text}</span>
      <span>{IcAfter && <IcAfter />}</span>
    </button>
  );
};

export default memo(Button);
// memo giúp tối ưu hiệu suất của component bằng cách tránh việc re-render không cần thiết khi props không thay đổi.
// Điều này có thể cải thiện hiệu suất của ứng dụng, đặc biệt khi component được sử dụng nhiều lần hoặc có logic phức tạp.


// <button
//   class="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
//           border-blue-600
//           border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
//           active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
// >
//   Đăng Nhập
// </button>;