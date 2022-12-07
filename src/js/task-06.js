const inputEl = document.querySelector ('#validation-input');
console.log (inputEl);

const inputLength = Number(inputEl.CDATA_SECTION_NODE.length);
console.log(inputLength);

inputEl.addEventListener('blur', (event) => {
    if (event.currentTarget.value.lenth === inputLength) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add ('valid');
    } else 
    inputEl.classList.remove ('valid');
    inputEl.classList.add ('invalid');
})