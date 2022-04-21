function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputNumber: document.querySelector('#controls input'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  divBox: document.querySelector('#boxes'),
}

let size = 30;

const handleClick = (e) => {
  const value = e.currentTarget.value;
  refs.btnCreate.addEventListener('click', () => {
    createBoxes(value);
  });
};

function createBoxes(amount) {
  for (let i = 0; i < amount.length; i++) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    size += 10;
    div.style.backgroundColor = getRandomHexColor();
    refs.divBox.append(div);
  }
}

function destroyBoxes() {
  refs.divBox.innerHTML = '';
};

refs.inputNumber.addEventListener('input', handleClick);
refs.btnDestroy.addEventListener('click', destroyBoxes);