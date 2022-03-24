import './App.css';
import Header from './layouts/header/Header';
import Footer from './layouts/footer/Footer';
import { Routes, Route } from 'react-router-dom';
import AboutUs from 'pages/about/AboutUs';
import Contact from 'pages/contact/Contact';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
