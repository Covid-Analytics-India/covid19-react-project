import * as actions from '../../actionTypes';

const misc = {
  loader: false,
  error: false,
};

const miscReducer = (state = misc, action) => {
  switch (action.type) {
    case actions.SET_LOADER:
      return Object.assign({}, state, {loader: action.payload});
    case actions.SET_ERROR:
      return Object.assign({}, state, {error: action.payload});

    default:
      return state;
  }
};

export default miscReducer;
