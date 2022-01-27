

function card(props){
     


 

    // console.log(props.item)
    // let ingredientGroups = []
    // for (let group of props.item.ingredientGroups){
    //     // console.log(group)
    //     let ingredientGroup = []
    //     if (!(group.title === "main")){
    //         ingredientGroup.push("<h3>"+group.title+"</h3>")
    //     }
    //     for (let ingredientThing of group.ingredients){ //change this to map; create function for ingredients and another for directions
    //         ingredientGroup.push("<li><span className='measure'>"+ingredientThing.amount+"</span> "+ingredientThing.ingredient+"</li>")
    //     }
    //     ingredientGroups += ingredientGroup
    // }
    // let instructions = []
    // for (let direction of props.item.directions){
    //     instructions.push(direction + "<br>")
    // }

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
        <section className="recipe-card recipe-{props.item.category}">
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

