import { SET_FILTER } from '../actions/actionTypes';

const initialState = 'All';

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default filterReducer;
