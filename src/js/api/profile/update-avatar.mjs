import { API_AUCTION_URL } from '../constants.mjs';
import { errorMessage } from '../../components/displayError.mjs';

const path = '/profiles/';
const action = '/media';
const method = 'PUT';
const name = localStorage.getItem('name');


const formContainer = document.querySelector('#avatarFormContainer');
const form = document.querySelector('#formUpdateAvatar');

export async function updateAvatar(avatarObject) {
  const updateAvatarURL = API_AUCTION_URL + path + name + action;
  const body = JSON.stringify(avatarObject);

  const token = localStorage.getItem('accessToken');

  const response = await fetch(updateAvatarURL, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    method,
    body,
  });

  const statusCodeResponse = response.status;

  if (
    statusCodeResponse === 200 ||
    statusCodeResponse === 201 ||
    statusCodeResponse === 204
  ) {
    form.style.display = 'none';
    form.classList.remove('d-flex');
    const updateAvatarSuccess = document.createElement('p');
    const updateAvatarSuccessText = document.createTextNode(
      'Success!'
    );

    updateAvatarSuccess.appendChild(updateAvatarSuccessText);
    formContainer.appendChild(updateAvatarSuccess);
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
      window.location.href = '/html/profile/details';
    }, 2000);
  } else if (statusCodeResponse === 400) {
    console.log('An error has occured');
    console.log(response.status);
    form.style.display = 'none';
    form.classList.remove('d-flex');
    formContainer.classList.add('fade-in');
    formContainer.innerHTML = errorMessage(
      `Your chosen image cannot be accessed publicly. Please choose a different image from a different source.`
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

  return response.json();
}
