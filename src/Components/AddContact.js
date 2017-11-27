import React, { Component } from 'react';
import uuid from 'uuid';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            number: '', 
            email: ''
        }

        this.handleName = this.handleName.bind(this);
        this.handleNumber = this.handleNumber.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
    }

    handleName(e) {
        this.setState({
            name: e.target.value
        });
        //console.log(this.state.newContact.name);
    }

    handleNumber(e) {
        this.setState({
            number: e.target.value
        });
        //console.log(this.state.newContact.name);
    }

    handleEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    handleSubmit(e) {
        const newContact = {
            id: uuid.v4(),
            name: this.state.name,
            number: this.state.number,
            email: this.state.email
        }
        
        this.props.addContact(newContact);
        this.setState({
            name: '',
            number: '',
            email: ''
        });

        e.preventDefault();

    }

    render() {
    const style = {
        margin: 20,
        padding: 40,
        textAlign: 'center',
        display: 'inline-block',
    };

    return (
        <div>
            <Paper style = { style } zDepth={2} >
                <h3>Add Contact</h3>
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
                    <TextField 
                        value={ this.state.email }
                        floatingLabelText="Email Address"
                        floatingLabelFixed={ false }
                        onChange={ this.handleEmail }
                    /> <br />
                    {/* <input type="submit" value="Submit" /> */}
                    <RaisedButton label="Submit" primary={ true } onClick={ this.handleSubmit.bind(this) }/>
                </form>
            </Paper>
        </div>
    );
  }
}

export default AddContact;
