import * as actions from '../../actionTypes';

const graphState = {
  graphData: {},
  graphDataPending: false,
  graphDataError: {},
};

const graphReducer = (state = graphState, action) => {
  switch (action.type) {
    case actions.GET_GRAPH_DATA_CONFIRMED_PENDING:
      return Object.assign({}, state, {graphDataPending: true});
    case actions.GET_GRAPH_DATA_CONFIRMED_SUCCESS:
      return Object.assign({}, state, {
        graphDataPending: false,
        graphData: {
          ...state.graphData,
          day_wise_confirmed: action.payload,
        },
      });
    case actions.GET_GRAPH_DATA_CONFIRMED_FAILED:
      return Object.assign({}, state, {
        graphDataPending: false,
        graphDataError: action.payload,
      });
    case actions.GET_GRAPH_DATA_ALL_PENDING:
      return Object.assign({}, state, {graphDataPending: true});
    case actions.GET_GRAPH_DATA_ALL_SUCCESS:
      return Object.assign({}, state, {
        graphDataPending: false,
        graphData: action.payload,
      });
    case actions.GET_GRAPH_DATA_ALL_FAILED:
      return Object.assign({}, state, {
        graphDataPending: false,
        graphDataError: action.payload,
      });
    default:
      return state;
  }
};

export default graphReducer;
