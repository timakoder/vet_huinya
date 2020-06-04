const makeBodyVisible = () => {
  const invisbleClass = 'invisible';
  const allInvisibleItems = document.querySelectorAll(`.${invisbleClass}`);
  console.log(allInvisibleItems);
  allInvisibleItems.forEach(i => i.classList.add('visible'));
}

const onLoadCallback = (e: Event) => {
  // setTimeout(makeBodyVisible, 1);
};

document.addEventListener('DOMContentLoaded', onLoadCallback);