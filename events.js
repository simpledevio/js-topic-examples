// events.js

// addEventListener() method
let eventMethodParagraph = document.querySelector('#event-method');

eventMethodParagraph.addEventListener('click', () => {
  console.log('This statement was triggered by the click event using the addEventListener() method.');
});

// event handler property
let eventPropertyParagraph = document.querySelector('#event-property');

eventPropertyParagraph.onclick = function() {
  console.log('This statement was triggered by the click event using an event handler property.');
}
