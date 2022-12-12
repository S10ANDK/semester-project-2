import { API_AUCTION_URL } from '../constants.mjs';

const action = '/listings';

/**
 * Passes meta data in order to fetch posts from the server
 */

export async function getListingsUnauthorized(getListingsURL) {
  const response = await fetch(getListingsURL, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return await response.json();
}

export async function getListingUnauthorized() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const itemId = params.get('id');

  const getListingUrl = `${API_AUCTION_URL}${action}/${itemId}?_seller=true&_bids=true`;
  console.log(getListingUrl);
  const response = await fetch(getListingUrl, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return await response.json();
}
