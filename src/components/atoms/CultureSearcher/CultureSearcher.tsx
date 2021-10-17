import React, { ChangeEvent } from 'react';
import { usePageParams } from 'hooks/usePageParams';
import { CultureSearcherInput } from './CultureSearcher.styles';
import Typography from '../Typography/Typography';
import { TypographyTag } from '../Typography/TypographyTags';

const CultureSearcher = () => {
  const { setPageParams, culture } = usePageParams();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPageParams({ newCulture: event.target.value });
  };
  return (
    <label>
      <Typography typographyTag={TypographyTag.OVERLINE}>Culture:</Typography>
      <CultureSearcherInput
        placeholder={'type full name...'}
        onChange={handleChange}
        value={culture}
      />
    </label>
  );
};

export default CultureSearcher;
