import { API_AUCTION_URL } from '../constants.mjs';
import { errorMessage } from '../../components/displayError.mjs';

const action = '/listings';
const method = 'put';

/**
 * Passes data in order to update a post
 */

export async function updateListing(itemData) {
  const token = localStorage.getItem('accessToken');

  const updateItemURL = `${API_AUCTION_URL}${action}/${itemData.id}`;
  const response = await fetch(updateItemURL, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    method,
    body: JSON.stringify(itemData),
  });

  const formContainer = document.querySelector('#updateItemContainer');
  const form = document.querySelector('#updateItemForm');
  const id = itemData.id;

  if (response.ok) {
    form.style.display = 'none';
    form.classList.remove('d-flex');
    const success = document.createElement('p');
    const successText = document.createTextNode(
      'Success!'
    );

    success.appendChild(successText);
    formContainer.appendChild(success);
    formContainer.classList.add(
      'text-center',
      'mw-600',
      'mx-auto',
      'pt-3',
      'fade-in');

      const icon = document.createElement('img');
      icon.setAttribute('src', '/assets/success_icon.png');
      icon.classList.add('success_icon', 'text-center', 'mx-auto', 'pt-3');
      formContainer.appendChild(icon);

    setTimeout(function timer() {
      window.location.href = '/html/item-specific/?id=' + id;
    }, 2000);
  } else {
    console.log('An error has occured');
    console.log(response.status);
    form.style.display = 'none';
    form.classList.remove('d-flex');
    formContainer.classList.add('fade-in');
    formContainer.innerHTML = errorMessage(
      'An error has occured. Please refresh the page and try again.'
    );
  }

  return await response.json();
}
