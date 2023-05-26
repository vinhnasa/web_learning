import React from 'react';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.list);

  return (
    <div>
      <h2>Contact List</h2>
      {contacts.map((contact) => (
        <div key={contact.id}>
          <p>{contact.name}</p>
          <p>{contact.phone}</p>
          <button>Delete</button>
          <button>Toggle Favorite</button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
