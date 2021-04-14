import "./cart.style.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { FormGroup, Label, Input, Form } from "reactstrap";
import React from "react";
// Components
import CartItem from "../../components/CartItem/CartItem";
// Actions
import {
  removeFromCart,
  qtyToCart,
  addToCart,
  getCart,
} from "../../redux/actions/cartActions";
import { useEffect, useState } from "react";

import { addToOder } from "../../redux/actions/orderAction";

const CartScreen = ({ history }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { loading, error, cartItem, total } = cart;
  //console.log("cart", cart);
  useEffect(() => {
    dispatch(getCart(88));
  }, [dispatch]);
  const qtyChangeHandler = (id, product_id, quantity, check, price) => {
    //console.log("t", total, price);
    dispatch(
      qtyToCart(
        id,
        product_id,
        quantity,
        check,
        parseInt(total),
        parseInt(price)
      )
    );
  };

  const removeHandler = (id, rmvtotal) => {
    dispatch(removeFromCart(id, parseInt(total), parseInt(rmvtotal)));
  };

  const getCartCount = () => {
    //return cartItem.reduce((item, qty) => Number(item.qty) + qty, 0);
  };

  const getDateOrder = () => {
    const today = new Date(),
      date =
        "Thời gian giao hàng từ ngày: " +
        (today.getDate() + 1) +
        " - " +
        (today.getDate() + 4) +
        "/" +
        (today.getMonth() + 1);

    return date;
  };
  history = useHistory();
  const addToOderHandler = () => {
    //dispatch(addToOder(id, qty));
    history.push("/");
  };
  ///////////ValidForm
  return (
    <div className="cartscreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="cartscreen__left">
            <h2>Cart</h2>
            {cartItem.length === 0 ? (
              <div>
                Your cart is empty <Link to="/">Go back</Link>
              </div>
            ) : (
              cartItem.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  qtyChangeHandler={qtyChangeHandler}
                  removeHandler={removeHandler}
                />
              ))
            )}
            {cartItem.length === 0 ? (
              " "
            ) : (
              <div>
                <div className="cartscreen__middle">
                  <h2>Thông tin khách hàng</h2>{" "}
                  <Form id="form-1" method="POST">
                    <div className="cartscreen__middle__Name__Phone">
                      <FormGroup>
                        <Input
                          type="input"
                          name="Name"
                          id="FullName"
                          placeholder="Họ và Tên"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Input
                          type="input"
                          name="Phone"
                          id="Phone"
                          placeholder="Số Điện Thoại"
                        />
                      </FormGroup>
                    </div>
                    <FormGroup className="cartscreen__middle__Address">
                      <Input
                        type="input"
                        name="Address"
                        id="Address"
                        placeholder="Nhập địa chỉ"
                      />
                    </FormGroup>
                    <p className="cartscreen__middle__dateOrder">
                      ({getDateOrder()})
                    </p>
                  </Form>
                </div>
                <div className="cartscreen__right">
                  <div className="cartscreen__right__info">
                    <p>Subtotal ({cartItem.length}) product:</p>
                    <p>{total}VND</p>
                  </div>
                  <div >
                    <p>
                      <button className="cartscreen__right__checkout" type="button" onClick={addToOderHandler}>
                        Checkout
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CartScreen;
