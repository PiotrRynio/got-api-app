import React, { ChangeEvent } from 'react';
import { usePageParams } from 'hooks/usePageParams';

export const GenderMenu = () => {
  const { gender, setPageParams } = usePageParams();

  const genderMenuItems = [{ gender: 'Male' }, { gender: 'Female' }, { gender: 'Any' }];

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPageParams({ newGender: event.target.value });
  };

  return (
    <label>
      Gender filter:
      <select value={gender} name="pageSize" onChange={(event) => handleChange(event)}>
        {genderMenuItems.map(({ gender }) => (
          <option value={gender} key={gender}>
            {gender}
          </option>
        ))}
      </select>
    </label>
  );
};
