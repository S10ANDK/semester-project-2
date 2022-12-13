import { getListingUnauthorized, updateListing } from '../api/items/index.mjs';

/**
 * Collects data from the edit post form, turning the submitted data into an object.
 */

export async function setUpdateItemListener() {
  const form = document.querySelector('#updateItemForm');

  const url = new URL(location.href);
  const id = url.searchParams.get('id');

  if (form) {
    const button = form.querySelector('#updateButton');
    button.disabled = true;

    const item = await getListingUnauthorized(id);

    form.title.value = item.title;
    form.description.value = item.description;
    form.tags.value = item.tags;
    form.media.value = item.media;

    button.disabled = false;

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      let tagsObject = form.tags.value.split(',', '8');
      let mediaObject = form.media.value.split(',', '8');

      const title = form.title.value;
      const description = form.description.value;
      const tags = tagsObject;
      const media = mediaObject;

      if (mediaObject[0] === '') {
        const item = {
          title,
          description,
          tags,
        };
        item.id = id;
        console.log(item);
        updateListing(item);
      } else {
        const item = {
          title,
          description,
          tags,
          media,
        };
        console.log(item);
        updateListing(item);
      }
    });
  }
}
