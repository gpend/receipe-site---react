function card(recipe){
     
    
    let ingredientGroups = []
    for (let group of recipe.ingredientGroups){
        let ingredientGroup = []
        if (!(group.title === "main")){
            ingredientGroup += <h3>${group.title}</h3>
        }
        for (let ingredientThing of group.ingredients){
            ingredientGroup += <li><span className='measure'>{ingredientThing.amount}</span> {ingredientThing.ingredient}</li>
        }
        ingredientGroups += ingredientGroup
    }
    return(   
        <section class="recipe-card recipe-entree" id="crock-pot-spaghetti">
            <h3 class="recipe-title">Crock-pot spaghetti</h3>
                <div class="recipe-body">
                    <ul>
                        {ingredientGroups}
                    </ul>
                    {recipe.directions.map(direction =>{
                            return(
                                <p>{direction}</p>
                            )
                        })}
                </div>
        </section>
     )
}

export default card

// {recipe.ingredientGroups.map(ingredientGroups => {
//     let title = ""
//     if (!(group.title === "main")){
//        title = <h3>${group.title}</h3>
//     }
// return(
//     group.ingredients.map(ingredientThing => {
//         return(
//             title
//             <li><span className='measure'>{ingredientThing.amount}</span> {ingredientThing.ingredient}</li>
//         )
//     })
// )
// })}