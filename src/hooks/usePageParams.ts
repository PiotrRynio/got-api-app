import queryString from 'query-string';
import { useHistory, useLocation } from 'react-router-dom';

export const usePageParams = () => {
  const location = useLocation();
  const history = useHistory();
  const parsedPageParams = queryString.parse(location.search);

  const values = {
    page: String(parsedPageParams.page ?? '1'),
    pageSize: String(parsedPageParams.pageSize ?? '25'),
    gender: String(parsedPageParams.gender ?? 'Any'),
  };

  const setPageParams = ({
    newPageNumber = 1,
    newPageSize,
    newGender,
  }: {
    newPageNumber?: number;
    newPageSize?: number;
    newGender?: string;
  }) => {
    const newValues = {
      page: String(newPageNumber),
      pageSize: newPageSize ? String(newPageSize) : values.pageSize,
      gender: newGender ? String(newGender) : values.gender,
    };

    const parsedNewValues = queryString.stringify(
      { ...values, ...newValues },
      { skipEmptyString: true },
    );
    history.push(location.pathname + '?' + parsedNewValues);
  };

  return { ...values, setPageParams };
};
