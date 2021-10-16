import React from 'react';
import { useCharacterListPage } from 'apiHooks/CharactersListPage/useCharacterListPage';
import { usePageParams } from 'hooks/usePageParams';
import { FetchingStatus } from 'components/atoms/FetchingStatus/FetchingStatus';
import PageSizeButton, {
  PageSizeButtonProps,
} from 'components/atoms/PageSizeButton/PageSizeButton';
import CultureSearcher from 'components/atoms/CultureSearcher/CultureSearcher';
import GenderButton, { GenderButtonProps } from 'components/atoms/GenderButton/GenderButton';
import { CharacterListItemProps } from 'components/molecules/CharacterListItem/CharacterListItemProps';
import CharacterListItem from 'components/molecules/CharacterListItem/CharacterListItem';
import { CharacterListTableHeader } from 'components/molecules/CharacterListTableHeader/CharacterListTableHeader';
import Paginate from 'components/molecules/Paginate/Paginate';
import { Wrapper } from './CharacterList.style';
import { normalizeAndSquashText } from '../../../utils/normalizeAndSquashText';

const CharacterList = () => {
  const { pageSize, page, gender, culture } = usePageParams();

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

  const cultureFilter = (characterListItem: CharacterListItemProps) =>
    !culture ||
    (characterListItem.culture &&
      normalizeAndSquashText(characterListItem.culture).includes(
        normalizeAndSquashText(culture),
      )) ||
    (!characterListItem.culture &&
      normalizeAndSquashText('Unknown').includes(normalizeAndSquashText(culture)));

  return (
    <Wrapper>
      <CharacterListTableHeader />
      {(error || isLoading) && <FetchingStatus error={error} isLoading={isLoading} />}
      {data &&
        data
          .filter(genderFilter)
          .filter(cultureFilter)
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
      <div>
        Culture:
        <CultureSearcher />
      </div>
      <Paginate />
    </Wrapper>
  );
};

export default CharacterList;
