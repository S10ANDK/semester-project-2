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
  // const item = document.querySelector('#contentContainerOne');
  const item = document.createElement('div');
  item.classList.add('row', 'px-lg-0');

  const img = document.createElement('img');
  img.classList.add('text-center', 'cardImg');

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
    imageGallery.classList.add(
      'carousel',
      'slide',
      'rounded-4',
      'col',
      'col-lg-6',
      'mx-auto',
      'mx-lg-0'
    );
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

  //tags displayed onto page
  const tagsContainer = document.createElement('div');
  tagsContainer.classList.add('py-3');

  if (itemData.tags.length === 0) {
    const noTags = document.createElement('p');
    noTags.innerText = 'No tags..';
    noTags.classList.add('fst-italic');
    tagsContainer.appendChild(noTags);
    item.appendChild(tagsContainer);
  } else {
    for (let i = 0; i < itemData.tags.length; i++) {
      const tag = document.createElement('p');
      const tagText = itemData.tags[i];
      tag.append(tagText);
      tagsContainer.appendChild(tag);
      item.appendChild(tagsContainer);
    }
  }

  // display sellers name onto page
  const sellerName = document.createElement('p');
  const sellerNameText = itemData.seller.name;
  sellerName.append(sellerNameText);

  item.appendChild(sellerName);

  // Displays link to update listing page
  const nameLocalStorage = localStorage.getItem('name');
  console.log(nameLocalStorage);
  console.log(itemData.seller.name);
  if (itemData.seller.name === nameLocalStorage) {
    const idItem = itemData.id;
    const updateButton = document.createElement('a');
    updateButton.href = '/html/list-item/update/?id=' + idItem;
    updateButton.innerText = 'Update listing';
    item.appendChild(updateButton);
  }

  // Creating and displaying listing header
  const itemHeading = document.createElement('h1');
  itemHeading.classList.add('col', 'd-flex');
  const itemHeadingText = document.createTextNode(itemData.title);
  itemHeading.appendChild(itemHeadingText);
  item.appendChild(itemHeading);

  // Displaying relevant dates
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

  // Displaying current highest bid onto page
  const bidsArrayReversed = itemData.bids.reverse();

  const highestBidContainer = document.createElement('div');
  highestBidContainer.classList.add('col-6', 'row', 'align-items-center');
  const highestBidTitle = document.createElement('p');
  highestBidTitle.classList.add('col-4');
  const highestBidTitleText = 'Highest bid:';
  highestBidTitle.append(highestBidTitleText);
  const highestBidAmount = document.createElement('p');
  highestBidAmount.classList.add(
    'col-8',
    'highestBidAmount',
    'text-center',
    'rounded-3'
  );

  highestBidContainer.appendChild(highestBidTitle);
  highestBidContainer.appendChild(highestBidAmount);

  if (itemData.bids.length === 0) {
    const highestBidAmountNumber = '0';
    highestBidAmount.append(highestBidAmountNumber);
    item.appendChild(highestBidContainer);
  } else {
    const highestBidAmountNumber = bidsArrayReversed[0].amount;
    highestBidAmount.append(highestBidAmountNumber);
    item.appendChild(highestBidContainer);
  }

  // Creating and displaying the "make a bid" button onto page
  const makeABidButtonContainer = document.createElement('div');
  if (itemData.seller.name === nameLocalStorage) {
    makeABidButtonContainer.classList.add('d-none');
  } else {
    makeABidButtonContainer.classList.add(
      'col',
      'col-lg-5',
      'text-center',
      'py-4'
    );
  }

  const makeABidButton = document.createElement('button');
  makeABidButton.classList.add(
    'btn',
    'btn-success',
    'btn-outline-success',
    'bid-button',
    'py-2'
  );
  makeABidButton.setAttribute('type', 'button');
  makeABidButton.setAttribute('data-bs-toggle', 'modal');
  makeABidButton.setAttribute('data-bs-target', '#bidModal');
  const makeABidButtonText = 'Make a bid';
  makeABidButton.append(makeABidButtonText);

  const listingDate = itemData.endsAt;
  let listingDateYear = listingDate;
  listingDateYear = listingDateYear.split('-')[0];
  let listingDateMonth = listingDate;
  listingDateMonth = listingDateMonth.split('-')[1];
  let listingDateDay = listingDate;
  listingDateDay = listingDateDay.split('T')[0];
  let listingDateDaySubStringyfied = listingDateDay.substring(8);

  const listingDateformatted =
    listingDateYear + listingDateMonth + listingDateDaySubStringyfied;
  let listingDateParsed = parseInt(listingDateformatted);

  const date = new Date();
  let currentDay = date.getDate();
  let currentMonth = date.getMonth() + 1;
  let currentYear = date.getFullYear();
  let currentDate = `${currentYear}${currentMonth}${currentDay}`;
  const currentDateParsed = parseInt(currentDate);

  if (listingDateParsed <= currentDateParsed) {
    makeABidButtonContainer.classList.add('d-none');
    const listingExpiredMessage = document.createElement('p');
    listingExpiredMessage.classList.add('fst-italic', 'my-4', 'ms-4');
    const listingExpiredMessageText = 'Listing has expired...';
    listingExpiredMessage.append(listingExpiredMessageText);
    item.appendChild(listingExpiredMessage);
  }

  if (localStorage.getItem('name') === null) {
    makeABidButtonContainer.classList.add('d-none');
    const listingExpiredMessage = document.createElement('p');
    listingExpiredMessage.classList.add('my-4', 'col-lg-5');
    const listingExpiredMessageText =
      'In order to bid on listed items you must be logged in. Please log in, or register for a new account.';
    listingExpiredMessage.append(listingExpiredMessageText);
    item.appendChild(listingExpiredMessage);
  }

  makeABidButtonContainer.appendChild(makeABidButton);
  item.appendChild(makeABidButtonContainer);

  // Adds input and button for making bids on listing if user is logged in
  // const biddingFormContainer = document.createElement('div');

  // if (localStorage.getItem('name') === null) {
  //   const loginMessage = document.createElement('p');
  //   const loginMessageText =
  //     'Please log in to our website to bid on this listing.';
  //   loginMessage.append(loginMessageText);
  //   biddingFormContainer.appendChild(loginMessage);
  //   item.appendChild(biddingFormContainer);
  // } else {
  //   const biddingForm = document.createElement('form');
  //   biddingForm.setAttribute('id', 'biddingForm');
  //   biddingForm.classList.add('form');

  // const amountLabel = document.createElement('label');
  // amountLabel.setAttribute('for', 'amount');
  // amountLabel.innerText = ''

  // const inputAmount = document.createElement('input');
  // inputAmount.setAttribute('type', 'number');
  // inputAmount.setAttribute('name', 'amount');
  // inputAmount.setAttribute('id', 'amount');
  // inputAmount.setAttribute('required', '');

  // const bidButton = document.createElement('button');
  // bidButton.innerText = 'Submit bid';
  // bidButton.setAttribute('type', 'button');
  // bidButton.setAttribute('id', 'bidButton');
  // bidButton.classList.add('btn', 'btn-success', 'btn-outline-success');

  // biddingForm.appendChild(inputAmount);
  // biddingForm.appendChild(bidButton);
  // biddingFormContainer.appendChild(biddingForm);
  // item.appendChild(biddingFormContainer);
  // }

  // display listing description onto page
  const descriptionContainer = document.createElement('div');
  const descriptionTitle = document.createElement('p');
  descriptionTitle.innerText = 'Description:';
  descriptionContainer.appendChild(descriptionTitle);
  const description = document.createElement('p');
  const descriptionText = itemData.description;
  description.append(descriptionText);
  descriptionContainer.appendChild(description);
  item.appendChild(descriptionContainer);

  // display amount of bids for listing onto page
  const bidAmount = document.createElement('p');
  bidAmount.classList.add('col', 'bidsAmount');

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

  // display bids title or message onto page
  if (itemData.bids.length === 0) {
    const noBidsMessage = document.createElement('p');
    const noBidsMessageText =
      'No current bids. Be the first to bid on this item!';
    noBidsMessage.append(noBidsMessageText);

    item.appendChild(noBidsMessage);
  } else {
    const biddersHeader = document.createElement('h2');
    biddersHeader.classList.add('py-3');
    const biddersHeaderText = 'Bids made on listing:';
    biddersHeader.append(biddersHeaderText);

    item.appendChild(biddersHeader);

    // Display bids made on listing onto page
    if (itemData.bids) {
      for (let i = 0; i < bidsArrayReversed.length; i++) {
        const allBidsContainer = document.createElement('div');
        allBidsContainer.classList.add('row');

        const bidderContainer = document.createElement('div');
        bidderContainer.classList.add(
          'py-3',
          'col',
          'col-md-6',
          'border',
          'border-primary',
          'rounded-2',
          'my-3'
        );

        const bidderCreatedDate = document.createElement('p');
        bidderCreatedDate.classList.add(
          'createdDate',
          'px-3',
          'pb-2',
          'ps-lg-4'
        );
        const bidderCreatedDateText = document.createTextNode(
          new Date(itemData.bids[i].created).toGMTString()
        );
        bidderCreatedDate.append(bidderCreatedDateText);
        bidderContainer.appendChild(bidderCreatedDate);

        const bidderSubContainer = document.createElement('div');
        bidderSubContainer.classList.add('row');

        const bidderNameP = document.createElement('p');
        const bidderNameText = itemData.bids[i].bidderName;
        bidderNameP.append(bidderNameText);
        bidderNameP.classList.add('col-8', 'col-lg-8', 'ms-3', 'ms-lg-4');
        bidderContainer.append(bidderNameP);

        const bidderAmount = document.createElement('p');
        bidderAmount.classList.add('col-3', 'col-lg-3', 'text-center');
        const bidderAmountNumber = itemData.bids[i].amount;
        bidderAmount.append(bidderAmountNumber);
        bidderContainer.appendChild(bidderAmount);

        bidderSubContainer.appendChild(bidderNameP);
        bidderSubContainer.appendChild(bidderAmount);
        bidderContainer.appendChild(bidderSubContainer);

        allBidsContainer.appendChild(bidderContainer);

        item.appendChild(allBidsContainer);
      }
    }
  }

  return item;
}

export function renderItemTemplate(itemData, parent) {
  parent.append(itemTemplateSingle(itemData));
}

export function renderItemsTemplate(itemDataList, parent) {
  parent.append(...itemDataList.map(itemTemplate));
}
