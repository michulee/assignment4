// get login button 
let loginBtn = document.getElementById('login');
let loginAuthBtn = document.querySelector('#login-authentication a');
let loginAuthWrapper = document.getElementById('login-authentication');

{/* <div id="login-authentication">
    <a href="profile.html"><img src="img/profile.png" class="profile-icon" alt="profile"></a>
</div> */}

/**
 * click on login, make login/register disappear for all pages, add profile
 * icon for all pages
 * 
 * show heart icons only if login is authenticated
 */
// loginBtn.addEventListener('click', function() {
//     loginAuthBtn.classList.add('toggle-off'); //toggle the login button
//     loginAuthWrapper.classList.add('authenticated'); //innhtml don't work cause dynamic, use innerHTML to create literal DOM?
//     let element = createProfileIcon();
//     let navbar = document.getElementById('login-authentication');
//     navbar.appendChild(element);
//     // window.location.href = 'index.html';
// });

// function createProfileIcon() {
//     let a = document.createElement('a');
//     a.setAttribute('href', 'profile.html');
//     let img = document.createElement('img');
//     img.setAttribute('src', 'img/profile.png');
//     img.setAttribute('class', 'profile-icon');
//     img.setAttribute('alt', 'profile');
    
//     let navbar = document.getElementById('login-authentication'); //must attach to existing element
//     let element = a.appendChild(img);
//     element = navbar.appendChild(a);
//     // console.log(element)
//     return element;
// }