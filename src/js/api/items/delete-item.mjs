import { API_AUCTION_URL } from '../constants.mjs';
import { errorMessage } from '../../components/displayError.mjs';

const action = '/listings';
const method = 'delete';

/**
 * Passes data in order to delete a post
 */

export async function removeItem(id) {
  const token = localStorage.getItem('accessToken');

  const removeItemURL = `${API_AUCTION_URL}${action}/${id}`;
  const response = await fetch(removeItemURL, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    method,
  });

  const formContainer = document.querySelector('#updateItemContainer');
  const form = document.querySelector('#updateItemForm');

  if (response.ok) {
    form.style.display = 'none';
    form.classList.remove('d-flex');
    const success = document.createElement('p');
    const successText = document.createTextNode(
      'Listing has successfully been deleted!'
    );

    success.appendChild(successText);
    formContainer.appendChild(success);
    formContainer.classList.add(
      'text-center',
      'mw-600',
      'mx-auto',
      'pt-3',
      'fade-in'
    );

    const icon = document.createElement('img');
    icon.setAttribute('src', '/assets/success_icon.png');
    icon.classList.add('success_icon', 'text-center', 'mx-auto', 'pt-3');
    formContainer.appendChild(icon);

    setTimeout(function timer() {
      window.location.href = '/';
    }, 3000);
  } else {
    console.log('An error has occured');
    console.log(response.status);
    form.style.display = 'none';
    form.classList.remove('d-flex');
    formContainer.classList.add('fade-in');
    formContainer.innerHTML = errorMessage(
      'An error has occured. Could not delete your Listing.'
    );
  }

  return await response.json();
}
