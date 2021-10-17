import { useQuery, UseQueryResult } from 'react-query';
import { HouseDetailsItemType } from './HouseDetailsItemType';
import { API_URL } from 'constant/apiUrl';
import { validateResponse } from '../validateResponse';
import { toHouseDetailsItemFromDto } from './toHouseDetailsItemFromDto';

export const useHouseDetails = (
  houseId: number,
): UseQueryResult<{
  houseDetailsItem: HouseDetailsItemType;
}> =>
  useQuery(
    [`HouseDetailsItem-${houseId}`],
    async () => {
      const response = await fetch(`${API_URL}/houses/${houseId}`);
      await validateResponse(response);
      const fetchedData = await response.json();

      const houseDetailsItem = toHouseDetailsItemFromDto(fetchedData);
      return { houseDetailsItem };
    },
    {
      staleTime: 600000,
    },
  );
