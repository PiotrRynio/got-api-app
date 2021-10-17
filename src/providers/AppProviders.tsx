import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppProvider } from '../context/AppContext';

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
      <AppProvider>
        <HelmetProvider>
          <InitialHelmet />
          <ThemeProvider theme={theme}>
            <GlobalStyles theme={theme} />
            {children}
          </ThemeProvider>{' '}
        </HelmetProvider>
      </AppProvider>
    </QueryClientProvider>
  );
};

export default AppProviders;
