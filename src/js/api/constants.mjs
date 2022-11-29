export const API_URL = 'https://nf-api.onrender.com';
export const API_DATABASE = '/api/v1';
export const API_DATABASE_AUCTION = '/auction';
export const API_AUCTION_URL = `${API_URL}${API_DATABASE}${API_DATABASE_AUCTION}`;
export const auctionURLDesc = `${API_URL}${API_DATABASE}${API_DATABASE_AUCTION}/listings?sort=created&sortOrder=desc`;
export const auctionURLAsc = `${API_URL}${API_DATABASE}${API_DATABASE_AUCTION}/listings?sort=created&sortOrder=asc`;
