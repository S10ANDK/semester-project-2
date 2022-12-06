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

  // const storedAvatar = localStorage.getItem('avatar');
  const storedName = localStorage.getItem('name');

  if (localStorage.getItem('name') === null) {
    avatarContainer.classList.add('d-none');
    signedInAsContainer.classList.add('d-none');
    viewProfileLinkContainer.classList.add('d-none');
    listItemLinkContainer.classList.add('d-none');
  } else {
    const signedInAsText = document.createElement('p');
    signedInAsText.classList.add('signedInAsText');
    signedInAsText.append(`Signed in as: ${storedName}`);
    signedInAsContainer.append(signedInAsText);
    loginLinkContainer.style.display = 'none';
    registerLinkContainer.style.display = 'none';

    // const jpg = '.jpg';
    const avatar = document.createElement('img');
    avatarContainer.classList.add('d-lg-inline');
    avatar.classList.add('profile_image-small', 'rounded-2');
    avatar.src = '/assets/avatar-stock.png';
    avatarLink.append(avatar);
    // if (
    //   typeof storedAvatar[0] === 'string' &&
    //   !storedAvatar[0].includes(
    //     '.jpg',
    //     '.jpeg',
    //     '.png',
    //     '.webP',
    //     '.SVG',
    //     '.GIF'
    //   )
    // ) {
    //   const avatarUrl = `${storedAvatar}${jpg}`;
    //   avatar.src = avatarUrl;
    //   avatarLink.append(avatar);
    // } else if (typeof storedAvatar[0] === 'string') {
    //   const avatarUrl = storedAvatar;
    //   avatar.src = avatarUrl;
    //   avatarLink.append(avatar);
    // } else {
    //   avatar.src = '/assets/avatar-stock.png';
    //   avatarLink.append(avatar);
    // }
  }
}
