import { useState } from "react";

export default function DynamicForm({ onSubmit }) {

  const [entityType, setEntityType] = useState("");

  const [fields, setFields] = useState([
    {
      key: "",
      value: ""
    }
  ]);

  const addField = () => {

    setFields([
      ...fields,
      {
        key: "",
        value: ""
      }
    ]);
  };

  const handleSubmit = () => {

    const data = {
      entityType
    };

    fields.forEach((field) => {

      data[field.key] = field.value;

    });

    onSubmit(data);
  };

  return (
    <div className="space-y-4">

      <select
        value={entityType}
        onChange={(e) =>
          setEntityType(e.target.value)
        }
        className="border p-3 w-full"
      >
        <option value="">
          Select Type
        </option>

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

      {fields.map((field, index) => (

        <div
          key={index}
          className="grid grid-cols-2 gap-3"
        >

          <input
            placeholder="Field Name"
            value={field.key}
            onChange={(e) => {

              const temp = [...fields];

              temp[index].key = e.target.value;

              setFields(temp);

            }}
            className="border p-3"
          />

          <input
            placeholder="Value"
            value={field.value}
            onChange={(e) => {

              const temp = [...fields];

              temp[index].value = e.target.value;

              setFields(temp);

            }}
            className="border p-3"
          />

        </div>

      ))}

      <button
        onClick={addField}
        className="bg-black text-white px-4 py-2"
      >
        Add Field
      </button>

      <button
        onClick={handleSubmit}
        className="bg-green-600 text-white px-4 py-2 ml-3"
      >
        Save
      </button>

    </div>
  );
}   