import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 0 16px;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  padding: 16px;
`;

export const CharacterListItemsWrapper = styled.div`
  overflow: scroll;
  width: 100%;
  height: 60vh;
`;

export const NoResultStatusWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.xl};

  margin: 30px 0;
`;

export const StyledNoResultStatusHeader = styled.h4`
  ${({ theme }) => theme.mixins.typography.heading6};
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin: 10px 0 15px;
`;

export const StyledNoResultStatusButton = styled.button`
  ${({ theme }) => theme.mixins.typography.regular};
  overflow: hidden;
  position: relative;
  margin: 30px 0;
  padding: 7px 15px;
  width: 120px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-decoration: none;

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    bottom: -50%;
    left: -50%;
    background: linear-gradient(
      to bottom,
      rgba(229, 172, 142, 0),
      rgba(255, 255, 255, 0.5) 50%,
      rgba(229, 172, 142, 0)
    );
    transform: rotateZ(60deg) translate(-5em, 7.5em);
  }

  &:hover::after,
  &:focus::after {
    animation: sheen 1s forwards;
  }

  @keyframes sheen {
    100% {
      transform: rotateZ(60deg) translate(1em, -9em);
    }
  }
`;
