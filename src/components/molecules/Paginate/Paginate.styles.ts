import styled from 'styled-components';

export const Wrapper = styled.nav`
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
  margin: 20px 0 20px;
  ul {
    display: flex;
    gap: 2px;

    @media (min-width: ${({ theme }) => theme.breakpoints.xxs}) {
      gap: 4px;
    }
  }
  li {
    ${({ theme }) => theme.mixins.typography.heading4};
    overflow: hidden;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-content: center;
    height: 30px;
    width: 30px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    background-color: transparent;
    cursor: pointer;

    @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
      height: 40px;
      width: 40px;
    }
  }
  li.active {
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.primary};
  }
  li.active a {
    color: ${({ theme }) => theme.colors.secondary};
  }
  li:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
  }
  a {
    display: block;
    width: 100%;
    line-height: 30px;
    text-align: center;

    @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
      line-height: 40px;
    }
  }
`;
