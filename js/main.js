const elsitenavItem = document.querySelectorAll('.sitenav__item');
const elsitenavLink = elsitenavItem.querySelectorAll('.sitenav__link');
if (elsitenavLink) {
  elsitenavLink.addEventListener('click', function () {
    elsitenavItem.classList.remove('sitenav__item--active');
  });

}