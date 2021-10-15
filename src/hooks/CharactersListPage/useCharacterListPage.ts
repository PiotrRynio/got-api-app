import { useQuery, UseQueryResult } from 'react-query';
import { CharactersListItemProps } from 'components/organisms/CharacterListItem/CharactersListItemProps';
import { UseCharacterListPageProps } from './UseCharacterListPageProps';
import { CharacterListPageItemDto } from './CharacterListPageItemDto';
import { API_URL } from 'constant/apiUrl';
import { fakeData } from '../../mocks/FakeDto/FakeData';

export enum ErrorCodes {
  NETWORK_ERROR = 'NETWORK_ERROR',
  NOT_FOUND = 'NOT_FOUND',
}

export const useCharacterListPage = ({
  page = 1,
  pageSize = 50,
}: UseCharacterListPageProps): UseQueryResult<CharactersListItemProps[]> =>
  useQuery(
    [`CharacterListPage-${page}-${pageSize}`],
    async () => {
      // const response = await fetch(`${API_URL}/characters?page=${page}&pageSize=${pageSize}`);
      // await validateResponse(response);
      // const fetchedData = await response.json();
      const fetchedData = fakeData;

      //TODO: fix for fetchedData after finish app
      return fetchedData.map((characterListPageItem: CharacterListPageItemDto) => ({
        name: characterListPageItem.name === '' ? undefined : characterListPageItem.name,
        aliases: characterListPageItem.aliases === [''] ? [] : characterListPageItem.aliases,
        born: yearFromDateTextInformation(characterListPageItem.born),
        died: yearFromDateTextInformation(characterListPageItem.died),
        ageOfDeath: ageOfDeath(
          yearFromDateTextInformation(characterListPageItem.died),
          yearFromDateTextInformation(characterListPageItem.born),
        ),
        gender: characterListPageItem.gender === '' ? undefined : characterListPageItem.gender,
        culture: characterListPageItem.culture === '' ? undefined : characterListPageItem.culture,
        allegiances: characterListPageItem.allegiances,
      }));
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

const yearFromDateTextInformation = (dateTextInformation: string) => {
  if (dateTextInformation === '') {
    return undefined;
  }

  const acYearRegExp = /[0-9]{1,3}\sAC/i;
  const acYear = dateTextInformation.match(acYearRegExp);
  if (acYear) {
    const numberYearRegExp = /[0-9]{1,3}/i;
    return Number(acYear[0].match(numberYearRegExp));
  }

  const bcYearRegExp = /[0-9]{1,3}\sAC/i;
  const bcYear = dateTextInformation.match(bcYearRegExp);
  if (bcYear) {
    const numberYearRegExp = /[0-9]{1,3}/i;
    return Number(bcYear[0].match(numberYearRegExp));
  }

  return undefined;
};

const ageOfDeath = (
  yearOfDeath: number | undefined,
  yearOfBirth: number | undefined,
): number | undefined => (yearOfDeath && yearOfBirth ? yearOfDeath - yearOfBirth : undefined);
