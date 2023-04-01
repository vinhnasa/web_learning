import React, { useState } from 'react';

const UserForm = ({ onFormSubmit }) => {
  const [name, setName] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(name);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
