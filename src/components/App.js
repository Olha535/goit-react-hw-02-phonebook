import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Container from './Container';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
// import Contacts from './ContactList/Contacts';
import Filter from './Filter';
import contactJson from './contacts.json';

class App extends Component {
  state = {
    contacts: contactJson,
    filter: '',
  };

  formSubmitHandler = data => {
    const contactId = uuidv4();
    const newContact = { ...data, id: contactId };
    const { name } = data;

    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  visibleContact = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const {
      changeFilter,
      formSubmitHandler,
      visibleContact,
      state: { filter },
    } = this;
    const filterContact = visibleContact();

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={changeFilter} />
        <ContactList
          contacts={filterContact}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
