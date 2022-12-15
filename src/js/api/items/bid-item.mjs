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
    const icon = document.createElement('img');
    icon.setAttribute('src', '/assets/success_icon.png');
    icon.classList.add('success_icon-small', 'text-center', 'mx-auto');

    formContainer.appendChild(successMessage);
    formContainer.appendChild(icon);
    setTimeout(function () {
      document.location.reload();
    }, 2500)
  } else {
    console.log('An error has occured');
    console.log(response.status);
    const formContainer = document.querySelector('#biddingForm');
    formContainer.classList.add('fade-in', 'pb-3');
    formContainer.innerHTML = errorMessage(
      'Your bid might be too low. Please try again.'
    );
 
    setTimeout (function(){
      location.reload();  
    }, 3000);
  }
  console.log(response);
  return await response.json();
}
