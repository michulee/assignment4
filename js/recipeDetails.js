import * as Data from './data.js';

// console.log(document.URL);
// get string after '?' of document.URL e.g. 'http://127.0.0.1:5500/recipeDetails.html?product=2'
let strStartPos;
let strEndPos = document.URL.length
for(let i = 0; i < strEndPos; i++) {
    if(document.URL[i] === '?') {
        strStartPos = i + 1;
    }
}
const productStr = document.URL.substr(strStartPos, strEndPos);
// console.log(productStr);

// get string after '=' of e.g. 'product=1'
for (let i = 0; i < productStr.length; i++) {
    if(productStr[i] === '=') {
        strStartPos = i + 1;
    }
}
const index = productStr.substr(strStartPos, productStr.length) - 1;
// console.log(productID)

console.log()

const recipeDetails = `
                    <div class="col-1-2">
                        <div class="img-wrapper">
                            <img src="./img/${Data.recipe[index].imageURL}" alt="">
                            <div class="grid-icon-container"><button id="favorite" class="material-icons">favorite_border</button></div>
                        </div>
                    </div>
                    <div class="col-1-2">
                        <div class="recipe-text-wrapper">
                            <h1>${Data.recipe[index].title}</h1>
                            <p>${Data.recipe[index].desc}</p>
                            <ul>
                                <li>ingredient</li>
                                <li>ingredient</li>
                                <li>ingredient</li>
                                <li>ingredient</li>
                                <li>ingredient</li>
                                <li>ingredient</li>
                            </ul>
                        </div>
                    </div>`;
const insertPos = document.body.querySelector('.recipe-row');
insertPos.insertAdjacentHTML('afterbegin', recipeDetails);