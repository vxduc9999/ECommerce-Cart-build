
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
                      <img src="./online-shopping.png" alt="logo"/>
                    </div>
                  </li>
                  <li><Link to="/">Mac</Link></li>
                  <li><a href="#">iPad</a></li>
                  <li><a href="#">iPhone</a></li>
                  <li><a href="#">Watch</a></li>
                  <li><Link to="/blog">Blog</Link></li>

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
