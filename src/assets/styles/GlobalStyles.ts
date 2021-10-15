import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import { Theme } from './themeType';

interface GlobalStylesProps {
  theme: Theme;
}

export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${() => theme.fontFamily.primary};
  }

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    border-left: 1px solid #000;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    -webkit-box-shadow: inset 0 0 6px ${({ theme }) => theme.colors.primary};
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primary};
    -webkit-box-shadow: inset 0 0 6px ${({ theme }) => theme.colors.primary};
  }
  ::-webkit-scrollbar-thumb:window-inactive {
    background: ${({ theme }) => theme.colors.primary};
  }
`;
