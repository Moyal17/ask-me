import actionTypes from '../actions/actionTypes';

const initialState = {
  chunks: null
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_ANSWERS:
      return { ...state, answers: action.payload };
    default:
      return state;
  }
};

export default appReducer;
