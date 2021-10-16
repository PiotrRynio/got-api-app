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
import { PageSizeButtons } from '../../molecules/PageSizesButtonsMenu/PageSizesButtonsMenu';
import { GenderButtonsMenu } from '../../molecules/GenderButtonsMenu/GenderButtonsMenu';

const CharacterList = () => {
  const { pageSize, page, gender, culture } = usePageParams();
  const { setPagesNumber } = useAppContext();

  const { isLoading, error, data } = useCharacterListPage({
    page: Number(page),
    pageSize: Number(pageSize),
  });

  useEffect(() => {
    setPagesNumber(data ? data.meta.pagesCount : 1);
  }, [data, setPagesNumber]);

  const genderFilter = (characterListItem: CharacterListItemProps) =>
    gender === characterListItem.gender || (gender !== 'Male' && gender !== 'Female');

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
      .filter(genderFilter)
      .filter(cultureFilter)
      .map((characterListItem: CharacterListItemProps) => (
        <CharacterListItem {...characterListItem} key={characterListItem.id} />
      ));

  return (
    <Wrapper>
      <div>
        <GenderButtonsMenu />
      </div>
      <div>
        Culture:
        <CultureSearcher />
      </div>
      <CharacterListTableHeader />
      <FetchingStatus error={error} isLoading={isLoading} />
      {characterListItems()}
      <div>
        <PageSizeButtons />
      </div>
      <Paginate />
    </Wrapper>
  );
};

export default CharacterList;
