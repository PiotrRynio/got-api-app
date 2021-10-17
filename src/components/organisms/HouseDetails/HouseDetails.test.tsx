import React from 'react';
import { render, screen, waitFor, waitForElementToBeRemoved } from 'test-utils';
import HouseDetails from './HouseDetails';

describe('HouseDetails', () => {
  it(`should display loading status, if data are not fetched yet during component rendering`, async () => {
    // given
    const houseId = 8;
    render(<HouseDetails houseId={houseId} />);

    // then
    const displayedStatus = screen.queryByRole(`status`);
    expect(displayedStatus).toHaveTextContent(/Loading.../i);
  });

  it(`should remove loading status, when data are fetched, if component is rendered with 8 in argument`, async () => {
    // given
    const houseId = 8;
    render(<HouseDetails houseId={houseId} />);

    // when
    await waitForElementToBeRemoved(() => screen.queryByRole(`status`));

    // then
    const displayedStatus = screen.queryByRole(`status`);
    expect(displayedStatus).not.toBeInTheDocument();
  });

  it('should show house details, when data are fetched, if component is rendered with 8 in argument', async () => {
    // given
    const houseId = 8;
    render(<HouseDetails houseId={houseId} />);

    // when
    await waitFor(() => screen.queryByText(/Ashford of Ashford/i));

    // then
    const houseNameHeader = await screen.findByText(/NAME OF THE HOUSE/i);
    const houseName = await screen.findByText(/House Ashford of Ashford/i);
    const regionHeader = await screen.findByText(/REGION/i);
    const region = await screen.findByText(/Reach/i);
    const coatOfArms = await screen.findByText(/a sun in splendour beneath/i);
    const words = await screen.findByText(/Our Sun Shines Bright/i);
    expect(houseNameHeader).toBeInTheDocument();
    expect(houseName).toBeInTheDocument();
    expect(regionHeader).toBeInTheDocument();
    expect(region).toBeInTheDocument();
    expect(coatOfArms).toBeInTheDocument();
    expect(words).toBeInTheDocument();
  });
});
