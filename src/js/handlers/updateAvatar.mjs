import { updateAvatar } from '../api/profile/update-avatar.mjs';

export function setFormUpdateAvatarListener() {
  const form = document.querySelector('#formUpdateAvatar');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const avatar = form.avatar.value;

      const avatarObject = {
        avatar,
      };

      updateAvatar(avatarObject);
    });
  }
}
