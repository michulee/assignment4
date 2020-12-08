// import * as Data from './data.js';

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

const recipeDetails = `
                    <div class="col-1-2">
                        <div class="img-wrapper">
                            <img src="./img/${recipe[index].imageURL}" alt="">
                        </div>
                    </div>
                    <div class="col-1-2">
                        <div class="recipe-text-wrapper">
                            <h1>${recipe[index].title}</h1>
                            <p>${recipe[index].desc}</p>
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