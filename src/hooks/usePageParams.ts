import queryString from 'query-string';
import { useHistory, useLocation } from 'react-router-dom';

export const usePageParams = () => {
  const location = useLocation();
  const history = useHistory();
  const parsedPageParams = queryString.parse(location.search);

  const values = {
    page: String(parsedPageParams.page ?? '1'),
    pageSize: String(parsedPageParams.pageSize ?? '25'),
  };

  const setPageParams = ({
    newPageNumber = 1,
    newPageSize,
  }: {
    newPageNumber?: number;
    newPageSize?: number;
  }) => {
    const newValues = {
      page: String(newPageNumber),
      pageSize: newPageSize ? String(newPageSize) : values.pageSize,
    };

    const parsedNewValues = queryString.stringify(
      { ...values, ...newValues },
      { skipEmptyString: true },
    );
    history.push(location.pathname + '?' + parsedNewValues);
  };

  return { ...values, setPageParams };
};
