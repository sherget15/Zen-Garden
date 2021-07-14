

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/">Zen Garden</Route>
      <Route exact path="/home"></Route>
      <Route path="/new-plant"></Route>
      <Footer />
    </div>
  );
}

export default App;
