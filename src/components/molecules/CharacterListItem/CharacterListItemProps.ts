export type CharacterListItemProps = {
  id: number;
  name: string | undefined;
  aliases: string[] | undefined;
  born: number | undefined;
  died: number | undefined;
  ageOfDeath: number | undefined;
  gender: 'Male' | 'Female';
  culture: string | undefined;
  allegiancesIds: number[] | undefined;
};
