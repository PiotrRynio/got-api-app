export type HouseDetailsItemType = {
  name: string;
  region: string;
  coatOfArms: string | undefined;
  words: string | undefined;
  titles: string[];
  seats: string[];
  hasDiedOut: boolean;
  hasOverlord: boolean;
  numberOfCadetBranches: number;
};
