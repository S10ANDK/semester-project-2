import { API_AUCTION_URL } from '../constants.mjs';
import { errorMessage } from '../../components/displayError.mjs';

/**
 * Passes data in order to create a post
 */

 export async function createItem(itemData) {
    const method = 'POST'
    const token = localStorage.getItem('accessToken');

  const createItemUrl = API_AUCTION_URL + '/listings';
  const response = await fetch(createItemUrl, {
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    },
    method,
    body: JSON.stringify(itemData)
  })

  const formContainer = document.querySelector('#createItemContainer');
  const form = document.querySelector('#createItemForm');

  if (response.ok ) {
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
      window.location.href = '/';
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