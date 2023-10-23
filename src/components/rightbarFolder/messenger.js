import React from 'react'
import Chat from './chats';
import NoChat from './noChat';
import MessageTyping from './typeMessage';
import { useSelector } from 'react-redux';
import { Routes } from 'react-router-dom';
const MessengerBox = () => {

    const chatLog = useSelector((state) => {
        //       console.log(state);
        return state.displayData;
    })
    const sendMssge = useSelector((state) => {
        //  console.log(state.sendMessage.value[chatLog.id].chatLog);
        return state.sendMessage;
    })
    // console.log(chatLog.id);
    return (
        <div className='messanger-box'>
            {chatLog.boolValue ? <Chat chats={sendMssge.value[chatLog.id].chatLog} key={chatLog.contactId} /> : <NoChat />}

            {chatLog.boolValue ? <MessageTyping id={chatLog.id} /> : null}
        </div>)
}
export default MessengerBox;