import logo from './logo.svg';
import './App.css';
import Contact from './Pages/Contact/Contact';
import NosMenus from  './Pages//NosMenus/NosMenus';
import Alain_Passard from './Pages/AlainPassard/Alain_Passard';
import Réservation from './Pages/Réservation/Réservation';
import ArrièreCuisine from './Pages/L’arrièreCuisine/ArrièreCuisine';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';



function App() {
  return (
    <Router>
      <Header/>
      {/* <Routes>
        <Route path="/" element={<Contact />} />
        <Route path="/NosMenus" element={<NosMenus />} />
        <Route path="/Alain_Passard" element={<Alain_Passard />} />
        <Route path="/Réservation" element={<Réservation />} />
        <Route path="/ArrièreCuisine" element={<ArrièreCuisine />} />
      </Routes> */}
    </Router> 
     );
}

export default App;
