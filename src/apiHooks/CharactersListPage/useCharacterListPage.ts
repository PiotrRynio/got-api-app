import { useQuery, UseQueryResult } from 'react-query';
import { CharacterListItemProps } from 'components/molecules/CharacterListItem/CharacterListItemProps';
import { UseCharacterListPageProps } from './UseCharacterListPageProps';
import { API_URL } from 'constant/apiUrl';
import parseLinkHeader from 'parse-link-header';
import { toCharacterListItemPropsFromDto } from './toCharacterListItemPropsFromDto';
import { validateResponse } from '../validateResponse';

export const useCharacterListPage = ({
  page = 1,
  pageSize = 25,
}: UseCharacterListPageProps): UseQueryResult<{
  characterListItems: CharacterListItemProps[];
  meta: { pagesCount: number };
}> =>
  useQuery(
    [`CharacterListPage-${page}-${pageSize}`],
    async () => {
      const response = await fetch(`${API_URL}/characters?page=${page}&pageSize=${pageSize}`);
      const linkHeader = response.headers.get('Link');
      const parsedLinkHeader = linkHeader ? parseLinkHeader(linkHeader) : undefined;
      const pagesCount = parsedLinkHeader ? parsedLinkHeader['last']['page'] : 0;
      await validateResponse(response);
      const fetchedData = await response.json();

      const characterListItems = fetchedData.map(toCharacterListItemPropsFromDto);
      return { characterListItems, meta: { pagesCount } };
    },
    {
      staleTime: 10000000, // TODO: reduce or delete value on production version
    },
  );
