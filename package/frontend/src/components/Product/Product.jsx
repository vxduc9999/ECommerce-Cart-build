import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ loading, posts }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="product">
      {posts.map(posts => (
        <>
          <div className="product__item" >

            <img src={posts.imageUrl} alt={posts.name} />

            <div className="product__info">
              <p className="info__name">{posts.name}</p>

              <p className="info__description">{posts.description.substring(0, 100)}...</p>

              <p className="info__price">${posts.price}</p>

              <Link to={`/detail/${posts.product_slug}`} className="info__button">
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
