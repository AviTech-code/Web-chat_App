import React from 'react'
import '../../stylesheets/leftbar.css'
import TitleAndTimeStamp from './titleAndTimeStamp';
import LastMessage from './lastMessage';

function MessageContainer({ contactName, timeStamp, lastMessage }) {
    return (
        <div className='message-container'>
            <TitleAndTimeStamp name={contactName} timeStamp={timeStamp} />
            <LastMessage lastMessage={lastMessage} />
        </div>
    )
}
export default MessageContainer;