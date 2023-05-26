import React from 'react';
import { useSelector } from 'react-redux';

const FavoriteList = () => {
  const favorites = useSelector((state) => state.contacts.favorites);

  return (
    <div>
      <h2>Favorite List</h2>
      {favorites.map((favorite) => (
        <div key={favorite.id}>
          <p>{favorite.name}</p>
          <p>{favorite.phone}</p>
          <button>Delete</button>
          <button>Toggle Favorite</button>
        </div>
      ))}
    </div>
  );
};

export default FavoriteList;
