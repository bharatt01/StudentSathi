import { Link } from "react-router-dom";

export default function Dashboard() {

  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        Super Admin Dashboard
      </h1>

      <div className="flex gap-4">

        <Link
          to="/admin/add"
          className="bg-black text-white px-5 py-3 rounded"
        >
          Add Listing
        </Link>

        <Link
          to="/admin/colleges"
          className="bg-blue-600 text-white px-5 py-3 rounded"
        >
          View Listings
        </Link>

      </div>

    </div>
  );
}