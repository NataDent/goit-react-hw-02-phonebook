import { ContactListStyled, ListItem } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ContactListStyled>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <p>
            {name}: {number}
          </p>
          <button type="button" id={id} onClick={e => onDelete(e.target.id)}>
            Delete
          </button>
        </ListItem>
      ))}
    </ContactListStyled>
  );
};
