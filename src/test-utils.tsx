import React from 'react';
import { render } from '@testing-library/react';
import AppProviders from 'providers/AppProviders';
import { MemoryRouter } from 'react-router-dom';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <MemoryRouter initialEntries={['']}>
      <AppProviders>{children}</AppProviders>
    </MemoryRouter>
  );
};

const customRender = (ui: React.ReactElement, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
