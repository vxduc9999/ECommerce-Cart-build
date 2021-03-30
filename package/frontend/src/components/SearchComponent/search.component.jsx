
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import "./search.style.css"
import { Input } from 'antd';

const { Search } = Input;

function SearchComponent(props) {
    const { onSubmit } = props;
    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeOutRef = useRef(null);

    function handleSearchTermChange(e) {
        const value = e.target.value;
        setSearchTerm(value);
        if (!onSubmit) return;

        if (!typingTimeOutRef.current) {
            clearTimeout(typingTimeOutRef.current);
        }

        typingTimeOutRef.current = setTimeout(() => {
            const formValues = {
                searchTerm: value,
            }
            onSubmit(formValues);
        }, 300)


    }

    return (
        <div className="search_btn">
            <form action="#">
                <input type="text" value={searchTerm}
                    onChange={handleSearchTermChange} id="searchName" placeholder="Search Product ...."></input>
                <button type="submit"><i class="fas fa-search"></i></button>
            </form>
        </div>
    );
}

export default SearchComponent;