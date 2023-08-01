
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search'
import Browse from './pages/Browse'
import About from './pages/About'
import RecipeDetail from './pages/RecipeDetail'
import SearchContext from './components/SearchContext'
import { useState } from 'react';
import Results from './pages/Results';
import Blog from './pages/Blog';
import Article from './pages/Article';

function App() {
  const [searchResults, setSearchResults] = useState([])
  const [searchInput, setSearchInput] = useState('')

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults, searchInput, setSearchInput}}>
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/browse" element={<Browse/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/about" element={<About />} />
      <Route path="/article/:id" element={<Article />} />
      <Route path="/recipe/:id" element={<RecipeDetail />} />
      <Route path="/recipe/random" element={<RecipeDetail />} />
      <Route path="/results/:category" element={<Results />} />
      <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
    </SearchContext.Provider>
  );
}

export default App;
