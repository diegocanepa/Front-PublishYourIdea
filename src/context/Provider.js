import {createContext, useReducer, useState} from 'react';
import authInitialState from './initialstates/authInitialState';
import ideaInitialState from './initialstates/ideaInitialState';
import auth from './reducers/auth';
import idea from './reducers/idea'; 



export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {

    const [authState, authDispatch] = useReducer(auth, authInitialState);
    const [ideaState, ideaDispatch] = useReducer(idea, ideaInitialState);

    return (<GlobalContext.Provider value={{
        authState,
        authDispatch,
        ideaState,
        ideaDispatch
    }}>
        {children}
    </GlobalContext.Provider>)
};
