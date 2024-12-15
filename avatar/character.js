import avatarQuotes from './avatar.mjs'
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

const quoteButton = document.querySelector('.quote-button');
const quoteContainer = document.querySelector('.line');

quoteButton.addEventListener('click', () => {
    const randomQuote = getRandomListEntry(avatarQuotes);
    renderQuote(randomQuote);
});

function getRandomListEntry(list) {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}

function renderQuote(quotes) {
    const { character, quote, image } = quotes;
    quoteContainer.innerHTML = `
      <section class="quote-generator">
        <h2 class="quote-title">Avatar Quotes- Can you find the hidden button?</h2>
        <h3 class="quote-author">${character}</h3>
        <img src="${image}" class="quote-image" alt="${character}">
        <p class="quote-description">${quote}</p>
        <button class="quote-button">New Quote</button>
      </section>
    `;
  
    // Attach the event listener to the newly created button
    const newButton = document.querySelector('.quote-button');
    newButton.addEventListener('click', () => {
        const randomQuote = getRandomListEntry(avatarQuotes);
        renderQuote(randomQuote);
    });
  }

// Initial quote on page load
const initialQuote = getRandomListEntry(avatarQuotes);
renderQuote(initialQuote);

// function generateRandomNumber(num) {
//     return Math.floor(Math.random() * num); //will givea  number 0-4
// }

// function getRandomListEntry(list) {
//     const listlength = list.length;
//     const randomNum = generateRandomNumber(listlength);
//     return list[randomNum]
// }

// function quoteTemplate(quotes) {
//     const {character, quote, image} = quotes;

//     return `<section class="quote-generator">
//                 <button class="quote-button">NEW QUOTE</button>
//                 <h2 class="quote-title">Avatar Quotes</h2>
//                 <h3 class="quote-author">${character}</h3>
//                 <img src="${image}" class="quote-image" alt="${character}">
//                 <p class="quote-description">${quote}</p>
//             </section>`

// }


// function renderQuotes(recipeList) {
//     const recipeContainer = document.querySelector('.line');
    
//     let html = '';
    
//     recipeList.forEach(quotes => {
//         const recipeHtml = quoteTemplate(quotes);
//         html += recipeHtml;
//     });
    
//     recipeContainer.innerHTML = html;
// }

// function inQuote() {
//     const recipe = getRandomListEntry(avatarQuotes)

//     renderQuotes([recipe]);
// }

// inQuote();
//     const quoteButton = document.querySelector(".quote-button");
//     function toggleQuote() {
//       const button = document.querySelector(".quote-button");
//       button.classList.toggle("");
//     }
    
//     quoteButton.addEventListener("click", inQuote());

    // function searchHandler(event) {
    //     event.preventDefault();
    //     renderQuote();
    // }
    
//     const searchButton = document.querySelector('.quote-button');
    
//     searchButton.addEventListener('click', searchHandler);

// function generateRandomNumber(num) {
//     return Math.floor(Math.random() * num);
//   }
  
//   function getRandomListEntry(list) {
//     const listLength = list.length;
//     const randomNum = generateRandomNumber(listLength);
//     return list[randomNum];
//   }
  
//   function quoteTemplate(quote) {
//     const { character, quoteText, image } = quote;
//     return `
//       <section class="quote-generator">
//         <button class="quote-button">NEW QUOTE</button>
//         <h2 class="quote-title">Avatar Quotes</h2>
//         <h3 class="quote-author">${character}</h3>
//         <img src="${image}" class="quote-image" alt="${character}">
//         <p class="quote-description">${quoteText}</p>
//       </section>
//     `;
//   }
  
//   function renderQuote(quote) {
//     const quoteContainer = document.querySelector('.quote-container');
//     quoteContainer.innerHTML = quoteTemplate(quote);
//   }
  
//   // Initial quote on page load
//   const initialQuote = getRandomListEntry(avatarQuotes);
//   renderQuote(initialQuote);
  
//   // Button click event listener
//   document.querySelector('.quote-button').addEventListener('click', () => {
//     const randomQuote = getRandomListEntry(avatarQuotes);
//     renderQuote(randomQuote);
//   });
    