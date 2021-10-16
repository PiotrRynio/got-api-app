import { renderHook } from '@testing-library/react-hooks';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useHouseDetails } from './useHouseDetails';
import { HouseDetailsItemType } from './HouseDetailsItemType';

const createWrapper = () => {
  // ✅ creates a new QueryClient for each test
  const queryClient = new QueryClient();
  return ({ children }: { children: any }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe('Api useHouseDetails Hooks tests', () => {
  describe('useHouseDetails', () => {
    // given
    it(`should start loading if you call hook`, async () => {
      const { result } = renderHook(() => useHouseDetails(8), {
        wrapper: createWrapper(),
      });

      // then
      expect(result.current.isLoading).toBe(true);
    });

    it('should be fetching data wih success, after waiting for data, if you call hook with 8 in argument', async () => {
      // given
      const { result, waitFor } = renderHook(() => useHouseDetails(8), {
        wrapper: createWrapper(),
      });

      // when
      await waitFor(() => result.current.isSuccess);

      // then
      const { error, isLoading, isLoadingError, isSuccess } = result.current;
      expect(isLoading).toBe(false);
      expect(error).toBe(null);
      expect(isLoadingError).toBe(false);
      expect(isSuccess).toBe(true);
      expect(result.current.isSuccess).toBe(true);
    });

    test('should return correct data, after waiting for data, if you call hook with 8 in argument,', async () => {
      // given
      const { result, waitFor } = renderHook(() => useHouseDetails(8), {
        wrapper: createWrapper(),
      });

      // when
      await waitFor(() => result.current.isSuccess);

      // then
      const correctHouseDetailsItem: HouseDetailsItemType = {
        name: 'House Ashford of Ashford',
        region: 'The Reach',
        coatOfArms: 'Tenny, a sun in splendour beneath a chevron inverted argent',
        words: 'Our Sun Shines Bright',
        titles: ['Lord of Ashford'],
        seats: ['Ashford'],
        hasDiedOut: false,
        hasOverlord: true,
        numberOfCadetBranches: 0,
      };
      expect(result.current.data).toStrictEqual({ houseDetailsItem: correctHouseDetailsItem });
    });
  });
});
