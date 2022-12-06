import { API_AUCTION_URL } from '../constants.mjs';
// import { errorMessage } from '../../components/displayError.mjs';

const path = '/profiles/';
const action = '/media';
const method = 'PUT';
const name = localStorage.getItem('name');


// const formContainer = document.querySelector('#avatarFormContainer');
// const form = document.querySelector('#formUpdateAvatar');

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

  return response.json();
}
