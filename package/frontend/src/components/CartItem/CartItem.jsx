import "./CartItem.css";
import { Link } from "react-router-dom";
const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img
          src={`../${item.product.product_thumbnail}`}
          alt="product_name"
        ></img>
        <p>
          <button
            className="cartItem__deleteBtn"
            onClick={() =>
              removeHandler(item.id, item.quantity * item.product.product_price)
            }
          >
            <i class="fas fa-trash-alt"></i>
          </button>
        </p>
      </div>
      <Link className="cartitem__name" to={`/detail/${item.product.slug}`}>
        <p>{item.product.product_name}</p>
      </Link>
      <div className="cartitem__price__qty">
        <p className="cartitem__price">{item.product.product_price}VND</p>

        <div className="cartitem__qty">
          <button
            onClick={() =>
              parseInt(item.quantity) - 1 > 0
                ? qtyChangeHandler(
                    item.id,
                    item.product.id,
                    parseInt(item.quantity) - 1,
                    1,
                    item.product.product_price
                  )
                : (item.quantity = 1)
            }
          >
            <i class="fas fa-minus"></i>
          </button>
          <p value={item.quantity}>{item.quantity}</p>
          <button
            onClick={() =>
              parseInt(item.quantity) + 1 <= item.product.product_quantity
                ? qtyChangeHandler(
                    item.id,
                    item.product.id,
                    parseInt(item.quantity) + 1,
                    2,
                    item.product.product_price
                  )
                : (item.quantity = item.product.product_quantity)
            }
          >
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
