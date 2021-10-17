import React from 'react';
import AppProviders from 'providers/AppProviders';
import { Wrapper } from './App.styles';
import Navbar from 'components/organisms/Navbar/Navbar';
import Home from 'views/Home/Home';
import { Redirect, Route, Switch } from 'react-router-dom';
import House from '../House/House';

function App() {
  return (
    <AppProviders>
      <Wrapper>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/houses/:houseId">
            <House />
          </Route>
          <Route path="/">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Wrapper>
    </AppProviders>
  );
}

export default App;
