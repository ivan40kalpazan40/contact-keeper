import { useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered, getContacts, loading } = contactContext;
  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);
  if (contacts.length === 0) {
    return <h4>Please add a contact...</h4>;
  }
  return (
    <>
      {filtered !== null
        ? filtered.map((contact) => (
            <ContactItem contact={contact} key={contact.id} />
          ))
        : contacts.map((contact) => (
            <ContactItem contact={contact} key={contact.id} />
          ))}
    </>
  );
};

export default Contacts;
