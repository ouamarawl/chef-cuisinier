import './App.css';
import Contact from './Pages/Contact/Contact';
import NosMenus from './Pages/NosMenus/NosMenus';
import Alain_Passard from './Pages/AlainPassard/Alain_Passard';
import Réservation from './Pages/Réservation/Réservation';
import ArrièreCuisine from './Pages/ArrièreCuisine/ArrièreCuisine';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/NosMenus" element={<NosMenus />} />
        <Route path="/Alain_Passard" element={<Alain_Passard />} />
        <Route path="/Réservation" element={<Réservation />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}


export default App;
