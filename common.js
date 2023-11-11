// common.js font style to all pages

// Dynamically create a link element for Google Fonts and append it to the head
const linkElement = document.createElement('link');
linkElement.rel = 'stylesheet';
linkElement.href = 'https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap';
document.head.appendChild(linkElement);
