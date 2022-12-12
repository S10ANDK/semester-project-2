import { removeItem } from '../api/items/delete-item.mjs';

export async function setRemoveItemListener() {
  const deleteButton = document.querySelector('#deleteButton');
  deleteButton.addEventListener('click', () => {
    deleteItem();
  });
}

/**
 * Collects id from url, and passes it in as an argument in the removeItem function
 */

async function deleteItem() {
  const url = new URL(location.href);
  const id = url.searchParams.get('id');

  const item = await removeItem(id);
  removeItem(item);
}
