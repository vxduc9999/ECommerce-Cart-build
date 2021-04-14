import React from "react";
import { Link } from "react-router-dom";
import "./OrderItem.css";

function OrderItem(props) {
  return (
    <div className="oderItem">
      <div className="oderItem__image">
        <img src="../img/256331.jpg" alt="product_name"></img>
      </div>
      <Link className="oderItem__name">
        <p>name</p>
      </Link>
      <p>qty: 11</p>

      <p className="oderItem__price">priceVND</p>
    </div>
  );
}

export default OrderItem;
