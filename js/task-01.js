const categoriesList = document.querySelectorAll("li.item");

console.log(`Number of categories: ${categoriesList.length}`);
categoriesList.forEach( function(category) { 
    
    const title = category.firstElementChild;

    console.log (`Category: ${title.textContent}`);

    const element = category.lastElementChild.children; 

    console.log (`Elements: ${element.length}`);
})