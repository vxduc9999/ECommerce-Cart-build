import React from "react";
import { Link } from "react-router-dom";
import "./OrderItem.css";

function OrderItem({ item }) {
  console.log("🚀 ---------------------------------------------");
  console.log("🚀 ~ file: OrderItem.jsx ~ line 6 ~ item", item);
  console.log("🚀 ---------------------------------------------");
  return (
    <div className="oderItem">
      <div className="oderItem__image">
        <img
          src={`../${item.product.product_thumbnail}`}
          alt="product_name"
        ></img>
      </div>
      <Link className="oderItem__name">
        <p>{item.product.product_name}</p>
      </Link>
      <p>qty: {item.quantity}</p>

      <p className="oderItem__price">{item.product.product_price}VND</p>
    </div>
  );
}

export default OrderItem;
