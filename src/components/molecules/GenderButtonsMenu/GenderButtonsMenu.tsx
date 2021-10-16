import React from 'react';
import { usePageParams } from 'hooks/usePageParams';

export const GenderButtonsMenu = () => {
  const { setPageParams } = usePageParams();

  const genderButtonsMenu = [{ gender: 'Male' }, { gender: 'Female' }, { gender: 'Any' }];

  const handleButtonClick = (gender: string) => {
    setPageParams({ newGender: gender });
  };

  return (
    <>
      Gender filtr:
      {genderButtonsMenu.map(({ gender }) => (
        <button key={gender} onClick={() => handleButtonClick(gender)}>
          {gender}
        </button>
      ))}
    </>
  );
};
