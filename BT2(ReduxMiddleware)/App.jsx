import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks, addBook, editBook, deleteBook } from "./actions";
import BookForm from "./components/BookForm";
import Alert from "./components/Alert";

const App = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const error = useSelector((state) => state.error);
  const [showForm, setShowForm] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleAddBook = () => {
    setSelectedBook(null);
    setShowForm(true);
  };

  const handleEditBook = (book) => {
    setSelectedBook(book);
    setShowForm(true);
  };

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };

  const handleSaveBook = (book) => {
    if (selectedBook) {
      dispatch(editBook({ ...selectedBook, ...book }));
    } else {
      dispatch(addBook(book));
    }
    setShowForm(false);
  };

  return (
    <div className="container">
      <h1>Book List</h1>
      {error && <Alert message={error} type="error" />}
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>
                <button onClick={() => handleEditBook(book)}>Edit</button>
                <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddBook}>Add Book</button>
      {showForm && <BookForm book={selectedBook} onClose={() => setShowForm(false)} onSubmit={handleSaveBook} />}
    </div>
  );
};

export default App;