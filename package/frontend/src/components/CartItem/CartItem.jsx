import "./CartItem.css";
import { Link } from "react-router-dom";

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  console.log(`🚀 => file: CartItem.jsx => line 5 => item`, item)
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={`../${item.imageUrl}`} alt="product_name"></img>
      </div>
      <Link to={`/detail/${item.slug}`}>
        <p>{item.name}</p>
      </Link>

      <p className="cartitem__price">{item.price}VND</p>

      <div>
        <button
          onClick={() =>
            item.qty - 1 > 0
              ? qtyChangeHandler(item.product, item.qty - 1)
              : (item.qty = 1)
          }
        >
          -
        </button>
        <p value={item.qty}>{item.qty}</p>
        <button
          onClick={() =>
            item.qty + 1 <= item.countInStock
              ? qtyChangeHandler(item.product, item.qty + 1)
              : (item.qty = item.countInStock)
          }
        >
          +
        </button>
      </div>

      <button
        className="cartitem__deleteBtn"
        onClick={() => removeHandler(item.product)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
