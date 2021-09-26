import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contact/Add', (name, number) => ({
  payload: {
    name: name,
    number: number,
    id: uuidv4(),
  },
}));
const deleteContact = createAction('contact/Delete');
const filterChange = createAction('contact/FilterChange');

export { addContact, deleteContact, filterChange };
