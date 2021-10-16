import React from 'react';
import { usePageParams } from 'hooks/usePageParams';

export type GenderButtonProps = {
  gender: 'Male' | 'Female' | 'Any';
};

const GenderButton = ({ gender }: GenderButtonProps) => {
  const { setPageParams } = usePageParams();

  const handleButtonClick = () => {
    setPageParams({ newGender: gender });
  };
  return <button onClick={handleButtonClick}>{gender}</button>;
};

export default GenderButton;
