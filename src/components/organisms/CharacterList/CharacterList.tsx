import React, { useEffect } from 'react';
import { useCharacterListPage } from 'apiHooks/CharactersListPage/useCharacterListPage';
import { usePageParams } from 'hooks/usePageParams';
import { FetchingStatus } from 'components/atoms/FetchingStatus/FetchingStatus';
import CultureSearcher from 'components/atoms/CultureSearcher/CultureSearcher';
import { CharacterListItemProps } from 'components/molecules/CharacterListItem/CharacterListItemProps';
import CharacterListItem from 'components/molecules/CharacterListItem/CharacterListItem';
import { CharacterListTableHeader } from 'components/molecules/CharacterListTableHeader/CharacterListTableHeader';
import Paginate from 'components/molecules/Paginate/Paginate';
import { useAppContext } from 'context/AppContext';
import { PageSizeMenu } from 'components/molecules/PageSizeMenu/PageSizeMenu';
import { GenderMenu } from 'components/molecules/GenderMenu/GenderMenu';
import Typography from 'components/atoms/Typography/Typography';
import { TypographyTag } from 'components/atoms/Typography/TypographyTags';
import {
  CharacterListItemsWrapper,
  Wrapper,
  NoResultStatusWrapper,
  StyledNoResultStatusButton,
  StyledNoResultStatusHeader,
} from './CharacterList.style';

const CharacterList = () => {
  const { pageSize, page, gender, culture, setPageParams } = usePageParams();
  const { setPagesCount } = useAppContext();

  // TODO: Add culture filtering in API when you are requesting api with only part of the culture name in the query - now it is empty list
  // If fetched list is filtering in app, then an empty table is returned after typing only part of the culture name in the query
  // Both solutions are little UX - API development is necessary.

  const { isLoading, error, data } = useCharacterListPage({
    page: Number(page),
    pageSize: Number(pageSize),
    gender: gender,
    culture: culture,
  });

  useEffect(() => {
    data && setPagesCount(data.meta.pagesCount);
  }, [data, setPagesCount]);

  const characterListItems = () =>
    data &&
    data.characterListItems.map((characterListItem: CharacterListItemProps) => (
      <CharacterListItem {...characterListItem} key={characterListItem.id} />
    ));

  const handleNoResultStatusButtonClick = () =>
    setPageParams({ newPageNumber: 1, newGender: '', newCulture: '' });

  const onResultsStatus = () =>
    data &&
    !characterListItems()?.length && (
      <NoResultStatusWrapper>
        <StyledNoResultStatusHeader role="status">No results!</StyledNoResultStatusHeader>
        <Typography typographyTag={TypographyTag.REGULAR}>Change filtering options</Typography>
        <Typography typographyTag={TypographyTag.REGULAR}>or type all culture name</Typography>
        <StyledNoResultStatusButton onClick={handleNoResultStatusButtonClick}>
          Reset all filter options
        </StyledNoResultStatusButton>
      </NoResultStatusWrapper>
    );

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
      <CharacterListItemsWrapper>
        {characterListItems()}
        {onResultsStatus()}
      </CharacterListItemsWrapper>
      <div>
        <PageSizeMenu />
      </div>
      <Paginate />
    </Wrapper>
  );
};

export default CharacterList;
