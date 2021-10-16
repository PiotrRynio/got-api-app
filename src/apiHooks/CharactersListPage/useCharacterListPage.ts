import { useQuery, UseQueryResult } from 'react-query';
import { CharacterListItemProps } from 'components/molecules/CharacterListItem/CharacterListItemProps';
import { UseCharacterListPageProps } from './UseCharacterListPageProps';
import { CharacterListPageItemDto } from './CharacterListPageItemDto';
import { API_URL } from 'constant/apiUrl';
import { fakeData } from '../../mocks/FakeDto/FakeData';
import parseLinkHeader from 'parse-link-header';
import { toCharacterListItemPropsFromDto } from './toCharacterListItemPropsFromDto';

export enum ErrorCodes {
  NETWORK_ERROR = 'NETWORK_ERROR',
  NOT_FOUND = 'NOT_FOUND',
}

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
      const fetchedData = await response.json();
      await validateResponse(response);
      // TODO: Remove this
      //
      // const pagesCount = 50;
      // const fetchedData = fakeData;
      // console.log(fetchedData);

      const characterListItems = fetchedData.map(toCharacterListItemPropsFromDto);
      return { characterListItems, meta: { pagesCount } };
    },
    {
      staleTime: 10000000, // TODO: reduce or delete value on production version
    },
  );

const validateResponse = async (response: Response) => {
  if (!response.ok) {
    const errorResponse = await response.json();
    if (errorResponse.status === 404) {
      throw new Error(ErrorCodes.NOT_FOUND);
    }
    throw new Error(ErrorCodes.NETWORK_ERROR);
  }
};
