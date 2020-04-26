import * as actions from '../../actionTypes';
import Axios from 'axios';
import {API_URL} from '../../../utils/constants';

export const getGraphDataConfirmed = async (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    dispatch({type: actions.SET_ERROR, payload: false});
    dispatch({type: actions.GET_GRAPH_DATA_CONFIRMED_PENDING});
    dispatch({type: actions.SET_LOADER, payload: true});
    const headers = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await Axios.get(`${API_URL}/api/day_wise_confirmed`, headers);
      dispatch({
        type: actions.GET_GRAPH_DATA_CONFIRMED_SUCCESS,
        payload: res.data,
      });
      dispatch({type: actions.SET_LOADER, payload: false});
      resolve(res.data);
    } catch (err) {
      dispatch({type: actions.GET_GRAPH_DATA_CONFIRMED_FAILED, payload: err});
      dispatch({type: actions.SET_LOADER, payload: false});
      dispatch({type: actions.SET_ERROR, payload: true});
      reject(err);
    }
  });
};

export const getAllGraphData = async (dispatch) => {
  dispatch({type: actions.SET_ERROR, payload: false});
  dispatch({type: actions.GET_GRAPH_DATA_ALL_PENDING});
  dispatch({type: actions.SET_LOADER, payload: true});
  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await Axios.get(`${API_URL}/api/get_all`, headers);
    dispatch({
      type: actions.GET_GRAPH_DATA_ALL_SUCCESS,
      payload: res.data,
    });
    dispatch({type: actions.SET_LOADER, payload: false});
  } catch (err) {
    dispatch({type: actions.GET_GRAPH_DATA_ALL_FAILED, payload: err});
    dispatch({type: actions.SET_LOADER, payload: false});
    dispatch({type: actions.SET_ERROR, payload: true});
  }
};
