import React from 'react';
import '../../stylesheets/rightbar.css'
import ContactList from './contactList';
import Container from './container';
import { useSelector } from 'react-redux';
const RightBar = ({ data }) => {
    const displayContacts = useSelector((state) => {
        //console.log(state.contact);
        return state.contact.boolValue;
    })
    return (
        <div className="right-bar">
            <Container data={data} />
            {displayContacts ? <ContactList /> : null}

        </div>
    )

}
export default RightBar;