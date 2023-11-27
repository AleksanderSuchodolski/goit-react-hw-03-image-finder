import {
  SearchbarContainer,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';
import { HiOutlineSearch } from 'react-icons/hi';

export const Searchbar = ({ onSubmitSearch }) => {
  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const searchImage = form.search.value.trim().toLowerCase();
  };

  return (
    <SearchbarContainer>
      <SearchForm onSubmit={onSubmitSearch}>
        <SearchFormButton>
          <HiOutlineSearch size="30" />
        </SearchFormButton>

        <SearchFormInput
          typ="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarContainer>
  );
};
