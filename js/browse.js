// import * as Data from './data.js';

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
        // window.location.href +='/recipeDetails.html?product=' + data;
        // window.location.href ='?product=' + data;
        window.location.assign('../recipeDetails.html?product=' + data); 
        // after redirect, stops reading code
    }
});




