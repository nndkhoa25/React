import { Link } from "react-router-dom";

function RoomCard({ room }) {
  return (
    <div className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition">
      <img
        src={room.img}
        alt={room.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{room.title}</h3>
        <p className="text-sm text-gray-500">{room.location}</p>
        <p className="text-red-500 font-bold mt-1">{room.price}/tháng</p>
        <Link
          to={`/phong-tro/${room.id}`}
          className="text-blue-500 text-sm mt-2 block"
        >
          Xem chi tiết →
        </Link>
      </div>
    </div>
  );
}

export default RoomCard;
