import { HouseDetailsDto } from './HouseDetailsDto';
import { toHouseDetailsItemFromDto } from './toHouseDetailsItemFromDto';
import { HouseDetailsItemType } from './HouseDetailsItemType';

describe('toHouseDetailsItemFromDto', () => {
  it('should return correct data, if receive correct data', async () => {
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
      isDiedOut: false,
      isOverlord: true,
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
