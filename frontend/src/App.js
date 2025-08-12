import logo from './logo.svg';
import './App.css';
import Contact from './Contact/Contact';
import NosMenus from  './NosMenus/NosMenus';
import AlainPassard from './AlainPassard/AlainPassard';
import Reservation from './Reservation/Reservation';
import LarrièreCuisine from './LarrièreCuisine/LarrièreCuisine';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          collaboration entre Wail et Romaissa bisous
        </p>
      </header>
    </div>
  );
}

export default App;
