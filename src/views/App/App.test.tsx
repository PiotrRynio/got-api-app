import React from 'react';
import App from './App';
import { render, screen, fireEvent, waitFor, waitForElementToBeRemoved } from '../../test-utils';

describe('App component', () => {
  it('renders app component with app logo', () => {
    // when
    render(<App />);

    // then
    const logo = screen.getByRole('img', { name: /app logo/i });
    expect(logo).toHaveAttribute('src', 'logo.png');
    expect(logo).toHaveAttribute('alt', 'App logo of Game of Thrones');
  });

  it('should display loading status, if data are not fetched yet during component rendering', () => {
    // given
    render(<App />);

    // then
    const displayedStatus = screen.queryByRole(`status`);
    expect(displayedStatus).toHaveTextContent(/Loading.../i);
  });

  it('should find character, when page is loaded', async () => {
    // given
    render(<App />);

    //when
    await waitForElementToBeRemoved(() => screen.queryByRole(`status`));

    // then
    const character = screen.getByText(/Porridge/i);
    expect(character).toBeInTheDocument();
  });

  it('should go to house details page, when click on item link, if character has allegiances', async () => {
    // given
    render(<App />);
    await waitFor(() => screen.getByText(/Porridge/i));
    const link = screen.getByRole('link', {
      name: 'Link to the house of Porridge. It is 1 in order.',
    });

    //when
    fireEvent.click(link);
    await waitFor(() => screen.getByText(/NAME OF THE HOUSE/i));

    // then
    const textFromHouseDetails = screen.getByText(/a heart gules enflamed proper charged/i);
    expect(textFromHouseDetails).toBeInTheDocument();
  });

  it('should display character list page again, when click "home" link after entering on home details page', async () => {
    // given
    await render(<App />);
    screen.queryByText(/Porridge/i);
    const link = await screen.findByRole('link', {
      name: 'Link to the house of Porridge. It is 1 in order.',
    });
    fireEvent.click(link);
    await waitFor(() => screen.getByText(/NAME OF THE HOUSE/i));

    //when
    const homeLink = screen.getByRole('link', { name: /Home/i });
    fireEvent.click(homeLink);
    await waitFor(() => screen.getByText(/The Daughter of the Dusk/i));

    // then
    const textFromHouseDetails = screen.getByText(/High Septon, The High Sparrow/i);
    expect(textFromHouseDetails).toBeInTheDocument();
  });
});
