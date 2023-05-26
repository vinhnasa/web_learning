import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    list: [],
    favorites: [],
  },
  reducers: {
    addContact: (state, action) => {
      state.list.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.list = state.list.filter((contact) => contact.id !== action.payload);
      state.favorites = state.favorites.filter((contact) => contact.id !== action.payload);
    },
    toggleFavorite: (state, action) => {
      const index = state.list.findIndex((contact) => contact.id === action.payload);
      state.list[index].isFavorite = !state.list[index].isFavorite;
      if (state.list[index].isFavorite) {
        state.favorites.push(state.list[index]);
      } else {
        state.favorites = state.favorites.filter((contact) => contact.id !== action.payload);
      }
    },
  },
});

export const { addContact, deleteContact, toggleFavorite } = contactsSlice.actions;

export default contactsSlice.reducer;
