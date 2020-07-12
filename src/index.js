import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux';
import authReducer from './stores/reducers/authReducer';
import projectReducer from './stores/reducers/projectReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { getFirestore, createFirestoreInstance, firestoreReducer } from 'redux-firestore';
import { getFirebase, ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'; // <- needed if using firestore
import {firebaseConfig as fbConfig, rrfConfig} from './config/fbConfig';

// intialize firebase and firestore 
firebase.initializeApp(fbConfig);
firebase.firestore();

//initialize redux
const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});
const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})), 
  )
);
// react-redux-firebase initialization
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
