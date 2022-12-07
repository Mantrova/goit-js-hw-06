const counterValue = {
    value: 0,
    decrement(value) {
        this.value -= 1;
        },
    increment(value) {
        this.value += 1;
        },
}; 

const decrementBtn = document.querySelector(`button[data-action="decrement"]`);
const incrementBtn = document.querySelector(`button[data-action="increment"]`);
const valueEl = document.querySelector(`#value`);

decrementBtn.addEventListener("click", onDecrementBtnClick); 
incrementBtn.addEventListener("click", onIncrementBtnClick); 

function onDecrementBtnClick() {
    counterValue.decrement();
    valueEl.textContent = counterValue.value; 
    console.log(`мінус один`);
};

function onIncrementBtnClick() {
    counterValue.increment();
    valueEl.textContent = counterValue.value; 
    console.log(`плюс один`);
};