import React from 'react';
import { useCharacterListPage } from 'apiHooks/CharactersListPage/useCharacterListPage';
import { CharacterListItemProps } from 'components/molecules/CharacterListItem/CharacterListItemProps';
import { FetchingStatus } from 'components/atoms/FetchingStatus/FetchingStatus';
import CharacterListItem from 'components/molecules/CharacterListItem/CharacterListItem';
import { Wrapper } from './CharacterList.style';
import { CharacterListTableHeader } from 'components/molecules/CharacterListTableHeader/CharacterListTableHeader';
import PageSizeButton, { PageSizeButtonProps } from '../../atoms/PageSizeButton/PageSizeButton';
import { usePageParams } from '../../../hooks/usePageParams';
import Paginate from 'components/molecules/Paginate/Paginate';
import GenderButton, { GenderButtonProps } from '../../atoms/GenderButton/GenderButton';

const CharacterList = () => {
  const { pageSize, page, gender } = usePageParams();

  const { isLoading, error, data } = useCharacterListPage({
    page: Number(page),
    pageSize: Number(pageSize),
  });

  const pageSizesButtonsMenu: PageSizeButtonProps[] = [
    { buttonPageSize: 10 },
    { buttonPageSize: 25 },
    { buttonPageSize: 50 },
  ];

  const genderButtonsMenu: GenderButtonProps[] = [
    { gender: 'Male' },
    { gender: 'Female' },
    { gender: 'Any' },
  ];

  const genderFilter = (characterListItem: CharacterListItemProps) =>
    gender === characterListItem.gender || (gender !== 'Male' && gender !== 'Female');

  return (
    <Wrapper>
      <CharacterListTableHeader />
      {(error || isLoading) && <FetchingStatus error={error} isLoading={isLoading} />}
      {data &&
        data
          .filter(genderFilter)
          .map((characterListItem: CharacterListItemProps) => (
            <CharacterListItem {...characterListItem} key={characterListItem.id} />
          ))}
      <div>
        Page size:
        {pageSizesButtonsMenu.map(({ buttonPageSize }) => (
          <PageSizeButton buttonPageSize={buttonPageSize} key={buttonPageSize} />
        ))}
      </div>
      <div>
        Gender filtr:
        {genderButtonsMenu.map(({ gender }) => (
          <GenderButton gender={gender} key={gender} />
        ))}
      </div>
      <Paginate />
    </Wrapper>
  );
};

export default CharacterList;
