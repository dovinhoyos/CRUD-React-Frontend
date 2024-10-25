import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const { data } = await axios.get("http://localhost:3000/");
    setProducts(data);
  };

  const deleteProducts = async (id) => {
    await axios.delete(`http://localhost:3000/${ id }`)
    getProducts()
  }

  return (
    <div>
      <Link to="/add" className="button is-primary mt-2">
        Add New
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { products.map(({ id, title, price }) => (
            <tr key={ id }>
              <td>{ id }</td>
              <td>{ title }</td>
              <td>{ price }</td>
              <td>
                <Link to={ `/edit/${ id }` } className="button is-small is-info" >Edit</Link>
                <button onClick={ () => deleteProducts(id) } className="button is-small is-danger">Delete</button>
              </td>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  );
};

export default ProductList
