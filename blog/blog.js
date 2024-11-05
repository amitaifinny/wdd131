let articles = [
    {
        id: 1,
        title: 'Septimus Heap Book One: Magyk',
        date: 'July 5, 2022',
        description:
            'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
        imgAlt: 'Book cover for Septimus Heap 1',
        ages: '10-14',
        genre: 'Fantasy',
        stars: '⭐⭐⭐⭐'
    },
    {
        id: 2,
        title: 'Magnus Chase Book One: Sword of Summer',
        date: 'December 12, 2021',
        description:
            'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
        imgSrc:
            'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
        imgAlt: 'Book cover for Magnus Chase 1',
        ages: '12-16',
        genre: 'Fantasy',
        stars: '⭐⭐⭐⭐'
    },
    {
        id: 3,
        title: "Belgariad Book One: Pawn of Prophecy",
        date: "Feb 12, 2022",
        description:
        "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his \"Aunt Pol\" and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
        imgSrc:
        "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
        imgAlt: "Book cover for Pawn of Prophecy",
        ages: "12-16",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐⭐"
        }
];

const renderPost = (post) => {
    const { id, date, ages, genre, stars, title, imgSrc, imgAlt, description } = post;

    return `<div key="${id}" class="blog-post-container">
      <div class="blog-metadata">
        <p>
          ${date} <br />
          ${ages} <br />
          ${genre}<br />
         ${stars}<br />
        </p>
      </div>
      <div class="blog-content">
        <h2>${title}</h2>
        <div class="book-image-container">
          <img src="${imgSrc}" alt="${imgAlt}">
        </div>
        <p>${description} <a href="#more" class="read-more">Read More...</a><div class="read-more-content"></div></p></p>
      </div>
    </div>`
};

const createElement = (name) => {
    return document.createElement(name);
};

const addElementToParent = (postRef, containerRef) => {
    containerRef.appendChild(postRef);
};

const renderAllPosts = (posts) => {
    const blogContainerRef = document.querySelector('.render-blogs-container');

    posts.forEach(post => {
        const postInnerHtml = renderPost(post); // create rendered html for post
        const postRef = createElement('post');
        postRef.innerHTML = postInnerHtml;
        addElementToParent(postRef, blogContainerRef);
    });
};

const createPost = () => {
    const blogContainerRef = document.querySelector('.render-blogs-container');
    const postInnerHtml = renderPost({
        id: 3,
        title: "Belgariad Book One: Pawn of Prophecy",
        date: "Feb 12, 2022",
        description:
        "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his \"Aunt Pol\" and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
        imgSrc:
        "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
        imgAlt: "Book cover for Pawn of Prophecy",
        ages: "12-16",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐⭐"
    }); // create rendered html for post
    const postRef = createElement('post');
    postRef.innerHTML = postInnerHtml;
    addElementToParent(postRef, blogContainerRef);
}

window.onload = () => renderAllPosts(articles);
