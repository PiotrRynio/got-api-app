import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Typography from 'components/atoms/Typography/Typography';
import { TypographyTag } from 'components/atoms/Typography/TypographyTags';
import HouseDetails from 'components/organisms/HouseDetails/HouseDetails';
import { Wrapper } from './House.styles';

const House = () => {
  const { pathname } = useLocation();
  const itemId = Number(pathname.substring(pathname.lastIndexOf('/') + 1));

  return (
    <Wrapper>
      <NavLink to="/">Home</NavLink>
      <Typography typographyTag={TypographyTag.HEADING_2}>House:</Typography>
      <HouseDetails houseId={itemId} />
    </Wrapper>
  );
};

export default House;
