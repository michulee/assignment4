import * as Component from '../components/Navbar.js';
const recipe = [
    {
        "id": "1",
        "title": "Chocolate Chip Cookies",
        "imageURL": "cookies.jpg",
        "desc": "Soft, delicious cookies with large chunks of dark chocolate.",
    },
    {
        "id": "2",
        "title": "Salmon Poke",
        "imageURL": "poke.jpg",
        "desc": "Poke with fresh salmon and other ingredients on top of a steaming bed of rice."
    },
    {
        "id": "3",
        "title": "KBBQ Wings",
        "imageURL": "wings.jpg",
        "desc": "Chicken wings marinated in KBBQ sauce glistening with juices and ready to give you a kick."
    },
    {
        "id": "4",
        "title": "Beef Burger",
        "imageURL": "burger.jpg",
        "desc": "A juicy bacon and beef burger with melting cheese and fresh lettuce."
    },
    {
        "id": "5",
        "title": "Deluxe Breakfast",
        "imageURL": "breakfast.jpg",
        "desc": "A satisfying and balanced meal with protein, vegetables and fat."
    },
    {
        "id": "6",
        "title": "Mini Pancakes with Fruit",
        "imageURL": "pancakes.jpg",
        "desc": "Layered pancakes stacked with maple syrup, strawberries, blueberries, and diabetes."
    },
    {
        "id": "7",
        "title": "Lasagna",
        "imageURL": "lasagna.jpg",
        "desc": "Pasta with cheesy layers that leave you 10 pounds heavier."
    },
    {
        "id": "8",
        "title": "Assorted Macarons",
        "imageURL": "macaron.jpg",
        "desc": "Color assorted macarons with a cream cheese center."
    },
    {
        "id": "9",
        "title": "Soba Noodles with Fishcake",
        "imageURL": "soba.jpg",
        "desc": "Japanese soba noodles made from buckwheat flour that gives it a soft and chewy texture."
    },
    {
        "id": "9",
        "title": "Vege Pizza",
        "imageURL": "pizza.jpg",
        "desc": "Homemade pizza with mushrooms, red onion, tomatoes, green bell peppers, and red bell peppers."
    },
    {
        "id": "10",
        "title": "Chocolate Strawberries",
        "imageURL": "chocolate-strawberries.jpg",
        "desc": "Juicy, red strawberries dipped in high-quality dark chocolate. Dark chocolate is best chocolate."
    }
]

const productRow = document.querySelector('.product .row');
// const card outside won't let images render
// const card = '';
// decrement because the first image rendered will be pushed to bottom not top, now cookies.jpg is first image to appear
for(let i = recipe.length-1; i > -1; i--) {
    const card = `
            <div class="card" data-id="${recipe[i].id}">
                <img src="./img/${recipe[i].imageURL}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${recipe[i].title}</h5>
                    <p class="card-text">${recipe[i].desc}</p>
                </div>
                <div class="grid-icon-container"><button id="favorite" class="material-icons">favorite_border</button></div>
            </div>`;
    
    
    productRow.insertAdjacentHTML('afterbegin', card);
}

window.addEventListener("click", function(e) {
    const element = e.target;
    const parentElement = element.parentElement;
    const parentValue = parentElement.getAttribute('class')
    if(parentValue === 'card') {
        const data = parentElement.getAttribute('data-id');
        window.location.href = window.location.hostname + window.location.pathname + '?product=' + parentValue;
        // insert template literal
    }
});

const recipeDetails = `

`;
