import React from 'react';
import '../../stylesheets/leftbar.css'
import SearchBar from './SearchBar';
import NewConveration from './newConvo';
import ConversationList from './conversationList';
import { useSelector } from 'react-redux';
const LeftBar = ({ data }) => {

    return (
        <div className="left-bar">
            <SearchBar />
            <NewConveration />
            <ConversationList data={data} />
        </div>
    )

}
export default LeftBar;