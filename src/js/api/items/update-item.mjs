import { API_AUCTION_URL } from '../constants.mjs';

const action = '/listings';
const method = 'put';

/**
 * Passes data in order to update a post
 */

export async function updateListing(itemData) {
  const token = localStorage.getItem('accessToken');

  const updatePostURL = `${API_AUCTION_URL}${action}/${itemData.id}`;
  const response = await fetch(updatePostURL, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    method,
    body: JSON.stringify(itemData),
  });

  return await response.json();
}
