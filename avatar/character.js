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


    