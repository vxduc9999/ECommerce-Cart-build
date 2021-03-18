import React from 'react';
import "../layout.css"
import "./Header.layout.css"
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getLogout } from "../../redux/actions/authActions";

// Components
import CartItem from "../../components/CartItem/CartItem";

// Actions
import { removeFromCart, qtyToCart } from "../../redux/actions/cartActions";

HeaderLayout.propTypes = {

};

function HeaderLayout(props) {
    const dispatch = useDispatch();
    const cart = useSelector((state) => {

        return state.cart
    });
    const { cartItem } = cart;

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
                            <Link to="/cart" className="cart__links">
                                <li><i className="fas fa-shopping-cart"></i></li>
                                <span>
                                    Cart
                                <span an className="cartlogo_badge">({cartItem.length})</span>
                                </span>
                            </Link>
                        </li>

                        {/* <li>
                            
                        </li> */}
                        <li>
                            {loggedIn === true ? (
                                <Link onClick={(e) => userhandle(e)}>

                                    <li><i className="fas fa-sign-out-alt"></i></li>
                                Logout</Link>
                            ) : (
                                <>
                                    <Link to="/login">Login</Link>
                                    <li> <i className="fas fa-user"></i></li>
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
                                            <li className="active">
                                                <div className="contact_icone" >
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh77byXGcJxPbKd4bZcGin2_3ysf3_nXIElw&usqp=CAU" alt="">

                                                    </img>
                                                </div>
                                            </li>
                                            <li><Link to="/">Shop</Link></li>
                                            {/* <li><a href="#">iPad</a></li>
                                            <li><a href="#">iPhone</a></li>
                                            <li><a href="#">Watch</a></li> */}
                                            <li><a href="#">Support</a></li>
                                            <li>
                                                <div className="search_btn">
                                                    <a href="#"><i className="ion-ios-search-strong"></i></a>
                                                    <div className="dropdown_search">
                                                        <form action="#">
                                                            <input type="text" id="searchName" placeholder="Search Product ...."></input>
                                                            <button type="submit"><i className="ion-ios-search-strong"></i></button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="wishlist_btn">
                                                    <a href="/user/wishlist"><i className="ion-heart"></i></a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="cart_link">
                                                    <a href="/cart"><i className="ion-android-cart"></i></a>
                                                </div>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default HeaderLayout;