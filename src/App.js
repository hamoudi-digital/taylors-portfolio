import './App.css';
import Home from './pages/Home';
import PortfolioSingle from './pages/PortfolioSingle';
import PageNotFound from './pages/PageNotFound';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='portfolio' element={<PortfolioSingle />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
