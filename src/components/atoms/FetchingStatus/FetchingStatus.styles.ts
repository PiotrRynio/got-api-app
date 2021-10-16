import styled from 'styled-components';

export const StyledText = styled.p`
  ${({ theme }) => theme.mixins.typography.heading6};
  font-size: ${({ theme }) => theme.fontSize.xl};
`;
