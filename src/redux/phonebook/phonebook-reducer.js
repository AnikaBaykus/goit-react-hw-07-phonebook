import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterChange } from './phonebook-actions';

const items = createReducer([], {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});
const filter = createReducer('', {
  [filterChange]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
