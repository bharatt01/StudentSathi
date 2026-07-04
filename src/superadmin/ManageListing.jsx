import { useEffect, useState } from "react";

import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { db } from "../firebase/config";

export default function ManageListings() {
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    loadEntities();
  }, []);

  const loadEntities = async () => {
    const snapshot = await getDocs(
      collection(db, "entities")
    );

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setEntities(data);
  };

  const deleteEntity = async (id) => {
    const confirmDelete =
      window.confirm(
        "Delete this entity?"
      );

    if (!confirmDelete) return;

    await deleteDoc(
      doc(db, "entities", id)
    );

    loadEntities();
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Manage Listings
      </h1>

      <div className="bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-slate-100">
              <th className="p-4 text-left">
                Name
              </th>

              <th className="p-4 text-left">
                Category
              </th>

              <th className="p-4 text-left">
                Location
              </th>

              <th className="p-4 text-left">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {entities.map((item) => (
              <tr
                key={item.id}
                className="border-b"
              >
                <td className="p-4">
                  {item.name}
                </td>

                <td className="p-4 capitalize">
                  {item.category}
                </td>

                <td className="p-4">
                  {item.location}
                </td>

                <td className="p-4">
                  <button
                    onClick={() =>
                      deleteEntity(item.id)
                    }
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

       {entities.length === 0 ? (
  <div className="p-10 text-center">
    No Listings Found
  </div>
) : (
  <table className="w-full">
    <thead>
      <tr className="border-b bg-slate-100">
        <th className="p-4 text-left">Name</th>
        <th className="p-4 text-left">Category</th>
        <th className="p-4 text-left">Location</th>
        <th className="p-4 text-left">Action</th>
      </tr>
    </thead>

    <tbody>
      {entities.map((item) => (
        <tr key={item.id} className="border-b">
          <td className="p-4">{item.name}</td>
          <td className="p-4 capitalize">{item.category}</td>
          <td className="p-4">{item.location}</td>
          <td className="p-4">
            <button
              onClick={() => deleteEntity(item.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)}
      </div>
    </div>
  );
}