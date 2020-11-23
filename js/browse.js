
// variables has to be in this file, not in main.js
const imageURL = ["cookies.jpg", "poke.jpg", "wings.jpg", "burger.jpg", "breakfast.jpg"];
const title = ["Cookies", "Poke", "Wings", "Burger", "Eggs & Vegetables"];
const desc = [
    "Poke with fresh salmon and other ingredients on top of a steaming bed of rice.",
    "Chicken wings marinated in KBBQ sauce glistening with juices and ready to give you a kick.",
    "Soft, delicious cookies with large chunks of dark chocolate.",
    "A juicy bacon and beef burger with melting cheese and fresh lettuce.",
    "A satisfying and balanced meal with protein, vegetables and fat."];

const productRow = document.querySelector('.product .row');
// const card outside won't let images render
// const card = '';
for(let i = 0; i < title.length; i++) {
    const card = `
    <div class="col-sm">
        <div class="card" style="width: 18rem;">
            <img src="./img/${imageURL[i]}" class="card-img-top" alt="by Sara Sperry">
            <div class="card-body">
                <h5 class="card-title">${title[i]}</h5>
                <p class="card-text">${desc[i]}</p>
            </div>
            <div class="grid-icon-container"><button id="favorite" class="material-icons">favorite_border</button></div>
        </div>
    </div>`;
    productRow.insertAdjacentHTML('afterbegin', card);
}


