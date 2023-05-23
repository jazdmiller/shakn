
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search'
import Browse from './pages/Browse'
import About from './pages/About'
import RecipeDetail from './pages/RecipeDetail'

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
      <Route path="/recipe" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
