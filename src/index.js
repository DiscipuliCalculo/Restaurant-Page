import {contactContent} from './contact.js'
import {homeContent} from './home.js'
import {menuContent} from './menu.js'
import {pageLoad} from './pageload.js'

document.getElementById('content').innerHTML = `
<div id="navbar">
    <span id="home"><button class="tab">Home</button></span>
    <span id="menu"><button class="tab">Menu</button></span>
    <span id="contact"><button class="tab">Contact Us</button></span>
</div>
<div id="page-content"></div>
`
pageLoad(homeContent);

document.getElementById('home').addEventListener("click", (e) =>{
    pageLoad(homeContent);
})

document.getElementById('menu').addEventListener("click", (e) =>{
    pageLoad(menuContent);
})

document.getElementById('contact').addEventListener("click", (e) =>{
    pageLoad(contactContent);
})