import React from 'react'

function Chat({ chats }) {

    //   console.log(chats)
    // console.log(chats[0].sender)
    return (
        <div className='chat-box'>
            {chats.map((chat, index) => (
                <div className='chat-row'>
                    {chat.sender === 'user' ?
                        <div className='left-chat' key={index}>{chat.text}</div> :
                        <div className='right-chat' key={index}>{chat.text}</div>
                    }
                </div>

            ))}


        </div>
    )
}
export default Chat