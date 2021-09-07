import React, {createContext, useReducer} from 'react';
import auth from './reducers/auth';
import authInitialState from './initialStates/authInitialState';
import contacts from './reducers/contacts';
import contactsInitialState from './initialStates/contactsInitialState';


export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [contactsState, contactsDispatch] = useReducer(contacts, contactsInitialState);

  return <GlobalContext.Provider value={{authState, contactsState,authDispatch,contactsDispatch}}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;

