import React from 'react';
import { usePageParams } from 'hooks/usePageParams';

export type PageSizeButtonProps = {
  buttonPageSize: number;
};

const PageSizeButton = ({ buttonPageSize }: PageSizeButtonProps) => {
  const { setPageParams } = usePageParams();

  const handleButtonClick = () => {
    setPageParams({ newPageSize: buttonPageSize });
  };
  return <button onClick={handleButtonClick}>{buttonPageSize}</button>;
};

export default PageSizeButton;
