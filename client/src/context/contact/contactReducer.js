import {
  GET_CONTACTS,
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  CLEAR_CONTACTS,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
} from '../types';

const contactReducer = (state, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return { ...state, contacts: action.payload, loading: false };
    case ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, action.payload] };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((x) => {
          if (x._id === action.payload._id) return action.payload;
          return x;
        }),
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((x) => x._id !== action.payload),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case FILTER_CONTACTS:
      return {
        ...state,
        filtered: state.contacts.filter((contact) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return contact.name.match(regex) || contact.email.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return { ...state, filtered: null };
    case CONTACT_ERROR:
      return { ...state, error: action.payload };
    case CLEAR_CONTACTS:
      return {
        ...state,
        contacts: [],
        current: null,
        filtered: null,
        error: null,
      };
    default:
      return state;
  }
};

export default contactReducer;
