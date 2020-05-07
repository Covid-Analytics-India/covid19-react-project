import {applyMiddleware, compose, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import storage from 'redux-persist/lib/storage';
import reducer from './reducers/index';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],
};

/** Configure History */
const history = createBrowserHistory();

/** Store requirements - middleware */
const routeMiddleware = routerMiddleware(history);
const middlewares = [thunk, routeMiddleware];
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  window.__REDUX_DEVTOOLS_EXTENSION__ !== undefined
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : false || compose;
const customPersistReducer = persistReducer(persistConfig, reducer(history));

/** Configure Store */
const store = createStore(
  customPersistReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

/** Configure Persistor */
const persistor = persistStore(store);

export {store, persistor, history};
