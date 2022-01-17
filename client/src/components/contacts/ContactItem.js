import { useContext } from 'react';
import { upCase } from '../../config/utils.config';
import ContactContext from '../../context/contact/contactContext';
import PropTypes from 'prop-types';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const onDeleteContact = (e) => {
    deleteContact(contact._id);
    clearCurrent();
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {contact.name}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (contact.type === 'professional'
              ? 'badge-success'
              : 'badge-primary')
          }
        >
          {upCase(contact.type)}
        </span>
      </h3>
      <ul className='list'>
        {contact.email && (
          <li>
            <i className='fas fa-envelope-open'></i> {contact.email}
          </li>
        )}
        {contact.phone && (
          <li>
            <i className='fas fa-phone'></i> {contact.phone}
          </li>
        )}
      </ul>
      <p>
        <button
          className='btn btn-dark btn-sm'
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDeleteContact}>
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
export default ContactItem;
