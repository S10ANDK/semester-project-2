import * as urls from '../api/constants.mjs';
import * as itemMethods from '../api/items/index.mjs';
import * as templates from '../api/templates/index.mjs';

const action = '/listings';

export async function getItemsList() {
  const getListingsURL = `${urls.API_AUCTION_URL}${action}`;
  const items = await itemMethods.getListingsUnauthorized(getListingsURL);
  const container = document.querySelector('#listingsContainer');
  container.innerHTML = '';
  templates.renderItemsTemplate(items, container);
}
