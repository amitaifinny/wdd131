const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
  const menu = document.querySelector(".menu");
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

handleResize();
window.addEventListener("resize", handleResize);

function viewerTemplate(pic,alt) {
  return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${pic}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
  const clickedElement = event.target

	// get the src attribute from that element and 'split' it on the "-"
  const norris = clickedElement.src.split('-')[0];


	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
  const fullSizeNorris = norris + '-full.jpeg'


	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
  document.body.insertAdjacentHTML('afterbegin', viewerTemplate(fullSizeNorris, 'a picture of norris'))

	// add a listener to the close button (X) that calls a function called closeViewer when clicked
  document.querySelector('.close-viewer').addEventListener('click', () => {
    document.querySelector('.viewer').remove();
  })
  document.querySelector('.close-viewer').addEventListener('click', closeViewer);
}

// function viewHandler(event) {
//   // Get the clicked element
//   const clickedElement = event.target;

//   // Check if the clicked element is an image
//   if (clickedElement.tagName !== 'IMG') {
//     return; // Exit the function if not an image
//   }

//   // Extract the filename from the src attribute
//   const filename = clickedElement.images/norris-sm.jpeg.split('-').pop();

//   // Construct the full-size image filename
//   const fullSizeFilename = filename.replace(/\.(png|jpg|jpeg)$/, '-full.$1');

//   // Create the viewer template (replace 'image-path' with your actual path)
//   // const viewerTemplate = `
//   //   <div class="image-viewer">
//   //     <img src="${fullSizeFilename}" alt="Full-size image">
//   //     <button class="close-button">X</button>
//   //   </div>
//   // `;

//   // Insert the viewer template into the body
//   document.body.insertAdjacentHTML('afterbegin', viewerTemplate);

//   // Add a click listener to the close button
//   const closeButton = document.querySelector('.close-viewer');
//   if (closeButton) { // Check if close button exists
//     closeButton.addEventListener('click', closeViewer);
//   } else {
//     console.error('Close button not found in viewer template!');
//   }
// }

const gallery = document.querySelector(".gallery")
gallery.addEventListener('click', viewHandler)

function closeViewer() {
  const viewerDiv = document.querySelector('.viewer');
  viewerDiv.remove();
}

