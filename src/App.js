import './App.css';
import Header from './components/header'
import Nav from './components/nav';
import Card from './components/card'
import recipes from './recipes';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      {recipes.map(Card)}
    </div>
  );
}

export default App;
