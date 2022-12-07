const categorylist = document.querySelectorAll ("li.item");
const numberofcatigories = categoryList.length
console.log ('Number of categories:', umberofcatigories.length);

const categories = document.querySelectorAll(".item");

for (let item of categories) {
    const headerElem = item.querySelector('h2');
    const listElem = item.querySelectorAll('li');

    console.log ('Category: ${headerElem.textContent}');
    console.log ('Elements: ${listElem.length}');
}

