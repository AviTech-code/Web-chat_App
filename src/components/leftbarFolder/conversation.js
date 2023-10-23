import React from 'react'
import '../../stylesheets/leftbar.css'
import Image from './imageContainer';
import MessageContainer from './messageContainer';
import { useSelector, useDispatch } from 'react-redux'
import { profilePicture } from '../../store/features/displayingUserData';
import { Link } from 'react-router-dom';
function Conversation({ id, data }) {
    // console.log(id);
    // console.log(data);
    // const storeData = useSelector((state) => {
    //     console.log(state.displayData.value);
    //     return state.displayData.value;
    // })
    const sendMssge = useSelector((state) => {
        //   console.log(id);
        let length = state.sendMessage.value[id].chatLog.length;
        //    console.log(state.sendMessage.value[id].chatLog[length - 1]);
        return state.sendMessage.value[id].chatLog[length - 1];
    })
    const dispatch = useDispatch();

    return (
        <Link to={`/conversation/${id + 1}`} className='link-tag'>
            <div className="conversation-container" onClick={() => dispatch(profilePicture(id))}>
                <Image src={data.avatar} />
                <MessageContainer contactName={data.contactName} timeStamp={data.timeStamp} lastMessage={sendMssge.text} />
            </div>
        </Link>
    )


}
export default Conversation;