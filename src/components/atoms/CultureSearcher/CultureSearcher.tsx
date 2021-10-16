import React, { ChangeEvent } from 'react';
import { usePageParams } from 'hooks/usePageParams';

const CultureSearcher = () => {
  const { setPageParams, culture } = usePageParams();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPageParams({ newCulture: event.target.value });
  };
  return <input onChange={handleChange} value={culture} />;
};

export default CultureSearcher;
