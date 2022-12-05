export function profileTemplate(profileData) {
  const profileContentContainer = document.createElement('div');
  profileContentContainer.classList.add('mw-600', 'mx-auto');

  const name = document.createElement('p');
  const nameText = document.createTextNode(profileData.name);
  name.appendChild(nameText);
  profileContentContainer.appendChild(name);

  return profileContentContainer;
}

export function renderProfile(profileData, parent) {
  parent.append(profileTemplate(profileData));
}
