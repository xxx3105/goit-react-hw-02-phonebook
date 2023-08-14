import { ContainerForSearch, SearchInput } from './SearchBar.styled';

const { TitleOfBlocks } = require('styles/GlobalStyle');

export const SearchBar = ({ datasSearch, onChangeReq }) => {
  return (
    <ContainerForSearch>
      <TitleOfBlocks>Find contacts by name:</TitleOfBlocks>
      <SearchInput
        type="text"
        value={datasSearch}
        onChange={evt => onChangeReq(evt.target.value)}
      />
    </ContainerForSearch>
  );
};
