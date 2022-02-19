// import recipes from "../recipes"
function nav(props){

    return(
        <aside className="left-nav">
                    <nav>
                        <label data-domain="🔍">
                        <input id="search--input" onKeyUp={(event) => {
                                if (event.key === "Enter"){
                                    props.Search(event)
                                }
                            }} />
                        </label>
                        <ul>
                            <li id="all"><button onClick={props.allClick}>All</button></li>
                            <li id="entrees"><button onClick={props.entreesClick}>Entrees</button></li>
                            <li id="sides"><button onClick={props.sidesClick}>Sides</button></li>
                            <li id="breads"><button onClick={props.breadsClick}>Breads</button></li>
                            <li id="deserts"><button onClick={props.desertsClick}>Deserts</button></li>
                        </ul>
                    </nav>
                </aside>
    )
}

export default nav

// <input id="search--input" onKeyUp={(event) => Search(event)} />