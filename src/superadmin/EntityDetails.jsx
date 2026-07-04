import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  getEntity,
} from "../services/firebaseServices";

export default function EntityDetails() {

  const { id } = useParams();

  const [data, setData] =
    useState(null);

  useEffect(() => {
    loadData();
  }, [id]);

  const loadData = async () => {
    const item =
      await getEntity(id);

    setData(item);
  };

  if (!data)
    return (
      <div className="p-10">
        Loading...
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto p-8">

      <img
        src={
          data.image ||
          "https://via.placeholder.com/1200x500"
        }
        alt={data.name}
        className="w-full h-[400px] object-cover rounded-2xl"
      />

      <h1 className="text-4xl font-bold mt-8 mb-6">
        {data.name}
      </h1>

      <div className="grid md:grid-cols-2 gap-4">

        {Object.entries(data).map(
          ([key, value]) => {

            if (
              key === "id" ||
              key === "image"
            )
              return null;

            return (
              <div
                key={key}
                className="bg-white p-4 rounded-xl shadow"
              >
                <h3 className="font-semibold capitalize">
                  {key}
                </h3>

                <p className="text-slate-600 mt-2">
                  {String(value)}
                </p>
              </div>
            );
          }
        )}

      </div>

    </div>
  );
}