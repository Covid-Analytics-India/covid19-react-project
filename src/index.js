import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import * as serviceWorker from './serviceWorker';
import {store, persistor, history} from './services/store';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {I18nextProvider} from 'react-i18next';
import i18n from './utils/lang/i18n';
import * as firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/analytics';
const firebaseConfig = {
  apiKey: 'AIzaSyA-f8wD6nvP_2bj0oEwZiumej-y4Ouyc2M',
  authDomain: 'covid19-quizstar.firebaseapp.com',
  databaseURL: 'https://covid19-quizstar.firebaseio.com',
  projectId: 'covid19-quizstar',
  storageBucket: 'covid19-quizstar.appspot.com',
  messagingSenderId: '779507921166',
  appId: '1:779507921166:web:7ff8fa70f985f658d2e75f',
  measurementId: 'G-04JDD5T61P',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// TODO: Add District-wise data
// TODO: Background change
// TODO:

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading</div>} persistor={persistor}>
      <ConnectedRouter history={history}>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
