import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ imageUrl, description, price, name, product_slug }) => {

  return (
    <div className="product">
      <img src={imageUrl} alt={name} />

      <div className="product__info">
        <p className="info__name">{name}</p>

        <p className="info__description">{description.substring(0, 100)}...</p>

        <p className="info__price">${price}</p>

        <Link to={`/detail/${product_slug}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
