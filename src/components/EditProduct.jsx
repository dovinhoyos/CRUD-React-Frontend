import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    const { data } = await axios.get(`http://localhost:3002/${id}`);
    const { title, price } = data;
    setTitle(title);
    setPrice(price);
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3002/${id}`, {
        title,
        price
    });
    navigate("/");
  };
  return (
    <div className="box mt-2">
      <form onSubmit={updateProduct}>
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

export default EditProduct;
