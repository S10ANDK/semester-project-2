import { API_AUCTION_URL } from '../constants.mjs';

/**
 * Passes data in order to create a post
 */



 export async function createItem(itemData) {
    const method = 'POST'
    const token = localStorage.getItem('accessToken');

  const createItemUrl = API_AUCTION_URL + '/listings';
  const response = await fetch(createItemUrl, {
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    },
    method,
    body: JSON.stringify(itemData)
  })

  const result =  await response.json();
//   const statusCodeResponse = result.status;
  console.log(result);
//   console.log(statusCodeResponse);

//   if (statusCodeResponse === 200 ||
//     statusCodeResponse === 201 ||
//     statusCodeResponse === 204) {
//     alert('success');
//   } else {
//     alert('failed')
//   }
}

// export async function createItem(itemData) {
//     const token = localStorage.getItem('accessToken');
//     const options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`,
//       },
//       body: JSON.stringify(itemData),
//     };

//   const createItemUrl = API_AUCTION_URL + '/listings';
//   const response = await fetch(createItemUrl,
//     options)

//   return await response.json();
// }