import React from 'react'
import '../../stylesheets/rightbar.css'
import { profilePicture } from '../../store/features/displayingUserData';
import { useSelector } from 'react-redux';

function Header({ data }) {
    // console.log(profilePicture.value);
    // console.log(data);
    const value = useSelector((state) => {
        // console.log(state.displayData);
        return state.displayData;
        // console.log(userName())
    })
    // console.log(name.payload);
    // console.log(name.type);
    return (
        value.boolValue ?
            <div className="header">
                <div className='image-Container'><img src={value.pic} alt={value.name} /></div>
                <div className='title'><p>{value.name}</p></div>
            </div> :
            <div className="header" style={{ justifyContent: "center" }}>
                <h2>Welcome to the web-book chat</h2>
            </div>
    )
}
export default Header;