const navbar = `
    <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="index.html"><img src="img/logo50x50.png"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="browse.html">Browse</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact</a>
                    </li>
                </ul>
                <div class="search-bar">
                    <i class="fas fa-search"></i>
                    <input id="search" type="text" placeholder="Search for cooking recipes"></div>
                </div>
                <a href="profile.html"></a><img src="img/profile.png" id="profile-pic"></a>
            </div>
        </div>
    </nav>`;

document.body.insertAdjacentHTML('afterbegin', navbar);