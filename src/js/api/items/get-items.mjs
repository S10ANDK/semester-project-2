// import { API_AUCTION_URL } from '../constants.mjs';

// const action = '/listings';

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

// export async function getListingsAuthorized(getListingsURL) {
//   const token = localStorage.getItem('accessToken');

//   const response = await fetch(getListingsURL, {
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   return await response.json();
// }
