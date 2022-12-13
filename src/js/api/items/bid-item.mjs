import { API_AUCTION_URL } from '../constants.mjs';
// import { errorMessage } from '../../components/displayError.mjs';

export async function bidOnItem(itemData) {
  const method = 'POST';
  const token = localStorage.getItem('accessToken');
  const action = '/listings';
  const pathEnd = '/bids';

  const url = new URL(location.href);
  const id = url.searchParams.get('id');

  const bidOnItemUrl = `${API_AUCTION_URL}${action}/${id}${pathEnd}`;
  const response = await fetch(bidOnItemUrl, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    method,
    body: JSON.stringify(itemData)
  });
  console.log(bidOnItemUrl);
  console.log(response);
  return await response.json();
}
