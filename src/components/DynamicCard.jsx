import { Link } from "react-router-dom";

export default function DynamicCard({
  item,
}) {
  return (
    <Link
      to={`/listing/${item.id}`}
      className="bg-white rounded-2xl shadow overflow-hidden block"
    >
      <img
        src={
          item.image ||
          "https://via.placeholder.com/400"
        }
        alt={item.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-4">

        <span className="text-xs bg-slate-100 px-2 py-1 rounded">
          {item.entityType}
        </span>

        <h2 className="text-xl font-bold mt-3">
          {item.name}
        </h2>

        <p className="text-slate-500">
          {item.location}
        </p>

      </div>
    </Link>
  );
}