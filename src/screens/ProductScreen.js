import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import React from "react";

// Actions
import { getProductDetails } from "../redux/actions/productAction";
import { addToCart } from "../redux/actions/cartActions";

const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && match.params.slug !== product.product_slug) {
      dispatch(getProductDetails(match.params.slug));
    }
  }, [dispatch, match, product]);

  const increaseCounter = () => {
    if (qty + 1 <= product.product_quantity) setQty(qty + 1);
  };

  const decreaseCounter = () => {
    if (qty - 1 > 0) setQty(qty - 1);
  };

  const addToCartHandler = () => {
    dispatch(addToCart(product.id, qty));
    history.push("/cart");
  };
  return (
    <div className="productscreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="left__image">
            <img
              src={`/images/${product.product_thumbnail}`}
              alt="product_name"
            ></img>
          </div>

          <div className="left__info">
            <p className="left__name">{product.product_name}</p>
            <p>Price: {product.product_price}VND</p>
            <p>Description: {product.product_description}</p>
          </div>

          <div className="productscreen__right">
            <p>Price: {product.product_price}VND</p>
            <div>
              <button onClick={decreaseCounter}>-</button>
              <p value={qty}>{qty}</p>
              <button onClick={increaseCounter}>+</button>
            </div>
            <p>
              <button type="button" onClick={addToCartHandler}>
                Add to cart
              </button>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductScreen;
