import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ApiCall from './components/ApiCall';

function App() {
  return (
    <div className="App">
      <h1>Show those Pokémon!</h1>
      <ApiCall/>
    </div>
  );
}

export default App;
