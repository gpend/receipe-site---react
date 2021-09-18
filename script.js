const cards = document.querySelectorAll(".recipe-card")
const all_btn = document.querySelector('#all')
const entree_btn = document.querySelector('#entrees')
const sides_btn = document.querySelector('#sides')
const breads_btn = document.querySelector('#breads')
const deserts_btn = document.querySelector('#deserts')

entree_btn.addEventListener('click', function(){ HideOthers('recipe-entree'); })
sides_btn.addEventListener('click', function(){ HideOthers('recipe-side'); })
breads_btn.addEventListener('click', function(){ HideOthers('recipe-bread'); })
deserts_btn.addEventListener('click', function(){ HideOthers('recipe-desert'); })
all_btn.addEventListener('click', function() { HideNone(); })

function HideOthers(recipeClass){
    for (let card of cards){
        // console.log(card.classList)
        if (!(card.classList.contains(recipeClass))){
            card.style.display = 'none';
        }
        else {
            card.style.display = '';
        }
    }
}

function HideNone (){
    for (let card of cards){
        card.style.display = '';
    }
}