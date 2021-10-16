import { useQuery, UseQueryResult } from 'react-query';
import { CharacterListItemProps } from 'components/molecules/CharacterListItem/CharacterListItemProps';
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
  pageSize = 25,
}: UseCharacterListPageProps): UseQueryResult<CharacterListItemProps[]> =>
  useQuery(
    [`CharacterListPage-${page}-${pageSize}`],
    async () => {
      const response = await fetch(`${API_URL}/characters?page=${page}&pageSize=${pageSize}`);
      await validateResponse(response);
      const fetchedData = await response.json();
      // const fetchedData = fakeData;
      console.log(fetchedData);

      //TODO: fix for fetchedData after finish app
      return fetchedData.map((characterListPageItem: CharacterListPageItemDto) => ({
        id: itemId(characterListPageItem.url),
        name: characterListPageItem.name === '' ? undefined : characterListPageItem.name,
        aliases:
          characterListPageItem.aliases.length === 1 && characterListPageItem.aliases[0] === ''
            ? undefined
            : characterListPageItem.aliases,
        born: yearFromDateTextInformation(characterListPageItem.born),
        died: yearFromDateTextInformation(characterListPageItem.died),
        ageOfDeath: ageOfDeath(
          yearFromDateTextInformation(characterListPageItem.died),
          yearFromDateTextInformation(characterListPageItem.born),
        ),
        gender: characterListPageItem.gender === '' ? undefined : characterListPageItem.gender,
        culture: characterListPageItem.culture === '' ? undefined : characterListPageItem.culture,
        allegiancesIds:
          allegiancesId(characterListPageItem.allegiances).length > 0
            ? allegiancesId(characterListPageItem.allegiances)
            : undefined,
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

const yearFromDateTextInformation = (dateTextInformation: string): number | undefined => {
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
    return -Number(bcYear[0].match(numberYearRegExp));
  }

  return undefined;
};

const ageOfDeath = (
  yearOfDeath: number | undefined,
  yearOfBirth: number | undefined,
): number | undefined => (yearOfDeath && yearOfBirth ? yearOfDeath - yearOfBirth : undefined);

const allegiancesId = (allegiancesUrls: string[]): (string | undefined)[] =>
  allegiancesUrls.map((url) => itemId(url));

const itemId = (url: string): string | undefined => {
  const slashWithIdRegExp = /[/][0-9]{1,}$/i;
  const slashWithId = url.match(slashWithIdRegExp);
  if (!slashWithId) {
    return undefined;
  }
  const idRegExp = /[0-9]{1,}$/i;
  const id = url.match(idRegExp);
  return id ? id[0] : undefined;
};
