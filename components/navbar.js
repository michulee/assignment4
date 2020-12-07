 export const Navbar = `
    <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="index.html"><img src="img/logo50x50.png"></a>
            <form id="search-bar" class="form-inline search-bar">
                <i class="fas fa-search"></i>
                <input id="search" type="search" placeholder="Search for cooking recipes">
            </form>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="browse.html">Browse</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a href="login.html"><button id="navLogin" type="button" class="btn btn-outline-primary">Login</button></a>
                    </li>
                </ul>
                
            </div>
        </div>
    </nav>`;

// Uncaught TypeError: Cannot assign to read only property '5' of string '<div>Hey</div>'

// var example = `
//     <div>Hey</div>`;
var example = '<div>Hey</div>';
console.log(example);
for(let i = 0; i < example.length; i++) {
    if(example[i] === 'H') {
        console.log(example[i]);
        example[i] = '';
    }
}
console.log(example);

/**
 * if click on login button, make login disappear and add profileicon
 */

// creating const loginBtn makes navbar disappear for all pages, moved to login.js
// const loginBtn = document.getElementById('login');

// loginBtn.addEventListener('click', function() {
//     loginBtn.style.display = 'none';
// });

// can grab dynamic element within the same file, but not in a different file
//@TODO: so.. import navbar.js into login.js
// const navLogin = document.getElementById('navLogin');
// console.log(navLogin);

