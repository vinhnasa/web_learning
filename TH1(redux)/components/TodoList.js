import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from '../actions/todoActions';

const TodoList = ({ todos, toggleTodo, removeTodo }) => {
  const handleToggleTodo = id => {
    toggleTodo(id);
  };

  const handleRemoveTodo = id => {
    removeTodo(id);
  };

  return (
    <ul className="list-group">
      {todos.map(todo => (
        <li
          key={todo.id}
          className={`list-group-item ${todo.completed ? 'completed' : ''}`}
        >
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <label className="form-check-label">{todo.text}</label>
          </div>
          {todo.completed ? (
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={() => handleRemoveTodo(todo.id)}
            >
              Remove
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-success btn-sm"
              onClick={() => handleToggleTodo(todo.id)}
            >
              Finish
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default connect(null, { toggleTodo, removeTodo })(TodoList);
