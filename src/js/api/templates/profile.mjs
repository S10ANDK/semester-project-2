export function profileTemplate(profileData) {
  const profileContentContainer = document.createElement('div');
  profileContentContainer.classList.add('mw-1000', 'mx-auto');

  const greetingContainer = document.querySelector('#upperDiv');
  greetingContainer.classList.add('d-flex', 'justify-content-between');
  const name = document.createElement('h1');
  name.setAttribute('id', 'profileHeader');
  name.classList.add('mt-3', 'mb-5', 'ms-4', 'text-start', 'col-8');
  const nameText = document.createTextNode(profileData.name);
  const greetingText = `Welcome, ${nameText.nodeValue}!`;
  name.append(greetingText);
  greetingContainer.appendChild(name);

  profileContentContainer.appendChild(greetingContainer);

  const profileInfoContainer = document.createElement('div');
  profileInfoContainer.classList.add(
    'py-5',
    'mw-800',
    'mx-auto',
    'border',
    'border-2',
    'rounded-3'
  );
  profileInfoContainer.setAttribute('id', 'profileInfoContainer');

  const avatar = document.createElement('img');
  avatar.classList.add('rounded-3', 'avatar');
  const avatarUrl = document.createTextNode(profileData.avatar);

  if (
    typeof avatarUrl.nodeValue === 'string' &&
    avatarUrl.nodeValue.includes(
      '.jpg',
      '.jpeg',
      '.png',
      '.webP',
      '.svg',
      '.gif'
    )
  ) {
    avatar.src = avatarUrl.nodeValue;

    profileInfoContainer.appendChild(avatar);
    profileContentContainer.appendChild(profileInfoContainer);
  } else if (
    typeof avatarUrl.nodeValue === 'string' &&
    !avatarUrl.nodeValue.includes(
      '.jpg',
      '.jpeg',
      '.png',
      '.webP',
      '.svg',
      '.gif'
    )
  ) {
    const jpg = '.jpg';
    const newAvatarUrl = `${avatarUrl.nodeValue}${jpg}`;
    avatar.src = newAvatarUrl;
    profileInfoContainer.appendChild(avatar);
    profileContentContainer.appendChild(profileInfoContainer);
  } else {
    avatar.src = '/assets/avatar-stock.png';
    profileInfoContainer.appendChild(avatar);
    profileContentContainer.appendChild(profileInfoContainer);
  }

  const editAvatarLink = document.createElement('a');
  editAvatarLink.classList.add('editAvatarLink', 'd-block', 'pt-2', 'mx-auto');
  editAvatarLink.href = '/html/profile/update/';
  const editAvatarLinkText = document.createTextNode('Edit avatar');
  editAvatarLink.append(editAvatarLinkText);
  profileInfoContainer.appendChild(editAvatarLink);
  profileContentContainer.appendChild(profileInfoContainer);

  const email = document.createElement('p');
  email.classList.add('my-4');
  const emailText = document.createTextNode(profileData.email);
  email.append(emailText);
  profileInfoContainer.appendChild(email);
  profileContentContainer.appendChild(profileInfoContainer);

  const creditsTitle = document.createElement('p');
  const creditsTitleText = document.createTextNode('Credits:');
  creditsTitle.append(creditsTitleText);
  profileInfoContainer.appendChild(creditsTitle);
  profileContentContainer.appendChild(profileInfoContainer);

  const credits = document.createElement('p');
  credits.classList.add('creditsDisplayed', 'p-3', 'mx-auto', 'rounded-3');
  const creditsNumber = document.createTextNode(profileData.credits);
  credits.append(creditsNumber);
  profileInfoContainer.appendChild(credits);
  profileContentContainer.appendChild(profileInfoContainer);

  // const wins = document.createElement('p');
  // const winsNumber = document.createTextNode(profileData.wins.length);
  // wins.append(winsNumber);
  // profileContentContainer.appendChild(wins);
  // console.log(profileData.wins.length);
  // console.log(profileData);

  return profileContentContainer;
}

export function renderProfile(profileData, parent) {
  parent.append(profileTemplate(profileData));
}
