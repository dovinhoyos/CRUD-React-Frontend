import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3002/", {
      title,
      price,
    });
    navigate("/");
  };

  return (
    <div className="box mt-2">
      <form onSubmit={saveProduct}>
        <div className="field">
          <label className="label">Product Title:</label>
          <input
            className="input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="field">
          <label className="label">Product Price:</label>
          <input
            className="input"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="field">
          <button className="button is-primary">Save</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
