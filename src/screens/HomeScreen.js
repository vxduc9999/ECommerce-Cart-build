import { Link } from "react-router-dom";
import "./HomeScreen.css";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// components
import Product from "../components/Product";

// Actions

import { getProducts as listProducts } from "../redux/actions/productAction";

const HomeScreen = () => {
  const dispatch = useDispatch();

  // get all product from action
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Home Screen</h2>

      <div className="homescreen__products">
        {products.length <= 0 ? (
          <h2>Nothing</h2>
        ) : (
          products.map((prod) => <Product key={prod.id} product={prod} />)
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
