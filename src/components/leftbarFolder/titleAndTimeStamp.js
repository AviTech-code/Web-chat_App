import React from 'react'
import '../../stylesheets/leftbar.css'
function TitleAndTimeStamp({ name, timeStamp }) {
    return (
        <div className="title-and-time">
            <div className='name-title'>{name}</div>
            <div className='timeStamp' style={{ fontWeight: "600", color: "gray" }}>{timeStamp}</div>
        </div>
    )
}
export default TitleAndTimeStamp;