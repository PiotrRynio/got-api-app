import React, { ChangeEvent } from 'react';
import { usePageParams } from 'hooks/usePageParams';
import Typography from '../../atoms/Typography/Typography';
import { TypographyTag } from '../../atoms/Typography/TypographyTags';
import { StyledSelectInput } from '../PageSizeMenu/PageSizeMenu.styles';

export const GenderMenu = () => {
  const { gender, setPageParams } = usePageParams();

  const genderMenuItems = [{ gender: 'Male' }, { gender: 'Female' }, { gender: 'Any' }];

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPageParams({ newGender: event.target.value });
  };

  return (
    <label>
      <Typography typographyTag={TypographyTag.OVERLINE}>Gender filter:</Typography>
      <StyledSelectInput value={gender} name="pageSize" onChange={(event) => handleChange(event)}>
        {genderMenuItems.map(({ gender }) => (
          <option value={gender} key={gender}>
            {gender}
          </option>
        ))}
      </StyledSelectInput>
    </label>
  );
};
