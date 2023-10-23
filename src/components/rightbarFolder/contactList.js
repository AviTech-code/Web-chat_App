import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Contacts from './contacts';
import { fetchContacts } from '../../store/features/fetchContactList';
import { Link } from 'react-router-dom';
function ContactList() {
    const contacts = useSelector((state) => {
        //    console.log(state);
        // state.contacts
        return state.contact;
    }
    );
    const dispatch = useDispatch();
    return (
        <div className='contact-list'>
            <div className='contactHeader'>
                <h2 style={{ margin: "2%" }}>Contacts</h2>
                <p onClick={() => dispatch(fetchContacts(contacts.boolValue))}>X</p>
            </div>
            {contacts.value.map((contact, index) => (
                <Link to={`/conversation/${index + 1}`}>
                    <Contacts contact={contact} key={index} id={index} />
                </Link>
            ))}

        </div>
    )
}
export default ContactList;