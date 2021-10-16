import React from 'react';
import { StyledText } from './FetchingStatus.styles';

export type FetchingStatusProps = {
  error: unknown;
  isLoading: boolean;
};

export const FetchingStatus = ({ error, isLoading }: FetchingStatusProps) => {
  if (error) {
    return <StyledText role="status">Api error...</StyledText>;
  }
  if (isLoading) {
    return <StyledText role="status">Loading...</StyledText>;
  }
  return <></>;
};
