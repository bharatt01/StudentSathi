import { useState } from "react";
import { db } from "../firebase/config";

import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function AddEntity() {
const navigate = useNavigate();


  const { category } = useParams();
  // const [category, setCategory] = useState("college");

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    image: "",
  });

  const [customFields, setCustomFields] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addField = () => {
    setCustomFields([
      ...customFields,
      {
        key: "",
        value: "",
      },
    ]);
  };

  const updateField = (index, type, value) => {
    const updated = [...customFields];

    updated[index][type] = value;

    setCustomFields(updated);
  };

  const removeField = (index) => {
    const updated = [...customFields];

    updated.splice(index, 1);

    setCustomFields(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const dynamicData = {};

      customFields.forEach((field) => {
        if (field.key) {
          dynamicData[field.key] = field.value;
        }
      });

      const finalData = {
  category,

  name: formData.name,
  location: formData.location,
  image: formData.image,

  rating: 4.5,
  reviews: 0,
  students: "0+",
  courses: 0,

  type: "College",

  accreditation: "Approved",

  originalFee: "₹0",
  discountedFee: "₹0",
  discount: "₹0",

  tags: [],

  featured: false,

  createdAt: serverTimestamp(),
};

      await addDoc(
        collection(db, "entities"),
        finalData
      );

      alert("Added Successfully");

      setFormData({
        name: "",
        location: "",
        image: "",
      });

      setCustomFields([]);
    } catch (error) {
      console.log(error);
      alert("Error");
    }

    setLoading(false);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">
        Add Listing
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl p-6 shadow"
      >
        {/* Category */}

        <div className="mb-5">
          <label className="font-semibold block mb-2">
            Category
          </label>

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            className="w-full border rounded-xl p-3"
          >
            <option value="college">
              College
            </option>

            <option value="hostel">
              Hostel
            </option>

            <option value="pg">
              PG
            </option>

            <option value="institute">
              Institute
            </option>
          </select>
        </div>

        {/* Common Fields */}

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded-xl p-3"
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="border rounded-xl p-3"
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="border rounded-xl p-3 md:col-span-2"
          />
        </div>

        {/* Dynamic Fields */}

        <div className="mt-8">
          <div className="flex justify-between mb-4">
            <h2 className="font-bold text-xl">
              Dynamic Fields
            </h2>

            <button
              type="button"
              onClick={addField}
              className="bg-black text-white px-4 py-2 rounded-lg"
            >
              Add Field
            </button>
          </div>

          {customFields.map((field, index) => (
            <div
              key={index}
              className="grid md:grid-cols-5 gap-3 mb-3"
            >
              <input
                placeholder="Field Name"
                value={field.key}
                onChange={(e) =>
                  updateField(
                    index,
                    "key",
                    e.target.value
                  )
                }
                className="border rounded-xl p-3"
              />

              <input
                placeholder="Value"
                value={field.value}
                onChange={(e) =>
                  updateField(
                    index,
                    "value",
                    e.target.value
                  )
                }
                className="border rounded-xl p-3 md:col-span-3"
              />

              <button
                type="button"
                onClick={() =>
                  removeField(index)
                }
                className="bg-red-500 text-white rounded-xl"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        <button
        onClick={() => navigate("/superadmin/manage-listings")}
          type="submit"
          disabled={loading}
          className="mt-8 bg-slate-950 text-white px-8 py-3 rounded-xl"
        >
          {loading
            ? "Saving..."
            : "Save Listing"}
        </button>
      </form>
    </div>
  );
}