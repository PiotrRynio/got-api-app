import React from 'react';
import { CharacterListItemProps } from './CharacterListItemProps';
import { TableCell, Wrapper } from './CharacterListItem.styles';
import { Link } from 'react-router-dom';
import Typography from '../../atoms/Typography/Typography';
import { TypographyTag } from '../../atoms/Typography/TypographyTags';

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
  return (
    <Wrapper>
      <TableCell>
        <Typography typographyTag={TypographyTag.REGULAR}>
          {name}
          {name && aliases && ', '}
          {aliases?.map((alias, index) => `${alias}${aliases?.length > index + 1 ? ', ' : ''}`)}
        </Typography>{' '}
      </TableCell>
      <TableCell>
        <Typography typographyTag={TypographyTag.REGULAR}>
          {!born && !died ? 'Unknown' : undefined}
          {!born && died ? 'No' : undefined}
          {born && !died ? 'Yes' : undefined}
          {born && died ? `No, died at ${ageOfDeath} years old` : undefined}
        </Typography>{' '}
      </TableCell>
      <TableCell>
        <Typography typographyTag={TypographyTag.REGULAR}>{gender}</Typography>
      </TableCell>
      <TableCell>
        <Typography typographyTag={TypographyTag.REGULAR}>{culture}</Typography>
      </TableCell>
      <TableCell>
        <Typography typographyTag={TypographyTag.REGULAR}>
          {allegiancesIds &&
            allegiancesIds.map((id, index) => (
              <Link to={`houses/${id}`} key={id}>
                {`${id}${allegiancesIds?.length > index + 1 ? ', ' : ''}`}
              </Link>
            ))}
        </Typography>
      </TableCell>
    </Wrapper>
  );
};

export default CharacterListItem;
