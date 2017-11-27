import React, { Component } from 'react';
import { Dialog, FlatButton, RaisedButton, Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui';
import TextField from 'material-ui/TextField';

class ContactPerson extends Component {
    deleteContact(id) {
        this.props.onDelete(id);
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
        const actions = [
            <FlatButton
              label="Cancel"
              primary={true}
              onClick={this.handleClose}
            />,
            <FlatButton
              label="Submit"
              primary={true}
              disabled={true}
              onClick={this.handleClose}
            />,
        ];

        return (
            <div className="ContactPerson">
                <Table
                    fixedHeader={ true }
                    selectable={ false }
                >
                    <TableHeader 
                        displaySelectAll={ false }
                    >
                        <TableRow>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Number</TableHeaderColumn>
                            <TableHeaderColumn>Email</TableHeaderColumn>
                            <TableHeaderColumn className="action" colSpan="2">Action</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableRowColumn>{ this.props.contact.name }</TableRowColumn>
                            <TableRowColumn>{ this.props.contact.number }</TableRowColumn>
                            <TableRowColumn>{ this.props.contact.email }</TableRowColumn>
                            <TableRowColumn><RaisedButton label="Edit" primary={ true } onClick={ this.handleOpen } ></RaisedButton></TableRowColumn>
                            <TableRowColumn><RaisedButton label="Delete" secondary={ true } onClick={ this.deleteContact.bind(this, this.props.contact.id) }></RaisedButton></TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>

                <Dialog
                    title="Edit Contact Person"
                    actions={ actions }
                    modal={ true }
                    open={ this.state.open }
                >
                    <form>
                        <TextField 
                            value={ this.state.name }
                            floatingLabelText="Name"
                            floatingLabelFixed={ false }
                            onChange={ this.handleName }
                        /> <br />
                        <TextField 
                            value={ this.state.number }
                            floatingLabelText="Number"
                            floatingLabelFixed={ false }
                            onChange={ this.handleNumber }
                        /> <br />
                    </form>
                </Dialog>
            </div>
        );
    }
}

export default ContactPerson;
