export type CharactersListItemProps = {
  name: string | undefined;
  aliases: string[] | [];
  born: number | undefined;
  died: number | undefined;
  ageOfDeath: number | undefined;
  gender: 'Male' | 'Female';
  culture: string | undefined;
  allegiancesUrl: string[] | [];
};
