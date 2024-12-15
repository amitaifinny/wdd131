import avatarQuotes from './avatar.mjs'
import avatarCharacters from './description.mjs';

const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
  const menu = document.querySelector(".big-menu");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
  const menu = document.querySelector(".big-menu");
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

handleResize();
window.addEventListener("resize", handleResize);


function generateRandomNumber(num) {
    return Math.floor(Math.random() * num); //will givea  number 0-4
}

function getRandomListEntry(list) {
    const listlength = list.length;
    const randomNum = generateRandomNumber(listlength);
    return list[randomNum]
}

// function quoteTemplate(quotes) {
//     const {character, quote, image} = quotes;

//     return `<section class="quote-generator">
//                 <button class="quote-button">NEW QUOTE</button>
//                 <h2 class="quote-title">Avatar Quotes</h2>
//                 <h3 class="quote-author">${character}</h3>
//                 <img src="${image}" class="quote-image" alt="picture of avatar aang">
//                 <p class="quote-description">${quote}</p>
//             </section>`

// }

// function renderQuote(recipeList) {
//     const recipeContainer = document.querySelector('.quote-generator');

//     let html = '';

//     recipeList.forEach(quotes => {
//         const recipeHtml = quoteTemplate(quotes);
//         html += recipeHtml;
//     });

//     recipeContainer.innerHTML = html;
// }

// function inQuote() {
//     const recipe = getRandomListEntry(avatarQuotes)

//     renderQuote([recipe]);
// }

// inQuote();

    
// character page---------------------------------------------------------------------
function recipeTemplate(recipe) {
    
    const {tags, description, image, character} = recipe;
    
    return `
                <div class="recipe">
                    <img fetchpriority="high" src="${image}" class="apple-crisp" alt="a picture of ${character} ">
                    <div class="recipe-content">
                        ${tagsTemplate(tags)}
                        <h2 class="recipe-title">${character}</h2>
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

// function ratingTemplate(rating) {
//     let html = `<span 
//     class = "rating"
//     role = "img"
//     aria-label = "rating: ${rating} out of 5 stars"
//     >`
//     for (let i = 1; i <= 5; i++) {
//         if (i <= rating) {
//             html += '<span aria-hidden="true" class="icon-star">⭐</span>';
//         } else {
//             html += '<span aria-hidden="true" class="icon-star-empty">☆</span>';
//         }
//     }
    
//     html += '</span>';

//     return html
// }

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
    const recipe = getRandomListEntry(avatarCharacters)

    renderRecipes([recipe]);
}

init();

function getLowerCase() {
    const searchValue = document.getElementById('character-find');
    
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
    return avatarCharacters.filter(recipe => {
      const recipeNameLower = recipe.character.toLowerCase();
      const recipeDescriptionLower = recipe.description.toLowerCase();
  
      return (
        recipeNameLower.includes(query) ||
        recipeDescriptionLower.includes(query) ||
        recipe.tags.find(tag => tag.toLowerCase().includes(query)) 
      );
    });
  }
  
  

function searchHandler(event) {
    event.preventDefault();

    const searchQuery = getLowerCase();

    const filteredRecipes = filterRecipes(searchQuery);

    filteredRecipes.sort((a, b) => a.character.localeCompare(b.character));

    renderRecipes(filteredRecipes);
}

const searchButton = document.getElementById('search-image');

searchButton.addEventListener('click', searchHandler);

const searchKey = document.getElementById('character-find');

searchKey.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        searchHandler(event);
    }
});





