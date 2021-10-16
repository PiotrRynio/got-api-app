import { HouseDetailsItemType } from './HouseDetailsItemType';
import { HouseDetailsDto } from './HouseDetailsDto';

export const toHouseDetailsItemFromDto = (data: HouseDetailsDto): HouseDetailsItemType => {
  return {
    name: data.name,
    region: data.region,
    coatOfArms: data.coatOfArms === '' ? undefined : data.coatOfArms,
    words: data.words === '' ? undefined : data.words,
    titles: data.titles.length === 1 && data.titles[0] === '' ? [] : data.titles,
    seats: data.seats.length === 1 && data.seats[0] === '' ? [] : data.seats,
    hasDiedOut: Boolean(data.diedOut.length),
    hasOverlord: Boolean(data.overlord.length),
    numberOfCadetBranches: data.cadetBranches.length,
  };
};
