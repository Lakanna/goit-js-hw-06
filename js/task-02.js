const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const container = document.querySelector("#ingredients");
console.dir(container);


const ingredientsList =  ingredients.map((item) => {
  
  let li = document.createElement("li");
  
    li.textContent = item;
  li.classList.add("item");
  
   return li;
  
});

container.append(...ingredientsList);
console.log(container);