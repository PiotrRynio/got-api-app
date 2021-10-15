import React from 'react';
import { Wrapper, Stripe, Logo } from './Navbar.styles';
import logo from '../../../assets/images/logo.png';

const Navbar = () => {
  return (
    <Wrapper>
      <Logo src={logo} />
      <Stripe />
    </Wrapper>
  );
};

export default Navbar;
