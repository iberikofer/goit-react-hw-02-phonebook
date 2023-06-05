import React from 'react';

export default class ContactList extends React.Component {
  buildMarkup = () => {
    const { contacts, filter } = this.props.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );

    return filteredContacts.map(contact => (
      <li key={contact.id}>
        {contact.name}: {contact.number}{' '}
        <button onClick={() => this.handleDelete(contact.id)}>Delete</button>
      </li>
    ));
  };

  handleDelete = contactId => {
    this.props.handleDelete(contactId);
  };

  render() {
    return (
      <div>
        <ul>{this.buildMarkup()}</ul>
      </div>
    );
  }
}
