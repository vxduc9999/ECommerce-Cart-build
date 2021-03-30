import React from 'react';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../Homepage/home.style.css"
import axios from "../../redux/configAxios"
// Actions

import Product from "../../components/Product/Product";
import { getProducts as listProducts } from "../../redux/actions/productActions";
import Pagination from "../../components/Pagination/Pagination"

const PhonePage = ({ match, history }) => {
    const dispatch = useDispatch();
    const [post, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10;
    const productDetails = useSelector((state) => state.getProducts);

    const { loading, error, products } = productDetails;
    useEffect(() => {
        const fetchPosts = async () => {

            const res = await axios.get(`/phone?`, { params: { p: currentPage } });
            const a = res.data
            setPosts(a.products);

        };
        fetchPosts();
        dispatch(listProducts())
    }, [dispatch]);



    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="homescreen">
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


export default PhonePage