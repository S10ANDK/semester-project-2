/**
 * Changes the navigation to only display relevant links and information
 */

export function updateNavLinks() {
  const avatarContainer = document.querySelector('#avatarContainer');
  const avatarLink = document.querySelector('#avatarLink');
  const listItemLinkContainer = document.querySelector(
    '#listItemLinkContainer'
  );
  const viewProfileLinkContainer = document.querySelector(
    '#viewProfileLinkContainer'
  );
  const signedInAsContainer = document.querySelector('#signedInAsContainer');
  const loginLinkContainer = document.querySelector('#loginLinkContainer');
  const registerLinkContainer = document.querySelector(
    '#registerLinkContainer'
  );

  const avatar = document.createElement('img');
  avatar.classList.add('profile_image-small', 'rounded-2');
  avatar.src = '/assets/avatar-stock.png';
  avatarLink.append(avatar);

  const storedName = localStorage.getItem('name');
  const signedInAsText = document.createElement('p');
  signedInAsText.classList.add('signedInAsText');
  signedInAsText.append(`Signed in as: ${storedName}`);
  signedInAsContainer.append(signedInAsText);

  if (localStorage.getItem('name') === null) {
    loginLinkContainer.classList.remove('d-none');
    loginLinkContainer.classList.add('d-block');
    registerLinkContainer.classList.remove('d-none');
    registerLinkContainer.classList.add('d-block');
    signedInAsContainer.classList.add('d-none');
    viewProfileLinkContainer.classList.remove('d-block');
    viewProfileLinkContainer.classList.add('d-none');
    listItemLinkContainer.classList.add('d-none');
    avatarContainer.classList.remove('d-lg-inline');
    avatarContainer.classList.add('d-none');
    signedInAsContainer.classList.remove('d-block');
    signedInAsContainer.classList.add('d-none');
  } else {
    signedInAsContainer.classList.remove('d-none');
    signedInAsContainer.classList.add('d-block');
    loginLinkContainer.classList.remove('d-block');
    loginLinkContainer.classList.add('d-none');
    registerLinkContainer.classList.remove('d-block');
    registerLinkContainer.classList.add('d-none');
    listItemLinkContainer.classList.remove('d-none');
    listItemLinkContainer.classList.add('d-block');
    avatarContainer.classList.remove('d-lg-none');
    avatarContainer.classList.add('d-lg-inline');
    viewProfileLinkContainer.classList.remove('d-none');
    viewProfileLinkContainer.classList.add('d-block');
  }
}
