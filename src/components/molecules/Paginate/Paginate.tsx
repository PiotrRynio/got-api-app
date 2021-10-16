import React from 'react';
import ReactPaginate from 'react-paginate';
import { usePageParams } from 'hooks/usePageParams';
import { useAppContext } from 'context/AppContext';
import { Wrapper } from './Paginate.styles';

const Paginate = () => {
  const { page, setPageParams } = usePageParams();
  const { pagesCount } = useAppContext();

  const onPageChangeHandle = ({ selected }: { selected: number }) => {
    setPageParams({ newPageNumber: selected + 1 });
  };

  return (
    <>
      {Boolean(pagesCount) && (
        <Wrapper role="navigation">
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pagesCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={4}
            onPageChange={onPageChangeHandle}
            containerClassName={'pagination'}
            forcePage={Number(page) - 1}
            activeClassName={'active'}
          />
        </Wrapper>
      )}
    </>
  );
};

export default Paginate;
