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
