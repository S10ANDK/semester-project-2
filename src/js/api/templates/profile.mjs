export function profileTemplate(profileData) {
  const profileContentContainer = document.createElement('div');
  profileContentContainer.classList.add('mw-600', 'mx-auto');

  const name = document.createElement('h1');
  name.classList.add('py-4', 'mb-5', 'text-start');
  const nameText = document.createTextNode(profileData.name);
  const greetingText = `Hi there, ${nameText.nodeValue}!`;
  name.append(greetingText);
  profileContentContainer.appendChild(name);

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
      '.SVG',
      '.GIF'
    )
  ) {
    avatar.src = avatarUrl.nodeValue;
    profileContentContainer.appendChild(avatar);
  } else if (
    'string' &&
    !avatarUrl.nodeValue.includes(
      '.jpg',
      '.jpeg',
      '.png',
      '.webP',
      '.SVG',
      '.GIF'
    )
  ) {
    const jpg = '.jpg';
    const newAvatarUrl = `${avatarUrl.nodeValue}${jpg}`;
    avatar.src = newAvatarUrl;
    profileContentContainer.appendChild(avatar);
  } else {
    avatar.src = '/assets/avatar-stock.png';
    profileContentContainer.appendChild(avatar);
  }

  const editAvatarLink = document.createElement('a');
  editAvatarLink.classList.add('editAvatarLink', 'd-block', 'pt-2', 'mx-auto');
  editAvatarLink.href = '/html/profile/update/';
  const editAvatarLinkText = document.createTextNode('Edit avatar');
  editAvatarLink.append(editAvatarLinkText);
  profileContentContainer.appendChild(editAvatarLink);

  const email = document.createElement('p');
  email.classList.add('my-4');
  const emailText = document.createTextNode(profileData.email);
  email.append(emailText);
  profileContentContainer.appendChild(email);

  const creditsTitle = document.createElement('p');
  const creditsTitleText = document.createTextNode('Credits:');
  creditsTitle.append(creditsTitleText);
  profileContentContainer.appendChild(creditsTitle);

  const credits = document.createElement('p');
  credits.classList.add('creditsDisplayed');
  const creditsNumber = document.createTextNode(profileData.credits);
  credits.append(creditsNumber);
  profileContentContainer.appendChild(credits);

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
