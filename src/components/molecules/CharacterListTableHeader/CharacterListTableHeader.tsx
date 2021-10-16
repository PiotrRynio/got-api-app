import React from 'react';
import { TableCell, Wrapper } from './CharacterListTableHeader.styles';
import Typography from '../../atoms/Typography/Typography';
import { TypographyTag } from '../../atoms/Typography/TypographyTags';

export const CharacterListTableHeader = () => {
  const headersText = ['Character', 'Alive', 'Gender', 'Culture', 'Allegiances'];
  return (
    <Wrapper>
      {headersText.map((headerText) => (
        <TableCell key={headerText}>
          <Typography typographyTag={TypographyTag.HEADING_4}>{headerText}</Typography>
        </TableCell>
      ))}
    </Wrapper>
  );
};
