import React from 'react';
import AppProviders from 'providers/AppProviders';
import { Wrapper } from './App.styles';
import Navbar from 'components/organisms/Navbar/Navbar';
// import Home from '../Home/Home';

function App() {
  return (
    <AppProviders>
      <Wrapper>
        <Navbar />
      </Wrapper>
    </AppProviders>
  );
}

export default App;
