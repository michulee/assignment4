import React, {Component} from 'react';

const e = React.createElement;

class Header extends omponent {
//   constructor(props) {
//     super(props);
//     this.state = { login: false };
//   }

  render() {
    return e(
        <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div class="container"><a class="navbar-brand" href="index.html">Cooking Cards</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="about.html">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="gallery.html">Gallery</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact.html">Contact</a>
                        </li>
                    </ul>
                    <span class="navbar-text">
                        <a href="login.html"><button type="button" class="btn btn-outline-primary">Login/Register</button></a>
                    </span>
                </div>
            </div>
        </nav>
    );
  }
}

const domContainer = document.querySelector('.header-container');
ReactDOM.render(e(Header), domContainer);