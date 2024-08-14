const ul = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');
let inputValue = input.value;

function handleButtonClick() {
    let inputValue = input.value;
    input.value = '';
    const li = document.createElement('li');
    const span = document.createElement('span');
    const btn = document.createElement('button');
    li.appendChild(span);
    li.appendChild(btn);
    ul.appendChild(li);
    span.textContent = inputValue;
    btn.textContent = 'Delete';
    btn.addEventListener('click', () => {
        ul.removeChild(li);
    })
    input.focus();
};

button.addEventListener('click', () => {
    handleButtonClick();
})

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleButtonClick();
    };
});