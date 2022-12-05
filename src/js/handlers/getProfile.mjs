import * as urls from '../api/constants.mjs';
import * as profileMethods from '../api/profile/index.mjs';
import * as templates from '../api/templates/index.mjs';
import { errorMessage } from '../components/displayError.mjs';

const action = '/profiles/';

const topButton = document.querySelector('#topButton');
const profileContainer = document.querySelector('#profileContainer');

export async function getProfile() {
  const name = localStorage.getItem('name');
  //   const testUrl = `${urls.API_AUCTION_URL}${action}`
  const getProfileURL = `${urls.API_AUCTION_URL}${action}${name}`;
  //   console.log(testUrl);
  console.log(getProfileURL);
  try {
    const profile = await profileMethods.getProfile(getProfileURL);
    profileContainer.innerHTML = '';
    templates.renderProfile(profile, profileContainer);
    topButton.style.display = 'block';
  } catch {
    console.log('An error has occured');
    profileContainer.innerHTML = errorMessage('An error has occured');
  }
}
