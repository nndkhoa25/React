function FilterBar() {
  return (
    <div className="flex gap-4 items-center">
      <select className="border p-2 rounded">
        <option>Tất cả khu vực</option>
        <option>Quận 1</option>
        <option>Gò Vấp</option>
        <option>Thủ Đức</option>
      </select>

      <select className="border p-2 rounded">
        <option>Giá: Tất cả</option>
        <option>Dưới 2 triệu</option>
        <option>2-4 triệu</option>
        <option>Trên 4 triệu</option>
      </select>
    </div>
  );
}

export default FilterBar;
