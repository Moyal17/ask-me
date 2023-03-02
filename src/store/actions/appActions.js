import actionTypes from './actionTypes';
import apiService from '../../services/apiService';

export const setChunksInfo = data => ({
  type: actionTypes.LOAD_ANSWERS,
  payload: data
});

const handleErrorResponse = (e) => {

}

export const askAQuestion = string => async (dispatch) => {
  try {
    const body = { question: string}
    const data = await apiService.askQuestion(body);
    dispatch(setChunksInfo(data));
    return data;
  } catch (e) {
    dispatch(handleErrorResponse(e));
    return false;
  }
};
