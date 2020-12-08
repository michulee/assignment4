// import * as Data from './data.js';


let heartIcon = document.querySelectorAll('#favorite');
// console.log(heartIcon[0])
checkCookie('favorite_image');

// body .grid .row WORKS
// body .grid .row .card DOESN'T WORK, can't go beyond .row 
// can only select from where you define the template literal? so import cookie.js to browse.js?
// or maybe instead of exporting data, just leave as global variable
const select = document.querySelector('body');
console.log(document)
console.log(select)



// why is it length 0?
console.log(heartIcon.length)
for (let i = 0; i < heartIcon.length; i++) {
    console.log('hey')
    console.log(heartIcon[i])
}

//Toggle Favorite Button and attach cookie to buttons
for(let i = 0; i < heartIcon.length; i++) {
    heartIcon[i].addEventListener('click', function() {
        // when img is unfavorited set to favorite
        if(heartIcon[i].innerHTML == 'favorite_border') {
            heartIcon[i].innerHTML = 'favorite';
            heartIcon[i].style.color = 'red';
            console.log(i)
            setCookie('favorite_image' + i, recipe[i].imageURL);
        } 
        // when img is favorited set to unfavorite
        else {
            heartIcon[i].innerHTML = 'favorite_border';
            heartIcon[i].style.color = 'white';
            // remove cookie
            setCookie('favorite_image' + i, recipe[i].imageURL, true);
        }
    });
}

/**
 * If cookie exists, a solid heart will appear.
 * @param key Key of key-valuee pair
 */
function checkCookie(key) {
    let cookieValue = '';
    // only cookies that include key 'favorite_image'
    let splitCookie = getSplitCookie(key);
    for (let i = 0; i < splitCookie.length; i++) {
        cookieValue = getCookieValue(splitCookie[i]);
        for (let i = 0; i < recipe.length; i++) {
            if (recipe[i].imageURL.includes(cookieValue)) {
                heartIcon[i].innerHTML = 'favorite';
                heartIcon[i].style.color = 'red';
            } 
        }
    }
}

/**
 * Sets cookie when user clicks on heart.
 * @param key Key of key-value pair
 * @param value Value of key-value pair
 * @param deleteCookie Default false, true to delete cookie
 */
function setCookie(key, value, deleteCookie = false) {
    if (!deleteCookie) {
        return document.cookie = key + '=' + value + ';expires=Thu, 31 Dec 2020 00:00:00 UTC;';
    } else {
        return document.cookie = key + '=;expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    }
}

// Returns arr with cookies with only the key 'favorite_image'
function getSplitCookie(key) {
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
function getCookieValue(cookie) {
    let valuePos = cookie.indexOf('=');
    let cookieValue = cookie.substr(valuePos + 1, cookie.length - 2);
    return cookieValue;
}