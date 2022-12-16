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
  item.setAttribute('id', 'specificItemsRendered');
  item.classList.add(
    'px-lg-0',
    'row',
    'g-0',
    'overflow-hidden',
    'py-5',
    'pt-4',
    'mx-3',
    'mx-sm-5'
  );

  const contentOneContainer = document.createElement('div');
  contentOneContainer.classList.add(
    'col-12',
    'col-lg-5',
    'ms-lg-4',
    'mx-auto',
    'contentContainer'
  );
  const contentOne = document.createElement('div');
  contentOne.classList.add('row', 'g-0');
  contentOneContainer.appendChild(contentOne);

  const contentTwoContainer = document.createElement('div');
  contentTwoContainer.classList.add(
    'col-12',
    'col-lg-6',
    'mt-3',
    'ms-lg-5',
    'ps-lg-4',
    'mx-auto',
    'contentContainer'
  );
  const contentTwo = document.createElement('div');
  contentTwo.classList.add('row', 'g-0');
  contentTwoContainer.appendChild(contentTwo);

  const contentThreeContainer = document.createElement('div');
  contentThreeContainer.classList.add(
    'col-12',
    'col-lg-12',
    'ms-lg-4',
    'contentContainer',
    'mx-auto'
  );
  const contentThree = document.createElement('div');
  contentThree.classList.add('row', 'g-0');
  contentThreeContainer.appendChild(contentThree);

  // Displaying listings images with a gallery
  const img = document.createElement('img');
  img.classList.add('text-center', 'cardImg');

  if (itemData.media[0] === undefined) {
    img.src = '/assets/image_placeholder.png';
    img.alt = 'image placeholder';
    img.classList.add('galleryImages', 'mx-auto');
    contentOne.append(img);
  } else {
    const imageGallery = document.createElement('div');
    imageGallery.setAttribute('id', 'imageGallery');
    imageGallery.setAttribute('data-bs-ride', 'carousel');
    imageGallery.setAttribute('data-carousel', '');
    imageGallery.classList.add(
      'carousel',
      'slide',
      'rounded-4',
      'col-12',
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
      firstImage.classList.add('galleryImages', 'placeholderImg');
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
        img.classList.add('galleryImages', 'placeholderImg');
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

    contentOne.append(imageGallery);
  }

  //tags displayed onto page
  const tagsContainer = document.createElement('div');
  tagsContainer.classList.add('col-12', 'pt-2', 'py-lg-3', 'd-inline', 'tags');

  if (itemData.tags.length === 0) {
    const noTags = document.createElement('p');
    noTags.innerText = 'No tags..';
    noTags.classList.add('fst-italic', 'my-0', 'my-lg-2');
    tagsContainer.appendChild(noTags);
    contentOne.appendChild(tagsContainer);
  } else {
    const firstTag = document.createElement('p');
    firstTag.classList.add('d-inline');
    const firstTagText = itemData.tags[0];
    firstTag.append(firstTagText);
    tagsContainer.appendChild(firstTag);

    for (let i = 1; i < itemData.tags.length; i++) {
      const tag = document.createElement('p');
      tag.classList.add('d-inline');
      const tagText = `, ${itemData.tags[i]}`;
      tag.append(tagText);
      tagsContainer.appendChild(tag);
    }
    contentOne.appendChild(tagsContainer);
  }

  // Displays link to update listing page
  const nameLocalStorage = localStorage.getItem('name');

  if (itemData.seller.name === nameLocalStorage) {
    const idItem = itemData.id;
    const updateButton = document.createElement('a');
    updateButton.classList.add(
      'btn',
      'btn-info',
      'btn-outline-info',
      'mb-5',
      'mt-2',
      'updateListingButton'
    );
    updateButton.href = '/html/list-item/update/?id=' + idItem;
    updateButton.innerText = 'Update listing';
    contentOne.appendChild(updateButton);
  }

  item.appendChild(contentOneContainer);

  // Display seller's name onto page
  const sellerName = document.createElement('p');
  sellerName.setAttribute('id', 'sellerName');
  sellerName.classList.add('col-12', 'col-lg-12');
  const sellerNameText = `Listed by ${itemData.seller.name}`;
  sellerName.append(sellerNameText);

  contentTwo.appendChild(sellerName);

  // Creating and displaying listing header
  const itemHeading = document.createElement('h1');
  itemHeading.classList.add('col-12', 'col-lg-12', 'mt-2', 'me-lg-3');
  const itemHeadingText = document.createTextNode(itemData.title);
  itemHeading.appendChild(itemHeadingText);
  contentTwo.appendChild(itemHeading);

  const headTitle = document.querySelector('#listingHeadTitle');
  headTitle.innerHTML = '';
  const headTitleText = itemData.title;
  headTitle.append(headTitleText);

  // Displaying relevant dates
  const datesContainer = document.createElement('div');
  datesContainer.classList.add('col-12', 'col-lg-12');

  const createdDateContainer = document.createElement('div');
  createdDateContainer.classList.add('d-flex');
  const createdDateTitle = document.createElement('p');
  createdDateTitle.classList.add('mb-1');
  const createdDateTitleText = 'Created:';
  createdDateTitle.append(createdDateTitleText);
  const createdDateP = document.createElement('p');
  createdDateP.classList.add(
    'itemSpecificDates',
    'ps-2',
    'col',
    'd-inline',
    'mb-0'
  );
  const createdDate = document.createTextNode(
    new Date(itemData.created).toGMTString()
  );
  createdDateP.appendChild(createdDate);
  createdDateContainer.appendChild(createdDateTitle);
  createdDateContainer.appendChild(createdDateP);
  datesContainer.appendChild(createdDateContainer);

  const updatedDateContainer = document.createElement('div');
  updatedDateContainer.classList.add('d-flex');
  const updatedDateTitle = document.createElement('p');
  const updatedDateTitleText = 'Updated:';
  updatedDateTitle.append(updatedDateTitleText);
  const updatedDateP = document.createElement('p');
  updatedDateP.classList.add('itemSpecificDates', 'ps-2', 'col', 'mb-5');
  const updatedDate = document.createTextNode(
    new Date(itemData.updated).toGMTString()
  );
  updatedDateP.appendChild(updatedDate);
  updatedDateContainer.appendChild(updatedDateTitle);
  updatedDateContainer.appendChild(updatedDateP);
  datesContainer.appendChild(updatedDateContainer);

  const endsAtDateTitle = document.createElement('p');
  endsAtDateTitle.classList.add('mb-1');
  const endsAtDateTitleText = 'Ending at:';
  endsAtDateTitle.append(endsAtDateTitleText);
  const endsAtDateP = document.createElement('p');
  endsAtDateP.classList.add('endsAtDate', 'col', 'fw-bold', 'mb-5');
  const endsAtDate = document.createTextNode(
    new Date(itemData.endsAt).toGMTString()
  );
  endsAtDateP.appendChild(endsAtDate);
  datesContainer.appendChild(endsAtDateTitle);
  datesContainer.appendChild(endsAtDateP);

  contentTwo.appendChild(datesContainer);

  // Displaying current highest bid onto page
  const bidsArrayReversed = itemData.bids.reverse();

  const highestBidContainer = document.createElement('div');
  highestBidContainer.classList.add(
    'col-12',
    'col-lg-12',
    'row',
    'align-items-center',
    'px-0',
    'pb-3'
  );
  const highestBidTitle = document.createElement('h2');
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
    contentTwo.appendChild(highestBidContainer);
  } else {
    const highestBidAmountNumber = bidsArrayReversed[0].amount;
    highestBidAmount.append(highestBidAmountNumber);
    contentTwo.appendChild(highestBidContainer);
  }

  // Creating and displaying the "make a bid" button onto page
  const makeABidButtonContainer = document.createElement('div');
  if (itemData.seller.name === nameLocalStorage) {
    makeABidButtonContainer.classList.add('d-none');
  } else {
    makeABidButtonContainer.classList.add(
      'col-12',
      'col-lg-12',
      'text-lg-start',
      'pt-3',
      'pb-5'
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
    listingExpiredMessage.classList.add('fst-italic', 'mb-4');
    const listingExpiredMessageText = 'Listing has expired...';
    listingExpiredMessage.append(listingExpiredMessageText);
    contentTwo.appendChild(listingExpiredMessage);
  }

  if (localStorage.getItem('name') === null) {
    makeABidButtonContainer.classList.add('d-none');
    const listingExpiredMessage = document.createElement('p');
    listingExpiredMessage.classList.add('mb-5', 'col-lg-12');
    const listingExpiredMessageText =
      'In order to bid on listed items you must be logged in. Please log in, or register for a new account.';
    listingExpiredMessage.append(listingExpiredMessageText);
    contentTwo.appendChild(listingExpiredMessage);
  }

  makeABidButtonContainer.appendChild(makeABidButton);
  contentTwo.appendChild(makeABidButtonContainer);

  // display listing description onto page
  const descriptionContainer = document.createElement('div');
  descriptionContainer.classList.add('col-12', 'col-lg-12', 'pb-4');
  const descriptionTitle = document.createElement('h2');
  descriptionTitle.innerText = 'Description:';
  descriptionContainer.appendChild(descriptionTitle);
  const description = document.createElement('p');
  description.classList.add('pt-2', 'me-lg-3');
  if (itemData.description) {
    const descriptionText = itemData.description;
    description.append(descriptionText);
    descriptionContainer.appendChild(description);
  } else {
    const descriptionText = 'No description provided..';
    description.append(descriptionText);
    description.classList.add('fst-italic');
    descriptionContainer.appendChild(description);
  }
  contentTwo.appendChild(descriptionContainer);

  item.appendChild(contentTwoContainer);

  // display bids header and number of bids
  if (itemData.bids.length === 0) {
    const noBidsMessage = document.createElement('p');
    noBidsMessage.classList.add('fst-italic');
    const noBidsMessageText = 'No current bids ...';
    noBidsMessage.append(noBidsMessageText);

    contentThree.appendChild(noBidsMessage);
  } else {
    const biddersTitleContainer = document.createElement('div');
    biddersTitleContainer.classList.add('col-12', 'col-lg-5', 'row');
    const biddersHeader = document.createElement('h2');
    biddersHeader.classList.add('py-3', 'col');
    const biddersHeaderText = 'Bids made:';
    biddersHeader.append(biddersHeaderText);
    biddersTitleContainer.appendChild(biddersHeader);

    const bidAmount = document.createElement('p');
    bidAmount.classList.add(
      'col',
      'bidsAmount',
      'bidsAmountSpecific',
      'py-3',
      'mb-0',
      'text-end'
    );
    if (itemData._count.bids === 1) {
      const currentBidText = document.createTextNode(
        `${itemData._count.bids} bid`
      );
      bidAmount.appendChild(currentBidText);
      biddersTitleContainer.appendChild(bidAmount);
    } else {
      const currentBidText = document.createTextNode(
        `${itemData._count.bids} bids`
      );
      bidAmount.appendChild(currentBidText);
      biddersTitleContainer.appendChild(bidAmount);
    }

    contentThree.appendChild(biddersTitleContainer);

    // Display bids made on listing onto page
    if (itemData.bids) {
      for (let i = 0; i < bidsArrayReversed.length; i++) {
        const allBidsContainer = document.createElement('div');

        const bidderContainer = document.createElement('div');
        bidderContainer.classList.add(
          'py-3',
          'col',
          'col-lg-5',
          'border',
          'border-primary',
          'rounded-2',
          'my-3'
        );

        const bidderCreatedDate = document.createElement('p');
        bidderCreatedDate.classList.add(
          'createdDate',
          'px-3',
          'ps-lg-4',
          'mb-2'
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
        bidderNameP.classList.add(
          'col-8',
          'col-lg-8',
          'ms-3',
          'ms-lg-4',
          'mb-1'
        );
        bidderContainer.append(bidderNameP);

        const bidderAmount = document.createElement('p');
        bidderAmount.classList.add('col-3', 'col-lg-3', 'text-center', 'mb-1');
        const bidderAmountNumber = itemData.bids[i].amount;
        bidderAmount.append(bidderAmountNumber);
        bidderContainer.appendChild(bidderAmount);

        bidderSubContainer.appendChild(bidderNameP);
        bidderSubContainer.appendChild(bidderAmount);
        bidderContainer.appendChild(bidderSubContainer);

        allBidsContainer.appendChild(bidderContainer);

        contentThree.appendChild(allBidsContainer);
      }

      contentThreeContainer.appendChild(contentThree);
    }
  }
  item.appendChild(contentThreeContainer);

  return item;
}

export function renderItemTemplate(itemData, parent) {
  parent.append(itemTemplateSingle(itemData));
}

export function renderItemsTemplate(itemDataList, parent) {
  parent.append(...itemDataList.map(itemTemplate));
}
