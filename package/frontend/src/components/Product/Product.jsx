import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ loading, posts }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="product">
      {posts.map(post => (
        <>
          <div className="product__item" >

            <img src={post.product_thumbnail} alt={post.product_name} />

            <div className="product__info">
              <p className="info__name">{post.product_name}</p>

              <p className="info__description">{post.product_description.substring(0, 100)}...</p>

              <p className="info__price">${post.product_price}</p>

              <Link to={`/detail/${post.product_slug}`} className="info__button">
                View
                  </Link>
            </div>
          </div>

        </>
      ))}
    </div>
  );
};

export default Product;
