import React from 'react'
import '../../stylesheets/leftbar.css'
function LastMessage({ lastMessage }) {
    return (
        <div className='message'>
            <div>{lastMessage}</div>
        </div>
    )
}
export default LastMessage;