const logOutLink = document.querySelector('.logOutLink');

/**
 * Logs out user by removing objects from localStorage, and redirecting the user to home page.
 */

export function logOut() {
  logOutLink.addEventListener('click', () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('avatar');
    localStorage.removeItem('credits');

    alert('You have been logged out');

    window.location.href = '/';
  });
}
