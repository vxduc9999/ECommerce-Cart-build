import { Link, Route } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getLogout } from "../redux/actions/authActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItem } = cart;

  const users = useSelector((state) => state.users);
  const { user, loggedIn } = users;
  const userhandle = (e) => {
    e.preventDefault();
    dispatch(getLogout());
  };
  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>Shopping Cart</h2>
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__links">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogo_badge">({cartItem.length})</span>
            </span>
          </Link>
        </li>

        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          {loggedIn === true ? (
            <Link onClick={(e) => userhandle(e)}>Logout</Link>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <br></br>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </li>
      </ul>

      <div className="hamburger__menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
