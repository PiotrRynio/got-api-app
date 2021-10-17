import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  min-height: 30px;
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.lightSoft};
`;

export const TableCell = styled.section`
  text-transform: uppercase;
`;
