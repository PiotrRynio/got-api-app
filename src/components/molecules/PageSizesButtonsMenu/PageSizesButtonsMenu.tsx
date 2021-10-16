import React from 'react';
import { usePageParams } from 'hooks/usePageParams';

export const PageSizeButtons = () => {
  const { setPageParams } = usePageParams();

  const pageSizesButtonsMenu = [{ pageSize: 10 }, { pageSize: 25 }, { pageSize: 50 }];

  const handleButtonClick = (pageSize: number) => {
    setPageParams({ newPageSize: pageSize });
  };

  return (
    <>
      Page size:
      {pageSizesButtonsMenu.map(({ pageSize }) => (
        <button key={pageSize} onClick={() => handleButtonClick(pageSize)}>
          {pageSize}
        </button>
      ))}
    </>
  );
};
