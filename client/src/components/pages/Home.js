import { useContext, useEffect } from 'react';
import ContactFilter from '../contacts/ContactFilter';
import ContactForm from '../contacts/ContactForm';
import Contacts from '../contacts/Contacts';

import AuthContext from '../../context/auth/authContext';
import { Navigate } from 'react-router-dom';

const Home = () => {
  const authContext = useContext(AuthContext);
  const { loadUser, isAuthenticated } = authContext;
  useEffect(() => {
    loadUser();
    //eslint-disable-next-line
  }, []);
  return (
    <>
      {isAuthenticated ? (
        <div className='grid-2'>
          <div>
            <ContactForm />
          </div>
          <div>
            <ContactFilter />
            <Contacts />
          </div>
        </div>
      ) : (
        <Navigate to='/login' />
      )}
    </>
  );
};

export default Home;
