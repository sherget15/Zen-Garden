

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/">Zen Garden</Route>
      <Route exact path="/home">Recipes</Route>
      <Route path="/new-plant"></Route>
      <Footer />
    </div>
  );
}

export default App;
