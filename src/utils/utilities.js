const htmlNode = document.querySelector('html');

const addScrollbar = () => {
  htmlNode.classList.remove('remove-scroll');
};

const removeScrollbar = () => {
  htmlNode.classList.add('remove-scroll');
};

const heightValue = 33.33333333333333;

export { addScrollbar, removeScrollbar, heightValue };
