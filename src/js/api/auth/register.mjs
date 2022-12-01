import { API_AUCTION_URL } from '../constants.mjs';
import { errorMessage } from '../../components/displayError.mjs';

const path = '/auth/register';
const method = 'POST';

const formContainer = document.querySelector('#formContainer');
const form = document.querySelector('#formRegister');

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

  const statusCodeResponse = response.status;

  if (statusCodeResponse === 201) {
    form.style.display = 'none';
    form.classList.remove('d-flex');
    const registerSuccess = document.createElement('p');
    const registerSuccessText = document.createTextNode(
      'Congratulations! You have successfully created a user profile. You will be redirected to the login page shortly.'
    );

    registerSuccess.appendChild(registerSuccessText);
    formContainer.appendChild(registerSuccess);
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
      window.location.href = '/html/login';
    }, 8000);
  } else if (statusCodeResponse === 400) {
    console.log('An error has occured');
    form.style.display = 'none';
    form.classList.remove('d-flex');
    formContainer.classList.add('fade-in');
    formContainer.innerHTML = errorMessage(
      'A user with the same email address and/or username is already registered. Please try again with different credentials. Refresh the page to start over.'
    );
  } else {
    console.log('An error has occured');
    console.log(response.status);
    form.style.display = 'none';
    form.classList.remove('d-flex');
    formContainer.classList.add('fade-in');
    formContainer.innerHTML = errorMessage(
      'An error has occured. Please try again after a few minutes by refreshing the page.'
    );
  }

  return response.json();
}
