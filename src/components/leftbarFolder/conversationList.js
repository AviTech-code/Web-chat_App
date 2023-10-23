import React, { useState } from 'react'
import Conversation from './conversation';
import '../../stylesheets/leftbar.css';
import { useSelector, useDispatch } from 'react-redux'


function ConversationList({ data }) {
    //  console.log(data);

    const value = useSelector((state) => {
        // op
        // setSearch(state.displayData.search);
        //     console.log(state.searchUser)
        return state.searchUser;
    })

    return (
        <div className='conversation-list'>
            {
                value.search ? value.arr.map((data, index) => {
                    //      { console.log(data) }
                    return (<Conversation key={index} id={data.contactId - 1} data={data} />);
                }) :
                    data.map((data, index) => {
                        return (<Conversation key={index} id={index} data={data} />);
                    })
            }


        </div>
    )
}
export default ConversationList;