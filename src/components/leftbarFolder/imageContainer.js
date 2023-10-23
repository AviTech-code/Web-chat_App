import React from 'react'
import '../../stylesheets/leftbar.css'
function Image({ src }) {
    return (
        <div className='image-container'>
            <img src={src} alt="" />
        </div>
    )
}
export default Image;