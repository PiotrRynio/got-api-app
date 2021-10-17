import React from 'react';
import { Wrapper } from './HouseDetails.styles';
import Typography from 'components/atoms/Typography/Typography';
import { TypographyTag } from 'components/atoms/Typography/TypographyTags';
import { useHouseDetails } from '../../../apiHooks/HouseDetails/useHouseDetails';
import { FetchingStatus } from '../../atoms/FetchingStatus/FetchingStatus';

export type HouseDetailsProps = {
  houseId: number;
};

const HouseDetails = ({ houseId }: HouseDetailsProps) => {
  const { data, error, isLoading } = useHouseDetails(houseId);

  if (!data) {
    return (
      <Wrapper>
        <FetchingStatus error={error} isLoading={isLoading} />
      </Wrapper>
    );
  }
  const {
    name,
    region,
    coatOfArms,
    words,
    titles,
    seats,
    hasDiedOut,
    hasOverlord,
    numberOfCadetBranches,
  } = data.houseDetailsItem;

  return (
    <Wrapper>
      <Typography typographyTag={TypographyTag.OVERLINE}>Name of the House:</Typography>
      <Typography typographyTag={TypographyTag.REGULAR}>{name}</Typography>

      <Typography typographyTag={TypographyTag.OVERLINE}>Region:</Typography>
      <Typography typographyTag={TypographyTag.REGULAR}>{region}</Typography>

      <Typography typographyTag={TypographyTag.OVERLINE}>Coat of Arms:</Typography>
      <Typography typographyTag={TypographyTag.REGULAR}>
        {coatOfArms || 'no Coat of Arms'}
      </Typography>

      <Typography typographyTag={TypographyTag.OVERLINE}>Words:</Typography>
      <Typography typographyTag={TypographyTag.REGULAR}>{words || 'no words'}</Typography>

      <Typography typographyTag={TypographyTag.OVERLINE}>Titles:</Typography>
      {titles.length === 0 ? (
        <Typography typographyTag={TypographyTag.REGULAR}>no titles</Typography>
      ) : (
        titles.map((title) => (
          <Typography typographyTag={TypographyTag.REGULAR} key={title}>
            {title}
          </Typography>
        ))
      )}

      <Typography typographyTag={TypographyTag.OVERLINE}>Seats:</Typography>
      {seats.length === 0 ? (
        <Typography typographyTag={TypographyTag.REGULAR}>no seats</Typography>
      ) : (
        titles.map((seat) => (
          <Typography typographyTag={TypographyTag.REGULAR} key={seat}>
            {seat}
          </Typography>
        ))
      )}

      <Typography typographyTag={TypographyTag.OVERLINE}>Has died out:</Typography>
      <Typography typographyTag={TypographyTag.REGULAR}>{hasDiedOut ? 'yes' : 'no'}</Typography>

      <Typography typographyTag={TypographyTag.OVERLINE}>Has overlord:</Typography>
      <Typography typographyTag={TypographyTag.REGULAR}>{hasOverlord ? 'yes' : 'no'}</Typography>

      <Typography typographyTag={TypographyTag.OVERLINE}>Number of Cadet Branches:</Typography>
      <Typography typographyTag={TypographyTag.REGULAR}>{numberOfCadetBranches}</Typography>
    </Wrapper>
  );
};

export default HouseDetails;
