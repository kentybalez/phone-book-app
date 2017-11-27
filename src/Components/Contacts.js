import React, { Component } from 'react';
import ContactPerson from './ContactPerson';

class Contacts extends Component {
    deleteContact(id) {
        this.props.onDelete(id);
    }

    render() {
        let contactList;
        if (this.props.contacts) {
            contactList = this.props.contacts.map(contact => {
                return (
                    <ContactPerson onDelete={ this.deleteContact.bind(this) }  key={ contact.id } contact={ contact } />
                );
            });
        }

        return (
        <div className="Contacts">
            { contactList }
        </div>
        );
    }
}

export default Contacts;
