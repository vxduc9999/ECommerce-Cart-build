import React, { useEffect, useState } from "react";
import "../layout.css";
import "./Header.layout.css";
import queryString from "query-string";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getLogout } from "../../redux/actions/authActions";

// Components
import CartItem from "../../components/CartItem/CartItem";

// Actions
import {
  removeFromCart,
  qtyToCart,
  getCart,
} from "../../redux/actions/cartActions";
import SearchComponent from "../../components/Search/search.component";

HeaderLayout.propTypes = {};

function HeaderLayout(props) {
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 11,
  });
  const [filter, setFilter] = useState({
    limit: 10,
    _page: 1,
  });

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramsString = queryString.stringify(filter);

        const requesUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requesUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });

        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("fail", error.message);
      }
    }
    fetchPostList();
  }, [filter]);
  function handleFilterChange(newFilter) {
    //console.log("New Filter:", newFilter);
    setFilter({
      ...filter,
      _page: 1,
      title_like: newFilter.searchTerm,
    });
  }
  const dispatch = useDispatch();

  const cart = useSelector((state) => {
    return state.cart;
  });
  const { cartItem } = cart;
  // useEffect(() => {
  //   dispatch(getCart(1));
  // }, []);

  //console.log("sss", cartItem);

  const users = useSelector((state) => state.users);
  const { user, loggedIn } = users;
  const userhandle = (e) => {
    e.preventDefault();
    dispatch(getLogout());
  };
  return (
    <div>
      <div id="top">
        <div id="top-left">
          <ul>
            <li>
              <a
                href="https://www.instagram.com/accounts/login/?hl=vi"
                target="_blank"
                className="fab fa-instagram"
              ></a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="fab fa-facebook-square"
              ></a>
            </li>
            <li>
              <a
                href="https://login.yahoo.com/?.intl=us&lang=vi-VN&.src=ym"
                target="_blank"
                className="fab fa-yahoo"
              ></a>
            </li>
            <li>
              <a
                href="https://twitter.com/login?lang=vi"
                target="_blank"
                className="fab fa-twitter-square"
              ></a>
            </li>
          </ul>
        </div>
        <div id="top-right">
          <ul className="navbar__links">
            <li>
              <Link to="/cart" className="cart__links">
                <li>
                  <i class="fas fa-heart"></i>
                </li>
                <span>
                  Love
                  <span an className="cartlogo_badge">
                    {/*({cartItem.length}) */}
                  </span>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/cart" className="cart__links">
                <li>
                  <i className="fas fa-shopping-cart"></i>
                </li>
                <span>
                  Cart
                  <span an className="cartlogo_badge">
                    {/* ({cartItem.length }) */}
                  </span>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/order" className="cart__links">
                <span>Order</span>
              </Link>
            </li>
            {/* <li>
                            
                        </li> */}
            <li>
              {loggedIn === true ? (
                <Link onClick={(e) => userhandle(e)}>
                  <li>
                    <i className="fas fa-sign-out-alt"></i>
                  </li>
                  Logout
                </Link>
              ) : (
                <>
                  <Link to="/login">Login</Link>
                  <li>
                    {" "}
                    <i className="fas fa-user"></i>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className="header_bottom sticky-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="main_menu_inner">
                <div className="main_menu">
                  <nav>
                    <ul>
                      <li>
                        <div className="contact_icone">
                          <i class="fab fa-apple"></i>
                        </div>
                      </li>
                      <li>
                        <Link to="/">Mac</Link>
                      </li>
                      <li>
                        <a href="#">iPad</a>
                      </li>
                      <li>
                        <a href="#">iPhone</a>
                      </li>
                      <li>
                        <a href="#">Watch</a>
                      </li>
                      <li>
                        <a href="#">Support</a>
                      </li>

                      <li>
                        <SearchComponent onSubmit={handleFilterChange} />
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderLayout;
