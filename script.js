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