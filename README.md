# Shakn
Responsive cocktail recipe finder 


## Description 
Shakn is  a responsive web app built with React that helps users find cocktail recipes based on category or by search functionality.
Technologies used: JSX, React, HTML, CSS, Bootstrap, Framer Motion <br>

**Key Features:**

- Integrated with TheCocktailDB API for a comprehensive cocktail database
- Search for cocktail recipes by name or ingredient
- Filter and browse cocktails based on various criteria (alcoholic/non-alcoholic, spirit type)
- View detailed information about each cocktail recipe, including ingredients and preparation instructions
- Responsive design using Bootstrap and Framer Motion for seamless user experience across devices



## User Flow

1. Landing Page:
  - Users arrive on the landing page, which presents the website's logo, tagline, and featured cocktails
  - The main focus is the search bar, encouraging users to search for cocktail recipes
  - Call-to-action buttons prompt users to sign up or log in

2. Search for cocktail recipes:
  - Users can search for recipes using the search bar by entering cocktail names or ingredients
  - Alternatively, users can navigate to the 'Browse Cocktails' section

3. Cocktail Index Page:
  - Users can browse the cocktail cards displayed in a grid format

4. Cocktail Recipe Detail Page:
  - Users can click on a cocktail card to view more details, including ingredients and preparation instructions

5. Exploere additional information:
  - Users can learn more about the website through the 'About Us' page


## Component Hierarchy

        App
        |
        |-- Header
        |   |-- Logo
        |   |-- NavigationMenu
        |   |   |-- MenuItem
        |   |-- SearchBar
        |
        |-- Main (Pages managed by React Router)
        |   |-- LandingPage
        |   |   |-- FeaturedCocktails
        |   |
        |   |-- BrowseCocktailsPage
        |   |   |-- FilterOptions
        |   |   |-- CocktailList
        |   |       |-- CocktailCard
        |   | 
        |   |
        |   |-- CocktailRecipeDetailPage
        |   |   |-- CocktailDetails
        |   |   |-- IngredientsList
        |   |   |-- PreparationInstructions
        |   |
        |   |
        |   |-- AboutUsPage
