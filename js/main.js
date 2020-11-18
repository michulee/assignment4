

let name = 'Chocolate Chip Cookies';
let image = 'cookies.jpg';
let description = 'Cookies cookies cookies are delicious.';

let loginPages = ['about.html', 'contact.html', 'gallery.html', 'index.html', 'profile.html', 'recipe.html'];
let loginTrue = false;

let loginButton = document.getElementById('login');
loginButton.addEventListener('click', login);

function login() {
    location.href = 'index.html';
}



