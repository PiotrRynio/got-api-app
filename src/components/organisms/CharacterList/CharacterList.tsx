import React from 'react';
import { useCharacterListPage } from 'apiHooks/CharactersListPage/useCharacterListPage';
import { CharacterListItemProps } from 'components/molecules/CharacterListItem/CharacterListItemProps';
import { FetchingStatus } from 'components/atoms/FetchingStatus/FetchingStatus';
import CharacterListItem from 'components/molecules/CharacterListItem/CharacterListItem';
import { Wrapper } from './CharacterList.style';
import { CharacterListTableHeader } from 'components/molecules/CharacterListTableHeader/CharacterListTableHeader';
import PageSizeButton, { PageSizeButtonProps } from '../../atoms/Button/Button';
import { usePageParams } from '../../../hooks/usePageParams';
import Paginate from '../../molecules/Paginate/Paginate';

const CharacterList = () => {
  const { pageSize, page } = usePageParams();

  console.log(page);
  console.log(pageSize);

  const { isLoading, error, data } = useCharacterListPage({
    page: Number(page),
    pageSize: Number(pageSize),
  });

  const buttonsPageSizesMenu: PageSizeButtonProps[] = [
    { buttonPageSize: 10 },
    { buttonPageSize: 25 },
    { buttonPageSize: 50 },
  ];

  return (
    <Wrapper>
      <CharacterListTableHeader />
      {(error || isLoading) && <FetchingStatus error={error} isLoading={isLoading} />}
      {data &&
        data.map((characterListItemProps: CharacterListItemProps) => (
          <CharacterListItem {...characterListItemProps} key={characterListItemProps.id} />
        ))}
      <div>
        Page size:
        {buttonsPageSizesMenu.map(({ buttonPageSize }) => (
          <PageSizeButton buttonPageSize={buttonPageSize} key={buttonPageSize} />
        ))}
      </div>
      <Paginate />
    </Wrapper>
  );
};

export default CharacterList;
