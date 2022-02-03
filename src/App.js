import React from "react";
// import './App.css';
import Header from './components/header';
import Nav from './components/nav';
import Card from './components/card'
import recipes from './recipes';

function App() {
  const [recipeItems, setRecipeItems] = React.useState(recipes.map( item => {
    return (
      <Card
        key = {item.id}
        item = {item}
      />
    )
  }))  

  return (
    <div className="App">
      <Header />
      <div className='container container-body'>
        <Nav />
        <div className='container container-recipes'>
          {recipeItems}
        </div>
      </div>
    </div>
  );
}

export default App;

// TODO fix nav buttons
// TODO update heading sizes
// TODO add margins to cards 