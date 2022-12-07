const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelectorAll ('#indredients');
console.log (listEl);

const elements = ingredients.map(ingredient => {
  const liEl = document.createElement ('li');
  liEl.classList.add('item');
  liEl.textContent = ingredient;

  return liEl;
});
console.log(elements);
listEl.append(...elements);
