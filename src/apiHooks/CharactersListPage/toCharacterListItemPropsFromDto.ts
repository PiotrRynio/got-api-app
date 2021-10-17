import { CharacterListPageItemDto } from './CharacterListPageItemDto';
import { CharacterListItemProps } from '../../components/molecules/CharacterListItem/CharacterListItemProps';

export const toCharacterListItemPropsFromDto = (
  characterListPageItem: CharacterListPageItemDto,
): CharacterListItemProps => ({
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
  gender: characterListPageItem.gender,
  culture: characterListPageItem.culture === '' ? undefined : characterListPageItem.culture,
  allegiancesIds:
    allegiancesId(characterListPageItem.allegiances).length > 0
      ? allegiancesId(characterListPageItem.allegiances)
      : [],
});

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

const allegiancesId = (allegiancesUrls: string[]): number[] =>
  allegiancesUrls.map((url) => itemId(url));

const itemId = (url: string): number => Number(url.substring(url.lastIndexOf('/') + 1));
