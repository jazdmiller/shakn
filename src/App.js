
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search'
import Browse from './pages/Browse'
import About from './pages/About'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/browse" element={<Browse/>} />
      <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
