import React from 'react'
import '../../stylesheets/leftbar.css'
import { fetchContacts } from '../../store/features/fetchContactList';
import { useDispatch } from 'react-redux';
function NewConveration() {

    const dispatch = useDispatch();
    return (
        <div className='newconvo'>
            <h4 style={{ letterSpacing: "1px" }}>CONVERSATION</h4>
            <button style={{ height: "67%", width: "8%", borderRadius: "50%", fontSize: '1.5rem', display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid grey", backgroundColor: "bisque" }} onClick={() => dispatch(fetchContacts(false))}>+</button>
        </div>
    )
}
export default NewConveration;