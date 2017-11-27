import React, { Component } from 'react';
import { RaisedButton, TableRow, TableRowColumn } from 'material-ui';

class ContactPerson extends Component {
    deleteContact(id) {
        this.props.onDelete(id);
    }

    updateContact(id) {
        const updateContact = {
            id: this.props.contact.id,
            open: true
        }
        
        this.props.addContact(updateContact);
    }

    state = {
        open: false,
    };
    
    handleOpen = () => {
        this.setState({open: true});
    };
    
    handleClose = () => {
        this.setState({open: false});
    };

    render() {

        return (
            <TableRow className="ContactPerson">
                <TableRowColumn>{ this.props.contact.name }</TableRowColumn>
                <TableRowColumn>{ this.props.contact.number }</TableRowColumn>
                <TableRowColumn>{ this.props.contact.email }</TableRowColumn>
                <TableRowColumn><RaisedButton label="Edit" primary={ true } onClick={ this.updateContact.bind(this) }></RaisedButton></TableRowColumn>
                <TableRowColumn><RaisedButton label="Delete" secondary={ true } onClick={ this.deleteContact.bind(this, this.props.contact.id) }></RaisedButton></TableRowColumn>
            </TableRow>
        );
    }
}

export default ContactPerson;
