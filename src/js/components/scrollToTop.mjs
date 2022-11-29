const topButton = document.querySelector('#topButton');

window.onscroll = function scrollToTop() {
  topButton.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
};
