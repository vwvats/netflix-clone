import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase';
import { firebaseConfig } from '../public/firebaseConfig';

const config = firebaseConfig;

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
        <GlobalStyles />
        <App />
    </FirebaseContext.Provider>, 
    document.getElementById('root')
);

// Hot Module Replacement (HMR)
 if (import.meta.hot) {
  import.meta.hot.accept();
}