export type CharacterListPageItemDto = {
  url: string;
  name: string;
  aliases: string[];
  born: string;
  died: string;
  gender: 'Male' | 'Female';
  culture: string;
  allegiances: string[];
};
