const Navbar = `
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
                        <a href="login.html"><button type="button" class="btn btn-outline-primary">Login/Register</button></a>
                    </li>
                </ul>
                
            </div>
        </div>
    </nav>`;

document.body.insertAdjacentHTML('afterbegin', Navbar);
