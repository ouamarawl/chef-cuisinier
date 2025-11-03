import "./App.css";
import Contact from "./Pages/Contact/Contact";
import Alain_Passard from "./Pages/AlainPassard/Alain_Passard";
import Réservation from "./Pages/Réservation/Réservation";
import Larriere_cuisine from "./Pages/larriere_cuisine/Larriere_cuisine";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./ScrollToTop";
import Buffets from "./Pages/buffets/Buffets";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Athmane_ouamara" element={<Alain_Passard />} />
        <Route path="/Réservation" element={<Réservation />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Larriere_cuisinet" element={<Larriere_cuisine />} />
        <Route path="/Buffets" element={<Buffets />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;