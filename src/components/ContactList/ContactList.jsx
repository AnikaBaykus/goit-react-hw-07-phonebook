import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/phonebook/phonebook-actions.js';

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

export default function ContactList() {
  const contacts = useSelector(state =>
    getVisibleContacts(state.contacts.items, state.contacts.filter),
  );
  const dispatch = useDispatch();

  return (
    <ul className={s.ul}>
      {contacts?.map(({ id, name, number }) => (
        <li className={s.li} key={id}>
          <p className={s.p}>
            {name}: {number}
          </p>{' '}
          <button
            className={s.button}
            onClick={() => dispatch(deleteContact(id))}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
