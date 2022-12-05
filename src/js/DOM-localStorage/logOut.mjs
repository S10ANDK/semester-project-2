const logOutButton = document.querySelector('#logOutButton');

/**
 * Logs out user by removing objects from localStorage, and redirecting the user to home page.
 */

export function logOut() {
  logOutButton.addEventListener('click', () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('avatar');
    localStorage.removeItem('credits');

    window.location.href = '/';
  });
}
