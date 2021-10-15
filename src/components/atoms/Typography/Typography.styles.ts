import styled from 'styled-components';

export const Regular = styled.p`
  ${({ theme }) => theme.mixins.typography.Regular};
`;
export const Overline = styled.p`
  ${({ theme }) => theme.mixins.typography.overline};
`;
export const Heading2 = styled.h2`
  ${({ theme }) => theme.mixins.typography.heading5};
`;
export const Heading4 = styled.h4`
  ${({ theme }) => theme.mixins.typography.heading4};
`;
