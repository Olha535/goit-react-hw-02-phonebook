import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

function ContactList({ contacts, deleteContact }) {
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.contactItem}>
          {name}: {number}
          <button className={s.button} onClick={() => deleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
