import React, { useEffect } from 'react';
import { useCharacterListPage } from 'apiHooks/CharactersListPage/useCharacterListPage';
import { usePageParams } from 'hooks/usePageParams';
import { FetchingStatus } from 'components/atoms/FetchingStatus/FetchingStatus';
import CultureSearcher from 'components/atoms/CultureSearcher/CultureSearcher';
import { CharacterListItemProps } from 'components/molecules/CharacterListItem/CharacterListItemProps';
import CharacterListItem from 'components/molecules/CharacterListItem/CharacterListItem';
import { CharacterListTableHeader } from 'components/molecules/CharacterListTableHeader/CharacterListTableHeader';
import Paginate from 'components/molecules/Paginate/Paginate';
import { Wrapper } from './CharacterList.style';
import { normalizeAndSquashText } from 'utils/normalizeAndSquashText';
import { useAppContext } from 'context/AppContext';
import { PageSizeMenu } from '../../molecules/PageSizeMenu/PageSizeMenu';
import { GenderMenu } from '../../molecules/GenderMenu/GenderMenu';

const CharacterList = () => {
  const { pageSize, page, gender, culture } = usePageParams();
  const { setPagesCount } = useAppContext();

  // TODO: Add culture filtering in API - now an empty table is returned after passing part of the culture name in the query

  const { isLoading, error, data } = useCharacterListPage({
    page: Number(page),
    pageSize: Number(pageSize),
    gender: gender,
  });

  useEffect(() => {
    data && setPagesCount(data.meta.pagesCount);
  }, [data, setPagesCount]);

  const cultureFilter = (characterListItem: CharacterListItemProps) =>
    !culture ||
    (characterListItem.culture &&
      normalizeAndSquashText(characterListItem.culture).includes(
        normalizeAndSquashText(culture),
      )) ||
    (!characterListItem.culture &&
      normalizeAndSquashText('Unknown').includes(normalizeAndSquashText(culture)));

  const characterListItems = () =>
    data &&
    data.characterListItems
      .filter(cultureFilter)
      .map((characterListItem: CharacterListItemProps) => (
        <CharacterListItem {...characterListItem} key={characterListItem.id} />
      ));

  return (
    <Wrapper>
      <div>
        <GenderMenu />
      </div>
      <div>
        Culture:
        <CultureSearcher />
      </div>
      <CharacterListTableHeader />
      <FetchingStatus error={error} isLoading={isLoading} />
      {characterListItems()}
      <div>
        <PageSizeMenu />
      </div>
      <Paginate />
    </Wrapper>
  );
};

export default CharacterList;
