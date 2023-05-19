import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions';
import { setFilter } from '../actions/filterActions';
import TodoList from './TodoList';

const App = ({ todos, addTodo, setFilter }) => {
  const [text, setText] = useState('');

  const handleInputChange = e => {
    setText(e.target.value);
  };

  const handleAddTodo = e => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <form onSubmit={handleAddTodo}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add new todo"
            value={text}
            onChange={handleInputChange}
          />
          <button className="btn btn-primary" type="submit">
            Add
          </button>
        </div>
      </form>
      <hr />
      <h2>Todo List</h2>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-secondary"
          value="All"
          onClick={handleFilterChange}
        >
          All
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          value="Todo"
          onClick={handleFilterChange}
        >
          Todo
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          value="Done"
          onClick={handleFilterChange}
        >
          Done
        </button>
      </div>
      <TodoList todos={todos} />
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.todos.filter(todo => {
    switch (state.filter) {
      case 'Todo':
        return !todo.completed;
      case 'Done':
        return todo.completed;
      default:
        return true;
    }
  })
});

export default connect(mapStateToProps, { addTodo, setFilter })(App);
