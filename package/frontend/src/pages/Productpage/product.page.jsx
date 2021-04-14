import "./product.style.css";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React from "react";

// Actions
import { getProductDetails } from "../../redux/actions/productActions";
import { addToCart } from "../../redux/actions/cartActions";
import { increase, decrease } from "../../redux/actions/productActions";

const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const [urlImages, seturlImages] = useState();

  const productDetails = useSelector((state) => state.getProductDetails);

  const { loading, error, product } = productDetails;

  const loggedIn = useSelector((state) => state.users.loggedIn);

  history = useHistory();


  useEffect(() => {
    if (product && match.params.slug !== product.product_slug) {
      dispatch(getProductDetails(match.params.slug));
    }
  }, [dispatch, product, match]);

  const increaseCounter = () => {
    if (qty + 1 <= product.product_quantity) {
      setQty(qty + 1);
      increase(qty);
    }
  };

  const decreaseCounter = () => {
    if (qty - 1 > 0) {
      setQty(qty - 1);
      decrease(qty);
    }
  };

  const addToCartHandler = () => {
    dispatch(
      addToCart(product.product_slug, qty, product.id, product.product_price)
    );
    setTimeout(() => {
      loggedIn ? history.push("/cart") : history.push("/login")
    }, 200);
  };

  const handleClickImagesItem = (name) => {
    seturlImages(name);
  };

  return (
    <div className="productscreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productscreen__left">
            <div className="left__image">
              <img
                src={`../${urlImages == undefined ? product.product_thumbnail : urlImages
                  }`}
                alt="product_name"
              ></img>
            </div>
            <div className="left__image__item">
              <img
                onClick={() => handleClickImagesItem(product.product_thumbnail)}
                className="left__image__main"
                src={`../${product.product_thumbnail}`}
                alt="product_name"
              ></img>
              {product["images"] == undefined
                ? ""
                : product["images"].map((x) => (
                  <img
                    onClick={() => handleClickImagesItem(x.name)}
                    src={`../${x.name}`}
                    alt="productdetail_name"
                  ></img>
                ))}
            </div>
          </div>

          <div className="productscreen__right">
            <div className="right__info">
              <p className="right__name">{product.product_name}</p>
              <div className="right__price_couter">
                <p className="right__price">
                  Price: {product.product_price}VND
                </p>
                <div className="right__couter">
                  <button onClick={decreaseCounter}>
                    <i class="fas fa-minus"></i>
                  </button>
                  <p value={qty}>{qty}</p>
                  <button onClick={increaseCounter}>
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
              </div>

              <p>Description: {product.product_description}</p>
              <div className="right__add">
                <button type="button" onClick={addToCartHandler}>
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductScreen;
