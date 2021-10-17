import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 30px;
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const TableCell = styled.div``;
