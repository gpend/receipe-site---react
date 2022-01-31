

function card(props){

    let ingredientBlock = props.item.ingredientGroups.map(ingredientGroup => {
        let title = ""
        if (!(ingredientGroup.title === "main")){
           title = <h3>{ingredientGroup.title}</h3>
        }
        let ingredients = ingredientGroup.ingredients.map(ingredientThing => {
            return(
                <li><span className='measure'>{ingredientThing.amount}</span> {ingredientThing.ingredient}</li>
            )
        })

        return(
            <div className="ingredientGroup">
                {title}
                <ul>
                    {ingredients}
                </ul>
            </div>
        )
    })

    let instructions = props.item.directions.map(direction =>{
        return(
            <p>
                {direction}
            </p>
        )
    })

    return(   
        <section className={`recipe-card recipe-group-${props.item.category}`}>
            <h3 className="recipe-title">{props.item.title}</h3>
                <div className="recipe-body">
                    {ingredientBlock}
                    <div className="directions">
                        {instructions}
                    </div>
                </div>
        </section>
     )
}

export default card

