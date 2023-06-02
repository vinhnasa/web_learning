import { takeLatest, call, put } from "redux-saga/effects";
import ApiService from "./apiService";
import { FETCH_BOOKS, ADD_BOOK, EDIT_BOOK, DELETE_BOOK, fetchBooksSuccess, fetchBooksFailure } from "./actions";

function* fetchBooksSaga() {
  try {
    const books = yield call(ApiService.getBooks);
    yield put(fetchBooksSuccess(books));
  } catch (error) {
    yield put(fetchBooksFailure(error.message));
  }
}

function* addBookSaga(action) {
  try {
    yield call(ApiService.addBook, action.payload);
    yield put(fetchBooks());
  } catch (error) {
    console.log(error);
  }
}

function* editBookSaga(action) {
  try {
    yield call(ApiService.editBook, action.payload);
    yield put(fetchBooks());
  } catch (error) {
    console.log(error);
  }
}

function* deleteBookSaga(action) {
  try {
    yield call(ApiService.deleteBook, action.payload);
    yield put(fetchBooks());
  } catch (error) {
    console.log(error);
  }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_BOOKS, fetchBooksSaga);
  yield takeLatest(ADD_BOOK, addBookSaga);
  yield takeLatest(EDIT_BOOK, editBookSaga);
  yield takeLatest(DELETE_BOOK, deleteBookSaga);
}