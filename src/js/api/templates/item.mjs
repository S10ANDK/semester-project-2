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
    img.src = itemData.media[0];
    img.alt = `Image from ${itemData.title}`;
    img.onerror = function imageError() {
      img.src = '/assets/image_placeholder.png';
    };
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

export function itemTemplateSingle(itemData) {
  const item = document.createElement('div');
  item.classList.add('pt-5', 'px-lg-0');

  const img = document.createElement('img');
  img.classList.add('text-center', 'cardImg');
  console.log(itemData.media);

  if (itemData.media[0] === undefined) {
    img.src = '/assets/image_placeholder.png';
    img.alt = 'image placeholder';
    img.classList.add('galleryImages');
    item.append(img);
  } else {
    const imageGallery = document.createElement('div');
    imageGallery.setAttribute('id', 'imageGallery');
    imageGallery.setAttribute('data-bs-ride', 'carousel');
    imageGallery.setAttribute('data-carousel', '');
    imageGallery.classList.add('carousel', 'slide', 'rounded-4');
    const carouselInner = document.createElement('div');
    carouselInner.classList.add('carousel-inner');
    imageGallery.appendChild(carouselInner);

    const imgContainerFirst = document.createElement('div');
    imgContainerFirst.classList.add('carousel-item', 'active');
    const firstImage = document.createElement('img');
    firstImage.classList.add('galleryImages');
    firstImage.src = itemData.media[0];
    firstImage.classList.add('d-block', 'w-100', 'rounded-4');
    imgContainerFirst.appendChild(firstImage);
    carouselInner.appendChild(imgContainerFirst);
    firstImage.onerror = function imageError() {
      firstImage.src = '/assets/image_placeholder.png';
    };

    for (let i = 1; i < itemData.media.length; i++) {
      const imgContainer = document.createElement('div');
      imgContainer.classList.add('carousel-item');
      const img = document.createElement('img');
      img.classList.add('galleryImages', 'rounded-4');
      img.src = itemData.media[i];
      img.alt = `Image from ${itemData.title}`;
      img.onerror = function imageError() {
        img.src = '/assets/image_placeholder.png';
      };
      img.classList.add('d-block', 'w-100');
      imgContainer.appendChild(img);
      carouselInner.appendChild(imgContainer);
    }

    const navPrev = document.createElement('button');
    navPrev.classList.add('carousel-control-prev');
    navPrev.setAttribute('type', 'button');
    navPrev.setAttribute('data-bs-target', '#imageGallery');
    navPrev.setAttribute('data-bs-slide', 'prev');
    const spanPrevOne = document.createElement('span');
    spanPrevOne.classList.add('carousel-control-prev-icon');
    spanPrevOne.setAttribute('aria-hidden', 'true');
    const spanPrevTwo = document.createElement('span');
    spanPrevTwo.classList.add('visually-hidden');
    spanPrevTwo.innerText = 'Previous';
    navPrev.appendChild(spanPrevOne);
    navPrev.appendChild(spanPrevTwo);

    const navNext = document.createElement('button');
    navNext.classList.add('carousel-control-next');
    navNext.setAttribute('type', 'button');
    navNext.setAttribute('data-bs-target', '#imageGallery');
    navNext.setAttribute('data-bs-slide', 'next');
    const spanNextOne = document.createElement('span');
    spanNextOne.classList.add('carousel-control-next-icon');
    spanNextOne.setAttribute('aria-hidden', 'true');
    const spanNextTwo = document.createElement('span');
    spanNextTwo.classList.add('visually-hidden');
    spanNextTwo.innerText = 'Next';
    navNext.appendChild(spanNextOne);
    navNext.appendChild(spanNextTwo);

    imageGallery.appendChild(navPrev);
    imageGallery.appendChild(navNext);

    item.append(imageGallery);
  }

  const itemHeading = document.createElement('h2');
  itemHeading.classList.add('col', 'd-flex', 'itemHeading', 'mt-4');
  const itemHeadingText = document.createTextNode(itemData.title);
  itemHeading.appendChild(itemHeadingText);
  item.appendChild(itemHeading);

  const createdDateP = document.createElement('p');
  createdDateP.classList.add('createdDate', 'col');
  const createdDate = document.createTextNode(
    new Date(itemData.created).toGMTString()
  );
  createdDateP.appendChild(createdDate);
  item.appendChild(createdDateP);

  const updatedDateP = document.createElement('p');
  updatedDateP.classList.add('updatedDate', 'col');
  const updatedDate = document.createTextNode(
    new Date(itemData.updated).toGMTString()
  );
  updatedDateP.appendChild(updatedDate);
  item.appendChild(updatedDateP);

  const endsAtDateP = document.createElement('p');
  endsAtDateP.classList.add('endsAtDate', 'col');
  const endsAtDate = document.createTextNode(
    new Date(itemData.endsAt).toGMTString()
  );
  endsAtDateP.appendChild(endsAtDate);
  item.appendChild(endsAtDateP);

  console.log(itemData.seller.name);

  const nameLocalStorage = localStorage.getItem('name');
  if (itemData.seller.name === nameLocalStorage) {
    const idItem = itemData.id;
    const updateButton = document.createElement('a');
    updateButton.href = '/html/list-item/update/?id=' + idItem;
    updateButton.innerText = 'Update listing';
    item.appendChild(updateButton);
  }

  return item;
}

export function renderItemTemplate(itemData, parent) {
  parent.append(itemTemplateSingle(itemData));
}

export function renderItemsTemplate(itemDataList, parent) {
  parent.append(...itemDataList.map(itemTemplate));
}
