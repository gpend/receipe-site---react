import './App.css';
import header from './components/header'
import nav from './components/nav';
import Card from './components/card'
import recipes from './recipes';

function App() {
  return (
    <div className="App">
      <header />
      <nav />
      {recipes.map(Card)}
    </div>
  );
}

export default App;
