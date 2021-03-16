import "./CartScreen.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Components
import CartItem from "../components/CartItem";

// Actions
import {
  removeFromCart,
  qtyToCart,
  addToCart,
} from "../redux/actions/cartActions";

const CartScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItem } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(qtyToCart(id, qty));
    //dispatch(addToCart(id, qty));
  };

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItem.reduce((item, qty) => Number(item.qty) + qty, 0);
  };

  const getTotal = () => {
    return cartItem.reduce((price, item) => price + item.qty * item.price, 0);
  };

  return (
    <div className="cartscreen">
      <div className="carscreen__left">
        <h2>Cart</h2>
        {cartItem.length === 0 ? (
          <div>
            Your cart is empty <Link to="/">Go back</Link>
          </div>
        ) : (
          cartItem.map((item) => (
            <CartItem
              key={item.product}
              item={item}
              qtyChangeHandler={qtyChangeHandler}
              removeHandler={removeHandler}
            />
          ))
        )}
      </div>
      <div className="carscreen__right">
        <div className="carscreen__info">
          <p>Subtotal ({cartItem.length}) product</p>
          <p>{getTotal()}VND</p>
        </div>
        <div>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
