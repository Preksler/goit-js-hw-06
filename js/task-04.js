const refs = {
    value: document.querySelector('#value'),
    decrement: document.querySelector('button[data-action="decrement"]'),
    increment: document.querySelector('button[data-action="increment"]'),
};

let counterValue = 0;

refs.decrement.addEventListener('click', () => {
    counterValue -= 1;
    return refs.value.textContent = counterValue;
});
refs.increment.addEventListener('click', () => {
    counterValue += 1;
    return refs.value.textContent = counterValue;
});