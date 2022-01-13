import { useReducer } from 'react';

import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import uuid from 'uuid';
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
        type: 'Professional',
      },
      {
        id: 2,
        name: 'Kaleen Johnson',
        email: 'kjohnson@atom.us',
        phone: '710-099-9098',
        type: 'Professional',
      },
      {
        id: 3,
        name: 'Andrea Chillini',
        email: 'andrea91@gmail.com',
        phone: '617-319-4426',
        type: 'Personal',
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  // Delete Contact
  // Set Current Contact
  // Clear Current Contact
  // Update Contact
  // Filter Contacts
  // Clear Filter

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
