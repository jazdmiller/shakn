import React from 'react'

const SearchContext = React.createContext({
    searchResults: [],
    searchInput: '',
    setSearchResults: () => {},
    setSearchInput: () => {},
})

export default SearchContext