const inputEl = document.querySelector(`#font-size-control`);
const spanEl = document.querySelector(`#text`);

inputEl.addEventListener(`input`, onFontSizeTextChange);

function onFontSizeTextChange() {
    console.log(inputEl.textContent = inputEl.value);
    spanEl.style.fontSize = inputEl.value + "px";
}