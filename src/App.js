import React from "react";
// import './App.css';
import Header from './components/header';
import Nav from './components/nav';
import Card from './components/card'
import recipes from './recipes';

function App() {
  const [filteredRecipes, setFilteredRecipes] = React.useState(recipes)

  function ShowEntrees(){
    let recipesFiltered = recipes.filter(recipe => recipe.category === "entree")
    setFilteredRecipes(recipesFiltered)
  }

  function ShowBreads(){
    let recipesFiltered = recipes.filter(recipe => recipe.category === "bread")
    setFilteredRecipes(recipesFiltered)
  }

  function ShowSides(){
    let recipesFiltered = recipes.filter(recipe => recipe.category === "side")
    setFilteredRecipes(recipesFiltered)
  }

  function ShowDeserts(){
    let recipesFiltered = recipes.filter(recipe => recipe.category === "desert")
    setFilteredRecipes(recipesFiltered)
  }

  function ShowAll(){
    setFilteredRecipes(recipes)
  }

  function CardSelected(cardId){
    let recipesFiltered = recipes.filter(recipe => recipe.id === cardId)
    setFilteredRecipes(recipesFiltered)
  }

//TODO add search

  return (
    <div className="App">
      <Header />
      <div className='container container-body'>
        <Nav
          allClick = {ShowAll}
          entreesClick={ShowEntrees}
          breadsClick ={ShowBreads}
          sidesClick  ={ShowSides}
          desertsClick={ShowDeserts}
        />
        <div className='container container-recipes'>
        {(filteredRecipes.map( item => {
          return (
            <Card
              key = {item.id}
              item = {item}
              CardSelected = {CardSelected}
            />
          )
        }))}  
        </div>
      </div>
    </div>
  );
}

export default App;
