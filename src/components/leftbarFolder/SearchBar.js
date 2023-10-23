import React from 'react';
import '../../stylesheets/leftbar.css'
import { useDispatch } from 'react-redux';
// import { searchUser } from '../../store/features/searchUser';
import { setSearchValue } from '../../store/features/searchUser';
import { useState } from 'react'
const SearchBar = () => {
    // const [search, setSearch] = useState(false);
    const dispatch = useDispatch();

    return (
        <div className='search-bar'>
            <span><i className="fa-solid fa-magnifying-glass" style={{ color: "#374967", fontSize: "3vh", }}></i> </span>
            <input type="text" placeholder="Search for conversation" onChange={(e) => dispatch(setSearchValue(e.target.value))} />


        </div>
    )
}
export default SearchBar;