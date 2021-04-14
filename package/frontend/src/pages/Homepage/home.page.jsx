import "./home.style.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import queryString from "query-string";

// Components
import SliderComponent from "../../components/Slider/Slider.component";
import Product from "../../components/Product/Product";
import Pagination from "../../components/Pagination/Pagination";

//Actions
import { getProducts as listProducts } from "../../redux/actions/productActions";

const HomeScreen = () => {
  //home
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  //Pagination
  const [posts, setPosts] = useState([]);
  const [loadingg, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:4000");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products">
        {loadingg ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <Product posts={currentPosts} loading={loading} />
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        totalPosts={products.length}
        paginate={paginate}
      />
    </div>
  );
};

export default HomeScreen;
