/**
 * Templates for rendering the post data content on to page.
 */

export function itemTemplate(itemData) {
  const item = document.createElement('a');
  const idItem = itemData.id;
  item.href = '/html/item-specific/?id=' + idItem;
  item.classList.add(
    'item',
    'text-decoration-none',
    'row',
    'w-100',
    'mw-290',
    'h-600',
    'mx-auto',
    'my-4',
    'border',
    'border-2',
    'rounded-3',
    'p-3'
  );

  const createdDateP = document.createElement('p');
  createdDateP.classList.add('createdDate', 'col');
  const createdDate = document.createTextNode(
    new Date(itemData.created).toGMTString()
  );
  createdDateP.appendChild(createdDate);
  item.appendChild(createdDateP);

  const img = document.createElement('img');
  img.classList.add('text-center', 'cardImg');

  if (itemData.media[0] === undefined) {
    img.src = '/assets/image_placeholder.png';
    img.alt = 'image placeholder';
    item.append(img);
  } else {
    img.src = itemData.media;
    img.alt = `Image from ${itemData.title}`;
    item.append(img);
  }

  const itemHeading = document.createElement('h2');
  itemHeading.classList.add('col', 'd-flex', 'itemHeading', 'mt-4');
  const itemHeadingText = document.createTextNode(itemData.title);
  itemHeading.appendChild(itemHeadingText);
  item.appendChild(itemHeading);

  if (itemData.description) {
    const bodyContainer = document.createElement('div');
    bodyContainer.classList.add('overflow-hidden', 'my-2', 'descriptionSmall');
    const bodyText = document.createTextNode(itemData.description);
    bodyContainer.appendChild(bodyText);
    item.appendChild(bodyContainer);
  } else {
    const bodyContainer = document.createElement('div');
    bodyContainer.classList.add(
      'overflow-hidden',
      'my-2',
      'descriptionSmall',
      'fst-italic'
    );
    const bodyText = document.createTextNode('No description provided..');
    bodyContainer.appendChild(bodyText);
    item.appendChild(bodyContainer);
  }

  const endsAtHeader = document.createElement('p');
  endsAtHeader.classList.add('endsAtHeader', 'd-flex', 'col-8');
  const endsAtText = document.createTextNode('Ending at:');
  endsAtHeader.appendChild(endsAtText);
  item.appendChild(endsAtHeader);

  const endingDateP = document.createElement('p');
  endingDateP.classList.add('endingDate', 'col-8');
  const endingDate = document.createTextNode(
    `${new Date(itemData.endsAt).toGMTString()}`
  );
  endingDateP.appendChild(endingDate);
  item.appendChild(endingDateP);

  const bidAmount = document.createElement('p');
  bidAmount.classList.add('col', 'bidsAmount', 'text-end');

  if (itemData._count.bids === 1) {
    const currentBidText = document.createTextNode(
      `${itemData._count.bids} bid`
    );
    bidAmount.appendChild(currentBidText);
    item.appendChild(bidAmount);
  } else {
    const currentBidText = document.createTextNode(
      `${itemData._count.bids} bids`
    );
    bidAmount.appendChild(currentBidText);
    item.appendChild(bidAmount);
  }

  const viewPostButton = document.createElement('a');
  viewPostButton.classList.add(
    'btn',
    'btn-primary',
    'btn-outline-success',
    'viewBtn'
  );
  const id = itemData.id;
  viewPostButton.href = '/html/item-specific/?id=' + id;
  const buttonText = document.createElement('p');
  buttonText.innerText = 'View Item';
  viewPostButton.appendChild(buttonText);
  item.appendChild(viewPostButton);

  return item;
}

export function renderItemsTemplate(itemDataList, parent) {
  parent.append(...itemDataList.map(itemTemplate));
}
