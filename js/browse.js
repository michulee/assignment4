const recipe = [
    {
        "title": "Cookies",
        "imageURL": "cookies.jpg",
        "desc": "Soft, delicious cookies with large chunks of dark chocolate."
    },
    {
        "title": "Poke",
        "imageURL": "poke.jpg",
        "desc": "Poke with fresh salmon and other ingredients on top of a steaming bed of rice."
    },
    {
        "title": "Wings",
        "imageURL": "wings.jpg",
        "desc": "Chicken wings marinated in KBBQ sauce glistening with juices and ready to give you a kick."
    },
    {
        "title": "Burger",
        "imageURL": "burger.jpg",
        "desc": "A juicy bacon and beef burger with melting cheese and fresh lettuce."
    },
    {
        "title": "Eggs & Vegetables",
        "imageURL": "breakfast.jpg",
        "desc": "A satisfying and balanced meal with protein, vegetables and fat."
    },
    {
        "title": "Pancakes",
        "imageURL": "pancakes.jpg",
        "desc": "Layered pancakes stacked with maple syrup, strawberries, blueberries, and diabetes."
    },
    {
        "title": "Lasagna",
        "imageURL": "lasagna.jpg",
        "desc": "Pasta with cheesy layers that leave you 10 pounds heavier."
    },
    {
        "title": "Macaron",
        "imageURL": "macaron.jpg",
        "desc": "Color assorted macarons with a cream cheese center."
    },
    {
        "title": "Soba Noodles",
        "imageURL": "soba.jpg",
        "desc": "Japanese soba noodles made from buckwheat flour that gives it a soft and chewy texture."
    },
    {
        "title": "Pizza",
        "imageURL": "pizza.jpg",
        "desc": "Homemade pizza with mushrooms, red onion, tomatoes, green bell peppers, and red bell peppers."
    },
    {
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
            <div class="card" style="min-width: 20rem;">
                <img src="./img/${recipe[i].imageURL}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${recipe[i].title}</h5>
                    <p class="card-text">${recipe[i].desc}</p>
                </div>
                <div class="grid-icon-container"><button id="favorite" class="material-icons">favorite_border</button></div>
            </div>`;
    
    
    productRow.insertAdjacentHTML('afterbegin', card);
}

// user clicks
window.onclick = function(e) {
}
// if click on image
// get title
// find index of title for data arrays
// insert data at the index to recipeDetails template literal (need to design)

// TODO:every 4 products, wrap in row class to get row gap


