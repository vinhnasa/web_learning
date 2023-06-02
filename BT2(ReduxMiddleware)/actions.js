export const FETCH_BOOKS = "FETCH_BOOKS";
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_BOOKS_FAILURE = "FETCH_BOOKS_FAILURE";
export const ADD_BOOK = "ADD_BOOK";
export const EDIT_BOOK = "EDIT_BOOK";
export const DELETE_BOOK = "DELETE_BOOK";

export const fetchBooks = () => ({
  type: FETCH_BOOKS,
});

export const fetchBooksSuccess = (books) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: books,
});

export const fetchBooksFailure = (error) => ({
  type: FETCH_BOOKS_FAILURE,
  payload: error,
});

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const editBook = (book) => ({
  type: EDIT_BOOK,
  payload: book,
});

export const deleteBook = (id) => ({
  type: DELETE_BOOK,
  payload: id,
});
