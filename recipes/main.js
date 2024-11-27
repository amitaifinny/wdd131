import recipes from './recipes.mjs'

function generateRandomNumber(num) {
    return Math.floor(Math.random() * num); //will givea  number 0-4
}

function getRandomListEntry(list) {
    const listlength = list.length;
    const randomNum = generateRandomNumber(listlength);
    return list[randomNum]
}

function recipeTemplate(recipe) {
    
    const {tags, description, image, rating, name} = recipe;
    
    return `
                <div class="recipe">
                    <img fetchpriority="high" src="${image}" class="apple-crisp" alt="a picture of ${name} ">
                    <div class="recipe-content">
                        ${tagsTemplate(tags)}
                        <h2 class="recipe-title">${name}</h2>
                        ${ratingTemplate(rating)}
                        <p class="recipe-description">${description}</p>
                    </div>
                </div>`
}

function tagsTemplate(tags) {
    let html = '';
    
    tags.forEach(tag => {
        const tagElement = `<span class = "recipe-type">${tag}</span>`;
        html += tagElement;
    });

    return html;
}

function ratingTemplate(rating) {
    let html = `<span 
    class = "rating"
    role = "img"
    aria-label = "rating: ${rating} out of 5 stars"
    >`
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += '<span aria-hidden="true" class="icon-star">⭐</span>';
        } else {
            html += '<span aria-hidden="true" class="icon-star-empty">☆</span>';
        }
    }
    
    html += '</span>';

    return html
}

function renderRecipes(recipeList) {
    const recipeContainer = document.querySelector('.recipe-container');

    let html = '';

    recipeList.forEach(recipe => {
        const recipeHtml = recipeTemplate(recipe);
        html += recipeHtml;
    });

    recipeContainer.innerHTML = html;
}

function init() {
    const recipe = getRandomListEntry(recipes)

    renderRecipes([recipe]);
}

init();

function getLowerCase() {
    const searchValue = document.getElementById('recipe-find');
    
    const searchQuery = searchValue.value.toLowerCase();
    
    return searchQuery;
}

// function filterRecipes(query) {
//     return recipeList.filter(recipe => {
//         const recipeNameLower = recipe.name.toLowerCase();
//         const recipeDescriptionLower = recipe.description.toLowerCase();
        
//         return (
//         recipeNameLower.includes(query) ||
//         recipe.DescriptionLower.includes(query) ||
//         recipe.tags.find(tag => tag.toLowerCase().includes(query)) ||
//         recipe.recipeIngredient.find(recipeIngredient => recipeIngredient.toLowerCase().includes(query)))) 
    
    
//     const sorted = filtered.sort(sortFunction)
//         return sorted
// }

function filterRecipes(query) {
    return recipes.filter(recipe => {
      const recipeNameLower = recipe.name.toLowerCase();
      const recipeDescriptionLower = recipe.description.toLowerCase();
  
      return (
        recipeNameLower.includes(query) ||
        recipeDescriptionLower.includes(query) ||
        recipe.tags.find(tag => tag.toLowerCase().includes(query)) ||
        recipe.recipeIngredient.find(recipeIngredient => recipeIngredient.toLowerCase().includes(query))   
  
      );
    });
  }
  
  

function searchHandler(event) {
    event.preventDefault();

    const searchQuery = getLowerCase();

    const filteredRecipes = filterRecipes(searchQuery);

    filteredRecipes.sort((a, b) => a.name.localeCompare(b.name));

    renderRecipes(filteredRecipes);
}

const searchButton = document.getElementById('search-image');

searchButton.addEventListener('click', searchHandler);

const searchKey = document.getElementById('recipe-find');

searchKey.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        searchHandler(event);
    }
});




