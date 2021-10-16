import { HouseDetailsDto } from './HouseDetailsDto';
import { toHouseDetailsItemFromDto } from './toHouseDetailsItemFromDto';
import { HouseDetailsItemType } from './HouseDetailsItemType';

describe('toHouseDetailsItemFromDto', () => {
  it('should return correct data, if receive correct House Ashford of Ashford data', async () => {
    // given
    const houseDto: HouseDetailsDto = houseAshfordOfAshford;

    // when
    const houseDetailsItem = toHouseDetailsItemFromDto(houseDto);

    // then
    const correctHouseDetailsItem: HouseDetailsItemType = {
      name: 'House Ashford of Ashford',
      region: 'The Reach',
      coatOfArms: 'Tenny, a sun in splendour beneath a chevron inverted argent',
      words: 'Our Sun Shines Bright',
      titles: ['Lord of Ashford'],
      seats: ['Ashford'],
      hasDiedOut: false,
      hasOverlord: true,
      numberOfCadetBranches: 0,
    };

    expect(houseDetailsItem).toStrictEqual(correctHouseDetailsItem);
  });

  it('should return correct data, if receive correct House Ashwood data', async () => {
    // given
    const houseDto: HouseDetailsDto = houseAshwood;

    // when
    const houseDetailsItem = toHouseDetailsItemFromDto(houseDto);

    // then
    const correctHouseDetailsItem: HouseDetailsItemType = {
      name: 'House Ashwood',
      region: 'The North',
      coatOfArms: undefined,
      words: undefined,
      titles: [],
      seats: [],
      hasDiedOut: false,
      hasOverlord: true,
      numberOfCadetBranches: 0,
    };

    expect(houseDetailsItem).toStrictEqual(correctHouseDetailsItem);
  });
});

const houseAshfordOfAshford = {
  url: 'https://www.anapioficeandfire.com/api/houses/8',
  name: 'House Ashford of Ashford',
  region: 'The Reach',
  coatOfArms: 'Tenny, a sun in splendour beneath a chevron inverted argent',
  words: 'Our Sun Shines Bright',
  titles: ['Lord of Ashford'],
  seats: ['Ashford'],
  currentLord: '',
  heir: '',
  overlord: 'https://www.anapioficeandfire.com/api/houses/398',
  founded: '',
  founder: '',
  diedOut: '',
  ancestralWeapons: [''],
  cadetBranches: [],
  swornMembers: [
    'https://www.anapioficeandfire.com/api/characters/121',
    'https://www.anapioficeandfire.com/api/characters/641',
    'https://www.anapioficeandfire.com/api/characters/895',
    'https://www.anapioficeandfire.com/api/characters/1812',
  ],
};

const houseAshwood = {
  url: 'https://www.anapioficeandfire.com/api/houses/9',
  name: 'House Ashwood',
  region: 'The North',
  coatOfArms: '',
  words: '',
  titles: [''],
  seats: [''],
  currentLord: '',
  heir: '',
  overlord: 'https://www.anapioficeandfire.com/api/houses/34',
  founded: '',
  founder: '',
  diedOut: '',
  ancestralWeapons: [''],
  cadetBranches: [],
  swornMembers: [],
};
