import logo from '../src/assets/logo.png'
import './App.css';
import Home from './pages/Home';
import PortfolioSingle from './pages/PortfolioSingle';
import PageNotFound from './pages/PageNotFound';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='portfolio' element={<PortfolioSingle />} />
        <Route path='about' element={<AboutPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
