import React from 'react';
import './style.css';

const SearchBar = ({ searchTerm, onSearch }) => {
    return (
        <div className="search">
            <input
                className="search-input"
                type="text"
                placeholder="Tìm kiếm Pokemon..."
                value={searchTerm}
                onChange={(e) => onSearch(e.target.value)}
            />
            <button className="search-button" onClick={() => onSearch(searchTerm)}>Search</button>
        </div>
    );
};

export default SearchBar;
