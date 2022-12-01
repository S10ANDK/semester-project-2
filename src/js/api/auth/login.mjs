import { API_AUCTION_URL } from '../constants.mjs';
import { errorMessage } from '../../components/displayError.mjs';

const path = '/auth/login';
const method = 'POST';

const formContainer = document.querySelector('#formContainer');
const form = document.querySelector('#formLogin');

/**
 * Authenticates user, and stores access token and details from server to localStorage.
 */

export async function loginProfile(profile) {
  const loginURL = API_AUCTION_URL + path;
  const body = JSON.stringify(profile);

  const response = await fetch(loginURL, {
    headers: {
      'Content-Type': 'application/json',
    },
    method,
    body,
  });

  const statusCodeResponse = response.status;
  console.log(statusCodeResponse);

  if (
    statusCodeResponse === 200 ||
    statusCodeResponse === 201 ||
    statusCodeResponse === 202 ||
    statusCodeResponse === 203 ||
    statusCodeResponse === 204
  ) {
    setTimeout(function timer() {
      window.location.href = '/';
    }, 500);
  } else if (statusCodeResponse === 401) {
    console.log('An error has occured');
    console.log(response.status);
    form.style.display = 'none';
    form.classList.remove('d-flex');
    formContainer.classList.add('fade-in');
    formContainer.innerHTML = errorMessage(
      `The E-mail address and/or password doesn't match any account. Please try again or sign up for an account`
    );
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

  const result = response.json();

  result.then((profile) => {
    const accessToken = profile.accessToken;
    localStorage.setItem('accessToken', accessToken);
  });

  result.then((profile) => {
    const name = profile.name;
    localStorage.setItem('name', name);
  });

  result.then((profile) => {
    const email = profile.email;
    localStorage.setItem('email', email);
  });

  result.then((profile) => {
    const avatar = profile.avatar;
    localStorage.setItem('avatar', avatar);
  });

  result.then((profile) => {
    const credits = profile.credits;
    localStorage.setItem('credits', credits);
  });
}
