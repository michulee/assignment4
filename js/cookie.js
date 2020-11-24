// Selectors
var grid = document.querySelectorAll('.card img');

let imgSrc = [];
for(let i = 0; i < grid.length; i++) {
    imgSrc[i] = grid[i].getAttribute('src');
}

let gridFav = document.querySelectorAll('#favorite');
// for(let i = 0; i < grid.length; i++) {
//     gridFav[i] = document.getElementById('favorite');
// }

let heartIcon = document.querySelectorAll('#favorite');

//Toggle Favorite Button and attach cookie to buttons
for(let i = 0; i < heartIcon.length; i++) {
    heartIcon[i].addEventListener('click', function() {
        // when img is unfavorited set to favorite
        if(heartIcon[i].innerHTML == 'favorite_border') {
            heartIcon[i].innerHTML = 'favorite';
            heartIcon[i].style.color = 'red';
            setCookie('favorite_image' + i, imageURL[i]);
        } 
        // when img is favorited set to unfavorite
        else {
            heartIcon[i].innerHTML = 'favorite_border';
            heartIcon[i].style.color = 'white';
            // remove cookie
            setCookie('favorite_image' + i, imageURL[i], true);
        }
    });
}

//Cookie remembers which image is favorited
export function checkCookie(key) {
    let cookieValue = '';
    // only favorite_image cookies
    let splitCookie = getSplitCookie(key);
    for (let i = 0; i < splitCookie.length; i++) {
        cookieValue = getCookieValue(splitCookie[i]);
        for (let i = 0; i < grid.length; i++) {
            if (imgSrc[i].includes(cookieValue)) {
                heartIcon[i].innerHTML = 'favorite';
                heartIcon[i].style.color = 'red';
            } 
            // else {
            //     heartIcon[i].innerHTML = 'favorite_border';
            //     heartIcon[i].style.color = 'white';
            // }
        }
    }
}

/**
 * Sets cookie for key, value and expiration and trims it
 * true to remove cookie
 * false or default set expiration date
 */
export function setCookie(key, value, deleteCookie = false) {
    if (!deleteCookie) {
        return document.cookie = key + '=' + value + ';expires=Thu, 01 Dec 2020 00:00:00 UTC;';
    } else {
        return document.cookie = key + '=;expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    }
}

// Returns arr with cookies with only the key 'favorite_image'
export function getSplitCookie(key) {
    let cookie = document.cookie;
    let splitCookies = cookie.split(';');
    let filteredCookies = [];
    for (let i = 0; i < splitCookies.length; i++) {
        splitCookies[i] = splitCookies[i].trim();
        // take only key 'favorite_image' cookies
        // if left side of = includes(key)
        if (splitCookies[i].includes(key)) {
            filteredCookies[i] = splitCookies[i];
        }
    }
    for (let i = 0; i < filteredCookies.length; i++) {
        // doesn't include ';'
        filteredCookies[i] = filteredCookies[i].substr(0, filteredCookies[i].length);
    }
    return filteredCookies;
}

// get value of 'favorite_image = joseph.jpg'
// Get value of key-value cookie pair
export function getCookieValue(cookie) {
    let valuePos = cookie.indexOf('=');
    let cookieValue = cookie.substr(valuePos + 1, cookie.length - 2);
    return cookieValue;
}