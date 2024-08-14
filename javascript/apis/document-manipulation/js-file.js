const ul = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

function handleButtonClick() {
    const inputValue = input.value;
    input.value = '';

    const li = document.createElement('li');
    const span = document.createElement('span');
    const btn = document.createElement('button');
    
    li.appendChild(span);
    span.textContent = inputValue;
    li.appendChild(btn);
    btn.textContent = 'Delete';
    ul.appendChild(li);
    
    btn.addEventListener('click', () => {
        ul.removeChild(li);
    });

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