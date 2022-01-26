const groups = document.querySelectorAll(".recipe-group")
const all_btn = document.querySelector('#all')
const entree_btn = document.querySelector('#entrees')
const sides_btn = document.querySelector('#sides')
const breads_btn = document.querySelector('#breads')
const deserts_btn = document.querySelector('#deserts')

entree_btn.addEventListener('click', function(){ HideOthers('recipe-group-entree'); })
sides_btn.addEventListener('click', function(){ HideOthers('recipe-group-side'); })
breads_btn.addEventListener('click', function(){ HideOthers('recipe-group-bread'); })
deserts_btn.addEventListener('click', function(){ HideOthers('recipe-group-desert'); })
all_btn.addEventListener('click', function() { HideNone(); })

function HideOthers(recipeGroupId){
    for (let group of groups){
        // console.log(group.id)
        if (!(group.id === recipeGroupId)){
            group.style.display = 'none';
        }
        else {
            group.style.display = '';
        }
    }
}

function HideNone (){
    for (let group of groups){
        group.style.display = '';
    }
}

// allow users to click a card to focus on it for printing
let recipeCards = document.querySelectorAll(".recipe-card")
for (let card of recipeCards){
    card.addEventListener('click', event => {
        for (let selection in event.path){
            let element = event.path[selection];
            if (element.classList){
                if (element.classList.contains('recipe-card')){
                    console.log(element.id)
                    // let otherRecipes = document.querySelectorAll(`section.recipe-card:not(#${element.id})`);
                    // for (let otherRecipe of otherRecipes){
                    //     otherRecipe.style.display = 'none';
                    //     console.log(otherRecipe.id)
                    // }
                }
            }
        }
    })
}

// Math.floor(measurement)

// var gcd = function(a, b) {
//     if (!b) return a;
//       a = parseInt(a);
//       b = parseInt(b);
//     return gcd(b, a % b);
//   };
  
//   var fraction = .75;
//   var len = fraction.toString().length - 2;
  
//   var denominator = Math.pow(10, len);
//   var numerator = fraction * denominator;
  
//   var divisor = gcd(numerator, denominator);    // Should be 8
  
//   numerator /= divisor;                         // Should be 439
//   denominator /= divisor;                       // Should be 1250
  
//   alert(numerator.toFixed() + '/' + denominator.toFixed());