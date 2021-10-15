import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const InitialHelmet = () => (
  <Helmet>
    <title>Rynio Piotr - My App</title>
    <link rel="stylesheet" href="./../assets/styles/fonts.css" />
  </Helmet>
);

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <InitialHelmet />
        <ThemeProvider theme={theme}>
          <Router>
            <GlobalStyles theme={theme} />
            {children}
          </Router>
        </ThemeProvider>{' '}
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default AppProviders;
