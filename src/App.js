import './App.css';
import Header from 'layouts/header/Header';
import Footer from 'layouts/footer/Footer';
import AppRoutes from 'pages/Routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
