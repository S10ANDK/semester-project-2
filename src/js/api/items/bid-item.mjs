import { API_AUCTION_URL } from '../constants.mjs';
import { errorMessage } from '../../components/displayError.mjs';

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

  if (response.ok) {
    const formContainer = document.querySelector('#biddingForm');
    formContainer.classList.add('fade-in');
    formContainer.innerHTML = '';
    const successMessage = document.createElement('p');
    const successMessageText = 'Bid successfully submitted';
    successMessage.append(successMessageText);
    formContainer.appendChild(successMessage);
    setTimeout(function () {
      document.location.reload();
    }, 2500)
  } else {
    console.log('An error has occured');
    console.log(response.status);
    const formContainer = document.querySelector('#biddingForm');
    formContainer.classList.add('fade-in');
    formContainer.innerHTML = errorMessage(
      'An error has occured. Please try again.'
    );
    setTimeout(function () {
      document.location.reload();
    }, 2500)
  }
  return await response.json();
}
