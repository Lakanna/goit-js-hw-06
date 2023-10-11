const allCategories = document.querySelectorAll(".item");

console.log("Number of categories: ", allCategories.length);

const item = document.querySelector(".item");
// console.dir(item);


const categoriesNames = document.querySelectorAll("h2");

// console.dir(categoriesNames);

// console.log(allCategories);

allCategories.forEach((categori) => {
    const itemsList = categori.lastElementChild;
    console.dir(`Category: ${categori.firstElementChild.textContent}`);
    console.log("Elements: ", itemsList.children.length);
    
});

