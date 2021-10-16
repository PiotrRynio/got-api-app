import React from 'react';
import { CharacterListItemProps } from './CharacterListItemProps';
import { TableCell, Wrapper } from './CharacterListItem.styles';
import { Link } from 'react-router-dom';

const CharacterListItem = ({
  name,
  aliases,
  born,
  died,
  ageOfDeath,
  gender,
  culture,
  allegiancesIds,
}: CharacterListItemProps) => {
  console.log(aliases);
  return (
    <Wrapper>
      <TableCell>
        {name}
        {name && aliases && ', '}
        {aliases?.map((alias, index) => `${alias}${aliases?.length > index + 1 ? ', ' : ''}`)}
      </TableCell>
      <TableCell>
        {!born && !died ? 'Unknown' : undefined}
        {!born && died ? 'No' : undefined}
        {born && !died ? 'Yes' : undefined}
        {born && died ? `No, died at ${ageOfDeath} years old` : undefined}
      </TableCell>
      <TableCell>{gender}</TableCell>
      <TableCell>{culture}</TableCell>
      <TableCell>
        {allegiancesIds &&
          allegiancesIds.map((id, index) => (
            <Link to={`houses/${id}`} key={id}>
              {`${id}${allegiancesIds?.length > index + 1 ? ', ' : ''}`}
            </Link>
          ))}
      </TableCell>
    </Wrapper>
  );
};

export default CharacterListItem;
