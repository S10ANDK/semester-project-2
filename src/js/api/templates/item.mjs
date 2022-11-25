/**
 * Templates for rendering the post data content on to page.
 */

export function itemTemplate(itemData) {
  const item = document.createElement('div');
  item.classList.add(
    'post',
    'row',
    'w-100',
    'max-width-600',
    'mx-auto',
    'my-5',
    'border',
    'rounded-3',
    'p-3',
    'text-bg-primary'
  );

  const itemHeading = document.createElement('h2');
  itemHeading.classList.add('itemHeading', 'col');
  const postHeadingText = document.createTextNode(itemData.title);
  itemHeading.appendChild(postHeadingText);
  item.appendChild(itemHeading);

  const createdDateP = document.createElement('p');
  createdDateP.classList.add('createdDate', 'col-12', 'col-sm-4', 'text-end');
  const createdDate = document.createTextNode(
    new Date(itemData.created).toGMTString()
  );
  createdDateP.appendChild(createdDate);
  item.appendChild(createdDateP);

  if (itemData.body) {
    const bodyContainer = document.createElement('div');
    bodyContainer.classList.add('bodyContainer', 'my-3');
    const bodyText = document.createTextNode(itemData.body);
    bodyContainer.appendChild(bodyText);
    item.appendChild(bodyContainer);
  }

  if (itemData.media) {
    const img = document.createElement('img');
    img.src = itemData.media;
    img.alt = `Image from ${itemData.title}`;
    img.classList.add('w-100', 'text-center');
    item.append(img);
  }

  const viewPostButton = document.createElement('a');
  viewPostButton.classList.add(
    'btn',
    'btn-primary',
    'btn-outline-success',
    'my-3'
  );
  const id = itemData.id;
  viewPostButton.href = '/html/item-specific/item/?id=' + id;
  const buttonText = document.createTextNode('View Item');
  viewPostButton.appendChild(buttonText);
  item.appendChild(viewPostButton);

  return item;
}

export function renderItemsTemplate(itemDataList, parent) {
  parent.append(...itemDataList.map(itemTemplate));
}
