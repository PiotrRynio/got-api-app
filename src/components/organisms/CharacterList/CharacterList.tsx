import React from 'react';
import { Wrapper } from './CharacterList.style';
import { useCharacterListPage } from 'hooks/CharactersListPage/useCharacterListPage';
import { data } from 'msw/lib/types/context';

export type CharacterListProps = {};

const CharacterList = ({}: CharacterListProps) => {
  const { isLoading, error, data } = useCharacterListPage({ page: 1, pageSize: 50 });

  if (!isLoading) {
    if (data) {
      console.log(data);
    }
    if (error) {
      console.log(error);
    }
  }

  return <Wrapper>Characters List</Wrapper>;
};

export default CharacterList;
