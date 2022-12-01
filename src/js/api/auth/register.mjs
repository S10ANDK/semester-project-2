import { API_AUCTION_URL } from '../constants.mjs';

const path = '/auth/register';
const method = 'POST';

export async function registerProfile(profile) {
  const registerURL = API_AUCTION_URL + path;
  const body = JSON.stringify(profile);

  const response = await fetch(registerURL, {
    headers: {
      'Content-Type': 'application/json',
    },
    method,
    body,
  });

  return await response.json();
}
