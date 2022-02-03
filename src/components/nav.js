// import recipes from "../recipes"
import App from "../App"
function nav(){

    function showEntrees(){
        App.setRecipeItems(prevRecipes =>prevRecipes.filter(recipe => recipe.category === "entree"))
    } 

// TODO figure out how to call state function from another js

    return(
        <aside className="left-nav">
                    <nav>
                        <ul>
                            <li id="all"><button>All</button></li>
                            <li id="entrees"><button onClick={showEntrees}>Entrees</button></li>
                            <li id="sides"><button>Sides</button></li>
                            <li id="breads"><button>Breads</button></li>
                            <li id="deserts"><button>Deserts</button></li>
                        </ul>
                    </nav>
                </aside>
    )
}

export default nav