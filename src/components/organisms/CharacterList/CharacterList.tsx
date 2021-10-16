import React from 'react';
import { useCharacterListPage } from 'hooks/CharactersListPage/useCharacterListPage';
import { CharacterListItemProps } from 'components/molecules/CharacterListItem/CharacterListItemProps';
import { FetchingStatus } from 'components/atoms/FetchingStatus/FetchingStatus';
import CharacterListItem from 'components/molecules/CharacterListItem/CharacterListItem';
import { Wrapper } from './CharacterList.style';
import { CharacterListTableHeader } from 'components/molecules/CharacterListTableHeader/CharacterListTableHeader';

const CharacterList = () => {
  const { isLoading, error, data } = useCharacterListPage({
    page: 1,
    pageSize: 50,
  });

  if (data) {
    console.log(data);
  }

  return (
    <Wrapper>
      <CharacterListTableHeader />
      {(error || isLoading) && <FetchingStatus error={error} isLoading={isLoading} />}
      {data &&
        data.map((characterListItemProps: CharacterListItemProps) => (
          <CharacterListItem {...characterListItemProps} key={characterListItemProps.id} />
        ))}
    </Wrapper>
  );
};

export default CharacterList;
