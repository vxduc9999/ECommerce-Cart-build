import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={"images/" + product.product_thumbnail} alt="product_name"></img>

      <div>
        <p>{product.product_name}</p>
        <br />
        <p>{product.product_description.substring(0, 100)}...</p>
        <br></br>
        <p>{product.product_price}VND</p>

        <Link to={`/detail/${product.product_slug}`}>View</Link>
      </div>
    </div>
  );
};

export default Product;
