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


    
// character page---------------------------------------------------------------------
function recipeTemplate(recipe) {
    
    const {tags, description, image, character} = recipe;
    
    return `
                <div class="character">
                    <img fetchpriority="high" src="${image}" class="apple-crisp" alt="a picture of ${character} ">
                    <div class="character-content">
                        ${tagsTemplate(tags)}
                        <h2 class="character-title">${character}</h2>
                        <p class="character-description">${description}</p>
                    </div>
                </div>`
}

function tagsTemplate(tags) {
    let html = '';
    
    tags.forEach(tag => {
        const tagElement = `<span class = "character-type">${tag}</span>`;
        html += tagElement;
    });

    return html;
}


function renderRecipes(recipeList) {
    const recipeContainer = document.querySelector('.character-container');

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





