import React from 'react'
import { useDispatch } from 'react-redux'
import { profilePicture } from '../../store/features/displayingUserData'
import { fetchContacts } from '../../store/features/fetchContactList'
import { Link } from 'react-router-dom'
function Contacts({ contact, id }) {
    const dispatch = useDispatch()
    return (
        
            <div className='contacts' onClick={() => dispatch(profilePicture(id), dispatch(fetchContacts(true)))}>
                <div className='img-container'><img src={contact.avatar} alt='' /></div>
                <div className='contact-title'><p>{contact.contactName}</p></div>

            </div>
        
    )
}
export default Contacts