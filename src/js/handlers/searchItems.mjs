const searchField = document.querySelector('#searchField');

/**
 * Search filter listener, listening for text string in the search input
 */

export async function filterList() {
  const filter = searchField.value.toLowerCase();
  const listItems = document.querySelectorAll('.item');

  listItems.forEach((item) => {
    let value = item.textContent;

    if (value.toLocaleLowerCase().includes(filter.toLowerCase())) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}

if (searchField) {
  searchField.addEventListener('keyup', filterList);
}
