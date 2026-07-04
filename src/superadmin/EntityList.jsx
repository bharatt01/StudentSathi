import { useEffect, useState } from "react";
import { getEntities } from "../services/firebaseServices";
import DynamicCard from "../components/DynamicCard";

export default function EntityList() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data = await getEntities();
    setItems(data);
  };

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-8">
        All Listings
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {items.map((item) => (
          <DynamicCard
            key={item.id}
            item={item}
          />
        ))}

      </div>

    </div>
  );
}