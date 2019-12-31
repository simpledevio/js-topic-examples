// create-element.js

// Create new element
const newParagraph = document.createElement('p');

// Add text content to new element
newParagraph.textContent = 'This paragraph was created using JavaScript';

// Select parent element
const parentDiv = document.querySelector('div');

// Append new element to parent element
parentDiv.appendChild(newParagraph);
