import { bidOnItem } from '../api/items/index.mjs';

export async function setFormBidOnItemListener() {
  const form = document.querySelector('#biddingForm');
  const submitButton = document.querySelector('#bidButton');

  if (form) {
    submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      console.log('button working');

      const amountString = form.amount.value;
      const amount = parseInt(amountString);
      console.log(amount);
      //   const test = 'test';
      //   console.log(amount);

      //   const itemData = amount;

      const itemData = {
        amount,
      };
      console.log(itemData);
      bidOnItem(itemData);
    });
  }
}
