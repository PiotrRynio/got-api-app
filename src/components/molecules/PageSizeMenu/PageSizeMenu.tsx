import React, { ChangeEvent } from 'react';
import { usePageParams } from 'hooks/usePageParams';
import Typography from 'components/atoms/Typography/Typography';
import { TypographyTag } from 'components/atoms/Typography/TypographyTags';
import { StyledSelectInput } from './PageSizeMenu.styles';

export const PageSizeMenu = () => {
  const { pageSize, setPageParams } = usePageParams();

  const pageSizeOptions = [{ pageSize: 10 }, { pageSize: 25 }, { pageSize: 50 }];

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPageParams({ newPageSize: Number(event.target.value) });
  };

  return (
    <>
      <label>
        <Typography typographyTag={TypographyTag.OVERLINE}> Choose page size:</Typography>
        <StyledSelectInput
          value={pageSize}
          name="pageSize"
          onChange={(event) => handleChange(event)}
        >
          {pageSizeOptions.map(({ pageSize }) => (
            <option value={pageSize} key={pageSize}>
              {pageSize}
            </option>
          ))}
        </StyledSelectInput>
      </label>
    </>
  );
};
