import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { Grid, Row, Col } from 'react-material-responsive-grid';
import Contacts from './Components/Contacts';
import AddContact from './Components/AddContact';
import './App.css';

class App extends Component {
  constructor() {
	super();
	this.state = {
	  contacts: JSON.parse(localStorage.getItem('contacts')) || []
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

	handleUpdateContact(id) {
		let contacts = this.state.contacts;
		
	}

  render() {
		
	return (
		<MuiThemeProvider>
			<div className="App">
				<Grid>
					<Row>
						<AppBar title="Phone Book App" zDepth={2}/>
						<Col xs={4} md={4}>
							<AddContact addContact={ this.handleAddContact }/>
						</Col>
						<Col xs={4} md={8}>
							<Contacts onDelete={ this.handleDeleteContact } onUpdate={ this.handleUpdateContact } contacts = { this.state.contacts }/>
						</Col>
					</Row>
				</Grid>
			</div>
		</MuiThemeProvider>
	);
  }
}

export default App;
