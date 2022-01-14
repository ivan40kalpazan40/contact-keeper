import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
} from '../types';

const contactReducer = (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, action.payload] };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((x) => {
          if (x.id === action.payload.id) return action.payload;
          return x;
        }),
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((x) => x.id !== action.payload),
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
    default:
      return state;
  }
};

export default contactReducer;
