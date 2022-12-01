/**
 * Collects data from register form, turning the submitted data into an object.
 */

import { registerProfile } from '../api/auth/register.mjs';

export function setFormRegisterListener() {
  const form = document.querySelector('#formRegister');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const avatar = form.avatar.value;

      const profile = {
        name,
        email,
        password,
        avatar,
      };

      registerProfile(profile);
      // setTimeout(function timer() {
      //   window.location.href = '/html/login';
      // }, 5000);
      // alert('You have been registered');
    });
  }
}
