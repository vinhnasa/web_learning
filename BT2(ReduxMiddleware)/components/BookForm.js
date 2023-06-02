import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, editBook } from "../actions";

const BookForm = ({ book, onClose }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(book ? book.title : "");
  const [author, setAuthor] = useState(book ? book.author : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { title, author };
    if (book) {
      dispatch(editBook({ ...book, ...newBook }));
    } else {
      dispatch(addBook(newBook));
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Author:
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </label>
      <button type="submit">{book ? "Save" : "Add"}</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
};

export default BookForm;