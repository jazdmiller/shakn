
import './App.css';
import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search'
import Browse from './pages/Browse'
import About from './pages/About'
import RecipeDetail from './pages/RecipeDetail'
import SearchContext from './components/SearchContext'
import { useEffect, useState } from 'react';
import Results from './pages/Results';
import Blog from './pages/Blog';
import Article from './pages/Article';
import BrowseAll from './pages/BrowseAll';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

function AppContent() {

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  const [searchResults, setSearchResults] = useState([])
  const [searchInput, setSearchInput] = useState('')

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults, searchInput, setSearchInput}}>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/about" element={<About />} />
      <Route path="/article/:id" element={<Article />} />
      <Route path="/recipe/random" element={<RecipeDetail />} />
      <Route path="/recipe/:id" element={<RecipeDetail />} />
      <Route path="/results/:category" element={<Results />} />
      <Route path="/results/nonalcoholic" element={<Results />}/>
      <Route path="/results" element={<Results />} />
      </Routes>

    </SearchContext.Provider>
  );
}

export default App;
