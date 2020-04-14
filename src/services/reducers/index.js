import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import themeReducer from './themeReducer';
import thunkReducer from './thunkReducer';
import miscReducer from './miscReducer';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    misc: miscReducer,
    thunk: thunkReducer,
    theme: themeReducer,
  });
