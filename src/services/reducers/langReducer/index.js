import * as actionTypes from '../../actionTypes';
import i18n from '../../../utils/lang/i18n';

const initialState = {
  isHindi: false,
};

export default function langReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_LANG:
      // i18next lang change
      i18n.changeLanguage(!state.isHindi ? 'hi' : 'en');
      return {
        ...state,
        isHindi: !state.isHindi,
      };
    default:
      // i18next lang change
      i18n.changeLanguage(state.isHindi ? 'hi' : 'en');
      return {
        ...state,
      };
  }
}
