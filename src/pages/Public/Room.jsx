import React from "react";
import ProvinceSelector from "../../components/ProvinceSelector";

const RoomDetail = () => {
    return (
      <div className="w-full ">
        <div className="container mt-4" template="page_category">
          <div className="row">
            <div className="col-md-9 col-lg-8">
              <header className="mt-2 mb-3">
                <h1 className="fs-4 fw-medium mb-2 lh-sm font-bold">
                  Cho Thuê Nhà Nguyên Căn, Giá Rẻ, Chính Chủ, Mới Nhất 2025
                </h1>
                <p className="fs-7 m-0">Có 10.358 tin đăng cho thuê</p>
              </header>
              <ProvinceSelector />
            </div>
          </div>
        </div>
      </div>
    );

};

export default RoomDetail;
