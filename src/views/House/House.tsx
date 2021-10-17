import React from 'react';
import { NavLink } from 'react-router-dom';
import Typography from 'components/atoms/Typography/Typography';
import { TypographyTag } from 'components/atoms/Typography/TypographyTags';
import HouseDetails from 'components/organisms/HouseDetails/HouseDetails';
import { Wrapper } from './House.styles';

const House = () => {
  //TODO: get params from URL

  return (
    <Wrapper>
      <NavLink to="/">Home</NavLink>
      <Typography typographyTag={TypographyTag.HEADING_2}>House:</Typography>
      <HouseDetails houseId={8} />
    </Wrapper>
  );
};

export default House;
