export const API_URL = 'https://nf-api.onrender.com';
export const API_DATABASE = '/api/v1';
export const API_DATABASE_LISTINGS = '/auction/listings';
export const API_SOCIAL_URL = `${API_URL}${API_DATABASE}${API_DATABASE_LISTINGS}`;
export const listingsURLDesc = `${API_URL}${API_DATABASE}${API_DATABASE_LISTINGS}?sort=created&sortOrder=desc`;
export const listingsURLAsc = `${API_URL}${API_DATABASE}${API_DATABASE_LISTINGS}?sort=title&sortOrder=asc`;
