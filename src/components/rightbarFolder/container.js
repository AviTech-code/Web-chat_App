import React from 'react'
import Header from './header';
import MessengerBox from './messenger';
import MessageTyping from './typeMessage';
function Container({ data }) {
    return (
        <div className='container'>

            <Header data={data} />
            <MessengerBox />

        </div>
    )
}
export default Container;