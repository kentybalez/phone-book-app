import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Contacts from './Components/Contacts';
import AddContact from './Components/AddContact';
import './App.css';

class App extends Component {
  constructor() {
	super();
	this.state = {
	  contacts: JSON.parse(localStorage.getItem('contacts')) || [],
	  open: false
	}

	this.handleAddContact =  this.handleAddContact.bind(this);
	this.handleDeleteContact =  this.handleDeleteContact.bind(this)
  }

  handleAddContact(contact) {
	let contacts = this.state.contacts;
	contacts.push(contact);
	localStorage.setItem('contacts', JSON.stringify(contacts));
	this.setState({contacts:contacts});
	//console.log(contact);
  }

  handleDeleteContact(id) {
	  let contacts = this.state.contacts;
	  let index = contacts.findIndex( x => x.id === id);
	  contacts.splice(index, 1);
	  localStorage.setItem('contacts', JSON.stringify(contacts));
	  this.setState({contacts:contacts});
  }

  render() {
		
	return (
		<MuiThemeProvider>
			<div className="App">
				<AppBar title="Phone Book App" />
				<AddContact addContact={ this.handleAddContact }/>
				<h2>Contact List</h2>
				<Contacts onDelete={ this.handleDeleteContact } contacts = { this.state.contacts }/>
			</div>
		</MuiThemeProvider>
	);
  }
}

export default App;
