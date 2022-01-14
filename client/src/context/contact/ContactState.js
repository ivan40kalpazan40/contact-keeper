import { useReducer } from 'react';

import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import { v4 as uuidv4 } from 'uuid';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jill Johnson',
        email: 'jjohnson@atom.us',
        phone: '710-722-3010',
        type: 'professional',
      },
      {
        id: 2,
        name: 'Kaleen Johnson',
        email: 'kjohnson@atom.us',
        phone: '710-099-9098',
        type: 'professional',
      },
      {
        id: 3,
        name: 'Andrea Chillini',
        email: 'andrea91@gmail.com',
        phone: '617-319-4426',
        type: 'personal',
      },
    ],
    current: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = (contact) => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  // Delete Contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  // Set Current Contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  // Update Contact
  // Filter Contacts
  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
