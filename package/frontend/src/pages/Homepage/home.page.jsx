import "./home.style.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../redux/configAxios"
import queryString from "query-string"

// Components
import SliderComponent from "../../components/Slider/Slider.component"
import Product from "../../components/Product/Product";
import Pagination from "../../components/Pagination/Pagination"

//Actions
import { getProducts as listProducts } from "../../redux/actions/productActions";

const HomeScreen = () => {

    const dispatch = useDispatch();
    const [post, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 8;
    const productDetails = useSelector((state) => state.getProducts);

    const { loading, error, products } = productDetails;
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch]);



    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);


    return (
        <div className="homescreen">
            <SliderComponent/>
            <h2 className="homescreen__title">Latest Products</h2>
            <div className="homescreen__products">
                {loading ? (
                    <h2>Loading...</h2>
                ) : error ? (
                    <h2>{error}</h2>
                ) : (
                    <Product
                        posts={currentPosts} loading={loading}
                    />
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
