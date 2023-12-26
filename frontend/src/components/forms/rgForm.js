import { useState } from "react";
import { createResource } from "../../functions/post";

export default function RGForm() {
  const [rgName, setRGName] = useState("");
  const [rgLoc, setRGLoc] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const values = { type: "rg", rgName, rgLoc };
    createResource(values);
    // console.log(rgName + "-" + rgLoc);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="RG-Name"
            value={rgName}
            onChange={(e) => setRGName(e.target.value)}
          />
        </div>
        <div>
          <label>Location</label>
          <input
            type="text"
            placeholder="RG-Location"
            value={rgLoc}
            onChange={(e) => setRGLoc(e.target.value)}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
