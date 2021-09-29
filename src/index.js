console.log('loaded')

const pageContent = document.getElementById('content')
const newDiv = document.createElement("div");
const h1 = document.createElement('h1');
const newSpan = document.createElement('span')
const span2 = document.createElement('span');
const h1Text = document.createTextNode(`Bill's Burger Bar`)

h1.appendChild(h1Text)

document.getElementById('content').appendChild(newDiv);
pageContent.lastChild.id = 'navbar';
document.getElementById('navbar').appendChild(newSpan);
document.getElementById('navbar').lastChild.textContent = 'Menu';
document.getElementById('navbar').appendChild(span2);
document.getElementById('content').appendChild(h1);
