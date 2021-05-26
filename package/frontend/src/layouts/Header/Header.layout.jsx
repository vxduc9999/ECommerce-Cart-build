
import "../layout.css"
import "./Header.layout.css"
import { Link, useHistory } from "react-router-dom";
import React, { useState } from 'react';

import { useSelector, useDispatch } from "react-redux";
import { getLogout } from "../../redux/actions/authActions";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// Components
import CartItem from "../../components/CartItem/CartItem";

// Actions
import { removeFromCart, qtyToCart } from "../../redux/actions/cartActions";
import SearchComponent from '../../components/SearchComponent/search.component';



function HeaderLayout() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.users.loggedIn);

  const cart = useSelector((state) => {

    return state.cart
  });
  const { cartItem } = cart;
  let history = useHistory();

  const userhandle = (e) => {
    e.preventDefault();
    dispatch(getLogout());
  };

  const carthandle = (e) => {
    e.preventDefault();
    if (loggedIn == false) {
      history.push("/login");
    } else
      history.push("/cart");
  };

  const lovehandle = (e) => {
    e.preventDefault();
    if (loggedIn == false) {
      history.push("/login");
    } else
      history.push("/wishlist");
  };


  return (
    <div>
      <div id="top">
        <div id="top-left">
          <ul>
            <li>
              <a href="https://www.instagram.com/accounts/login/?hl=vi" target="_blank" className="fab fa-instagram"></a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank" className="fab fa-facebook-square"></a>
            </li>
            <li>
              <a href="https://login.yahoo.com/?.intl=us&lang=vi-VN&.src=ym" target="_blank" className="fab fa-yahoo"></a>
            </li>
            <li>
              <a href="https://twitter.com/login?lang=vi" target="_blank" className="fab fa-twitter-square"></a>
            </li>
          </ul>
        </div>
        <div id="top-right">
          <ul className="navbar__links">
            <li>
              {loggedIn === true ? (
                 <Dropdown isOpen={dropdownOpen} direction="left" toggle={toggle}>
                 <DropdownToggle tag="p" className="dropdown">
                 <li><i className="fas fa-user"></i></li>Name
                 </DropdownToggle>
                 <DropdownMenu>
                 <DropdownItem><Link to="/changepassword" className="cart__links">
                <li><i class="fas fa-exchange-alt"></i></li>
                <span>
                  Change pass
                </span>
              </Link></DropdownItem>
                   <DropdownItem><Link onClick={(e) => carthandle(e)} className="cart__links">
                <li><i className="fas fa-shopping-cart"></i></li>
                <span>
                  Cart
                  <span an className="cartlogo_badge">({cartItem.length})</span>
                </span>
              </Link></DropdownItem>
                   <DropdownItem><Link onClick={(e) => lovehandle(e)} className="cart__links">
                <li><i class="fas fa-heart"></i></li>
                <span>
                  Love
                  <span an className="lovelogo_badge">({cartItem.length})</span>
                </span>
              </Link></DropdownItem>
              <DropdownItem><Link onClick={(e) => userhandle(e)}>
                  <li><i className="fas fa-sign-out-alt"></i></li>
                Logout</Link></DropdownItem>
                 </DropdownMenu>
               </Dropdown>
              ) : (
                <>
                  <Link to="/login"><span className="isAuth">Login</span></Link>
                  <li> <i className="fas fa-user isAuth"></i></li>
                  <li>
                    <Link to="/signup"><span className="isAuth">Register</span></Link>
                  </li>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
          <div className="main_menu_inner">
            <div className="main_menu">
              <nav>
                <ul>
                  <li>
                    <div className="contact_icone" >
                      <img src="data:image/png;base64,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" alt="logo"/>
                    </div>
                  </li>
                  <li><Link to="/">Home</Link></li>
                  <li><a href="#">About US</a></li>
                  <li><a href="#">Product</a></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>

                  <li>
                    <SearchComponent />
                  </li>

                </ul>
              </nav>
            </div>
          </div>
        </div>
  );
}
export default HeaderLayout;
