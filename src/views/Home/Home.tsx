import React from 'react';
import { Wrapper } from './Home.styles';
import CharacterList from '../../components/organisms/CharacterList/CharacterList';

const Home = () => {
  return (
    <Wrapper>
      <CharacterList />
    </Wrapper>
  );
};

export default Home;
