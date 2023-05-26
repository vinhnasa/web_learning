import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import ContactList from './ContactList';
import FavoriteList from './FavoriteList';
import ContactForm from './ContactForm';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <ContactForm />
        <ContactList />
        <FavoriteList />
      </div>
    </Provider>
  );
};

export default App;
