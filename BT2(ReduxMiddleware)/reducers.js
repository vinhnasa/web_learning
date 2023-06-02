import { FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILURE } from "./actions";

const initialState = {
  books: [],
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload,
        error: null,
      };
    case FETCH_BOOKS_FAILURE:
      return {
        ...state,
        books: [],
        error: action.payload,
      };
    default:
        return state;
} };

export default rootReducer;