import React from 'react';
import AppProviders from 'providers/AppProviders';
import { Body1 } from './App.styles';
import Home from '../Home/Home';

function App() {
  return (
    <AppProviders>
      <div>
        HelloWorld
        <Body1>Let's do it!</Body1>
        <Home />
      </div>
    </AppProviders>
  );
}

export default App;
