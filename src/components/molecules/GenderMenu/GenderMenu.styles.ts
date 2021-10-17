import styled from 'styled-components';

export const StyledSelectInput = styled.select`
  padding: 8px 16px 8px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  line-height: 120%;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  color: ${({ theme }) => theme.colors.primary};
`;
