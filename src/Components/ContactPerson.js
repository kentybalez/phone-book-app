import React, { Component } from 'react';
import { RaisedButton, TableRow, TableRowColumn } from 'material-ui';

class ContactPerson extends Component {
    deleteContact(id) {
        this.props.onDelete(id);
    }
    
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
                <TableRowColumn><RaisedButton label="Edit" primary={ true } ></RaisedButton></TableRowColumn>
                <TableRowColumn><RaisedButton label="Delete" secondary={ true } onClick={ this.deleteContact.bind(this, this.props.contact.id) }></RaisedButton></TableRowColumn>
            </TableRow>
        );
    }
}

export default ContactPerson;
