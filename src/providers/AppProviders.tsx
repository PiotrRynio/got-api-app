import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppProvider } from 'context/AppContext';
import { primaryFonts } from 'assets/styles/fonts';

const queryClient = new QueryClient();

const InitialHelmet = () => (
  <Helmet>
    <title>GoT API app</title>
    <link rel="stylesheet" href={primaryFonts} />
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
