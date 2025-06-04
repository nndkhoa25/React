// src/pages/Public/HomeContent.jsx
import React from "react";
import SearchBar from "../../components/SearchBar";

const HomeContent = () => {
  return (
    <div className="w-full">
      <SearchBar />
      {/* Thêm các nội dung khác cho trang chủ tại đây */}
      <div className="w-full flex flex-col gap-3">
        <div className="mt-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Kênh thông tin Phòng Trọ số 1 Việt Nam
          </h1>
          <h2 className=" text-gray-800 mb-5 mt-4">
            Kênh thông tin Phòng Trọ số 1 Việt Nam - Website đăng tin cho thuê
            phòng trọ, nhà nguyên căn, căn hộ, ở ghép nhanh, hiệu quả với
            100.000+ tin đăng và 2.500.000 lượt xem mỗi tháng.
          </h2>
        </div>
        <div className="flex items-center gap-5 justify-center py-5">
          <div className="shadow-md rounded-b1-md text-blue-700 rounded-br-md cursor-pointer hover:text-orange-600">
            <img
              src="https://phongtro123.com/images/location_hcm.jpg"
              alt="Phong tro Ho Chi Minh"
              className="w-[190px] h-[110px] object-cover rounded-tl-md rounded-tr-md"
            />
            <div className="font-medium p-2 text-center">
              Phòng trọ Hồ Chí Minh
            </div>
          </div>
          <div className="shadow-md rounded-b1-md text-blue-700 rounded-br-md cursor-pointer hover:text-orange-600">
            <img
              src="https://phongtro123.com/images/location_hn.jpg"
              alt="Phong tro Ha Noi"
              className="w-[190px] h-[110px] object-cover rounded-tl-md rounded-tr-md"
            />
            <div className="font-medium p-2 text-center">Phòng trọ Hà Nội</div>
          </div>
          <div className="shadow-md rounded-b1-md text-blue-700 rounded-br-md cursor-pointer hover:text-orange-600">
            <img
              src="https://phongtro123.com/images/location_dn.jpg"
              alt="Phong tro Đà Nẵng"
              className="w-[190px] h-[110px] object-cover rounded-tl-md rounded-tr-md"
            />
            <div className="font-medium p-2 text-center">Phòng trọ Đà Nẵng</div>
          </div>
        </div>

        <div className="w-full flex gap-4">
          <div className="w-[70%]">
            <div className="w-full p-2 bg-white shadow-md rounded-md px-6">
              <div className="flex items-center justify-between my-3">
                <h4 className="text-xl font-semibold">Danh sách tin đăng</h4>
                <span>Cập nhật: 12:05 25/08/2022</span>
              </div>
              <div className="flex items-center gap-2 my-2">
                <span>Sap xep</span>
                <span className="bg-gray-200 p-2 rounded-md cursor-pointer hover:underline text-red-500">
                  Mac dinh
                </span>
                <span className="bg-gray-200 p-2 rounded-md cursor-pointer hover:underline false">
                  Moi nhat
                </span>
              </div>
              <div className="item"></div>
            </div>
          </div>
          <div className="w-[30%] flex flex-col gap-4 justify-start items-center">
            <div className="p-4 rounded-md bg-white w-full">
              <h3 className="text-lg font-semibold mb-4">Danh sách cho thuê</h3>
              <div className="flex flex-col gap-2"></div>
            </div>
            <div className="p-4 rounded-md bg-white w-full">
              <h3 className="text-lg font-semibold mb-4">Xem theo giá</h3>
              <div className="flex flex-col gap-2"></div>
            </div>
            <div className="p-4 rounded-md bg-white w-full">
              <h3 className="text-lg font-semibold mb-4">Xem theo diện tích</h3>
              <div className="flex flex-col gap-2"></div>
            </div>
            <div className="w-full bg-white rounded-md p-4">
              <h3 className="font-semibold text-lg mb-4">Tin đổi bật</h3>
              <div className="w-full flex flex-col gap-2"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white rounded-md shadow-md p-4 gap-4 flex-col flex justify-center items-center mt-5">
        <h3 className="font-bold text-lg">Tại sao lại chọn Phòng trọ này</h3>
        <p className="text-gray-800 text-center my-4">
          Chúng tôi biết bạn có rất nhiều lựa chọn, nhưng Phongtro123.com tự hào
          là trang web đứng top google về các từ khóa:
          <span className="text-link"></span>
          ...Vì vậy tin của bạn đăng trên website sẽ tiếp cận được với nhiều
          khách hàng hơn, do đó giao dịch nhanh hơn, tiết kiệm chi phí hơn
        </p>
        <div className="flex items-center justify-around w-full">
          <div className="flex flex-col justify-center items-center">
            <h4 className="font-bold text-lg">116.998+</h4>
            <p className="text-gray-700">Thành viên</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h4 className="font-bold text-lg">103.348+</h4>
            <p className="text-gray-700">Tín năng</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h4 className="font-bold text-lg">300.000+</h4>
            <p className="text-gray-700">Lượt truy cập/Tháng</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h4 className="font-bold text-lg">2.500.000+</h4>
            <p className="text-gray-700">Lượt xem/Tháng</p>
          </div>
        </div>
        <h3 className="font-bold text-lg py-2">
          Chi phí thấp, Hiệu quả tối đa
        </h3>
        <div className="flex items-center justify-center gap-1">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p className="text-gray-600 italic text-center">
          "Trước khi biết website phongtro123, mình phải tốn nhiều công sức và
          chi phí cho việc đăng tin cho thuê: từ việc phát tờ rơi, dán giấy, và
          đăng lên các website khác nhưng hiệu quả không cao. Từ khi biết
          website phongtro123.com, mình đã thử đăng tin lên và đánh giá hiệu quả
          khá cao trong khi chi phí khá thấp, không còn tình trạng phòng trống
          kéo dài."
        </p>
        <span className="text-gray-700">
          Anh Khánh (chủ hệ thống phòng trọ tại Tp.HCM)
        </span>
        <h3 className="font-bold text-lg py-2">
          Bạn đang có phòng trọ / căn hộ cho thuê?
        </h3>
        <p>Không phải lo tìm người cho thuê, phòng trống kéo dài</p>
        <button
          type="button"
          className="py-2 px-6 text-white bg-red-500 undefined outline-none rounded-md hover:underline flex items-center justify-center gap-1"
        >
          <span className="text-center">Đăng tin ngay</span>
        </button>
        <div className="h-12"></div>
      </div>

      <div className="w-full bg-white rounded-md shadow-md p-4 flex flex-col justify-center items-center gap-4 mt-5">
        <img
          src="https://phongtro123.com/images/support-bg.jpg"
          alt="thumnal"
          className="w-full h-48 object-contain"
        />
        <p>Liên hệ với chúng tôi nếu bạn cần hỗ trợ:</p>

        <div className="flex items-center justify-center w-full">
          <div className="flex flex-col items-center justify-center">
            <span className="text-orange-500 font-semibold">
              HỖ TRỢ THANH TOÁN
            </span>
            <span className="text-blue-900 text-[24px] font-semibold">
              Điện thoại: 0917686101
            </span>
            <span className="text-blue-900 text-[24px] font-semibold">
              Zalo: 0917686101
            </span>
          </div>
        </div>

        <button
          type="button"
          className="py-2 px-6 text-white bg-blue-500 undefined outline-none rounded-md hover:underline flex items-center justify-center gap-1"
        >
          Gửi liên hệ
        </button>
      </div>
    </div>
  );
};

export default HomeContent;
