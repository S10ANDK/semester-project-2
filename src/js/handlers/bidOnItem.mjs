import { bidOnItem } from '../api/items/index.mjs';

export async function setFormBidOnItemListener() {
  const form = document.querySelector('#biddingForm');
  const submitButton = document.querySelector('#bidButton');

  if (form) {
    submitButton.addEventListener('click', (event) => {
      event.preventDefault();

      const amountString = form.amount.value;
      const amount = parseInt(amountString);

      const itemData = {
        amount,
      };
      bidOnItem(itemData);
    });
  }
}
