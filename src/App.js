import './App.css';
import Header from 'layouts/header/Header';
import Footer from 'layouts/footer/Footer';
import AppRoutes from 'pages/Routes';

function App() {
  return (
    <div className="app">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
