import './App.css';
import Header from './components/header'
import Nav from './components/nav';
import Card from './components/card'
import recipes from './recipes';

function App() {
  const recipeItems = recipes.map( item => {
    return (
      <Card
        key = {item.id}
        item = {item}
      />
    )
  })
  return (
    <div className="App">
      <Header />
      <Nav />
      {recipeItems}
    </div>
  );
}

export default App;
