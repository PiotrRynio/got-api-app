import React, { ChangeEvent } from 'react';
import { usePageParams } from 'hooks/usePageParams';

export const PageSizeMenu = () => {
  const { pageSize, setPageParams } = usePageParams();

  const pageSizeOptions = [{ pageSize: 10 }, { pageSize: 25 }, { pageSize: 50 }];

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPageParams({ newPageSize: Number(event.target.value) });
  };

  return (
    <>
      <label>
        Choose page size:
        <select value={pageSize} name="pageSize" onChange={(event) => handleChange(event)}>
          {pageSizeOptions.map(({ pageSize }) => (
            <option value={pageSize} key={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
      </label>
    </>
  );
};
