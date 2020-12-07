// import * as Component from '../components/Navbar.js';
import * as Component from './browse.js';

// any js files with export keywords will make your elements disappear

// how to call exported object???
const navbar = Component.Navbar;
console.log(navbar);

Component.test;
console.log(Component.test);

const navLogin = navbar.getElementById('navLogin');
console.log(navLogin);

// grab last li nav-item in navbar.js
console.log('?')
// const navListItemPos = document.querySelectorAll('.navbar .nav-item');
// const navListItemPos2 = document.querySelector('.navbar .nav-item')
// // returns null, can you grab a dynamically created element?
// console.log(navListItemPos2)
// navListItemPos.forEach(function(e) {
//     console.log(e);
// })
// for(let i = 0; i < navListItemPos.length; i++) {
//     console.log(navListItemPos[i])
// }
// const navListItem = navListItemPos[navListItemPos.length-2];
// console.log(navListItem);
const profileIcon = `
    <div class="profile-icon">
        <img id="profile-pic" src="img/profile.png">
    </div>`;
login.addEventListener('click', function() {
    navLogin.style.display = 'none';
    // add profile icon
    // document.body.insertAdjacentHTML('', profileIcon);
});

// login.js needs to be in all pages
