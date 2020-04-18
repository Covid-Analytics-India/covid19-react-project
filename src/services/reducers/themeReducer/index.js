import * as actionTypes from '../../actionTypes';

const initialState = {
  isDarkTheme: true,
};

export default function themeReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_THEME:
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme,
      };
    default:
      return {
        ...state,
      };
  }
}
