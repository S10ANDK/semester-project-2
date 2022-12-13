import { auctionURLDesc } from '../api/constants.mjs';
import { auctionURLAsc } from '../api/constants.mjs';
import { getListingsUnauthorized } from '../api/items/get-items.mjs';
import * as templates from '../api/templates/item.mjs';

/**
 * Filters posts by created date, descending.
 */
const filterNewestButton = document.querySelector('#filterNewestButton');
const filterOldestButton = document.querySelector('#filterOldestButton');

async function filterDescending() {
  const filterNewestButton = document.querySelector('#filterNewestButton');
  const filterOldestButton = document.querySelector('#filterOldestButton');
  const getItemsURL = auctionURLDesc;

  try {
    const items = await getListingsUnauthorized(getItemsURL);
    const container = document.querySelector('#listingsContainer');
    container.innerHTML = '';
    templates.renderItemsTemplate(items, container);
    filterNewestButton.classList.add('btn-warning', 'btn-outline-warning');
    filterNewestButton.classList.remove('btn-info', 'btn-outline-info');
    filterOldestButton.classList.add('btn-info', 'btn-outline-info');
    filterOldestButton.classList.remove('btn-success', 'btn-outline-success');
  } catch {
    console.log('An error has occured');
  }
}

export async function activateFilterDesc() {
  filterNewestButton.addEventListener('click', filterDescending);
}

/**
 * Filters posts by created date, ascending.
 */

async function filterAscending() {
  const filterOldestButton = document.querySelector('#filterOldestButton');
  const filterNewestButton = document.querySelector('#filterNewestButton');
  const getItemsURL = auctionURLAsc;

  try {
    const items = await getListingsUnauthorized(getItemsURL);
    const container = document.querySelector('#listingsContainer');
    container.innerHTML = '';
    templates.renderItemsTemplate(items, container);
    filterOldestButton.classList.add('btn-warning', 'btn-outline-warning');
    filterOldestButton.classList.remove('btn-info', 'btn-outline-info');
    filterNewestButton.classList.add('btn-info', 'btn-outline-info');
    filterNewestButton.classList.remove('btn-success', 'btn-outline-success');
    // filterOldestButton.addEventListener('click', filterAscending);
  } catch {
    console.log('An error has occured');
  }
}

export async function activateFilterAsc() {
  filterOldestButton.addEventListener('click', filterAscending);
}
