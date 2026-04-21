import { useState } from "react";
import axios from "axios";

function AddPerfume() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image_url: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/api/perfumes", form)
      .then(() => alert("Perfume added!"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="description" placeholder="Description" onChange={handleChange} />
      <input name="price" placeholder="Price" onChange={handleChange} />
      <input name="image_url" placeholder="Image URL" onChange={handleChange} />
      <button type="submit">Add Perfume</button>
    </form>
  );
}

export default AddPerfume;