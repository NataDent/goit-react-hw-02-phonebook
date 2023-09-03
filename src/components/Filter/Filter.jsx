import { Label } from 'components/ContactForm/ContactForm.styled';
import { SearchInput, SearchWrapper } from './Filter.styled';

import PropTypes from 'prop-types';

export const Filter = ({ onChange }) => {
  return (
    <SearchWrapper>
      <Label>
        Find contacts by name
        <SearchInput onChange={onChange} />
      </Label>
    </SearchWrapper>
  );
};

Filter.propTypes = {
  onChange: PropTypes.string.isRequired,
};
