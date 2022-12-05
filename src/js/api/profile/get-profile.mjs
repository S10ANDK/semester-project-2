export async function getProfile(getProfileURL) {
  const token = localStorage.getItem('accessToken');

  const response = await fetch(getProfileURL, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });

  return await response.json();
}
