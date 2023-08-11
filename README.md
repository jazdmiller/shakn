# Shakn
Responsive cocktail recipe finder


## Description 
Shakn is  a responsive web app built with React that helps users find cocktail recipes based on category or by search functionality. <br>

**Key Features:**

- Search for cocktail recipes by name or ingredients
- Filter and browse cocktails based on various criteria (alcoholic/non-alcoholic, alcohol type)
- View detailed information about each cocktail recipe, including ingredients and preparation instructions
- Responsive design for seamless user experience across devices
- Integrated with TheCocktailDB API for a comprehensive cocktail database
- Blog display using Strapi


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
  - Users can click on a cocktail card to view more details, including ingredients, preparation instructions, glass type, and garnish

5. Exploere additional information:
  - Users can learn more about the website through the 'About Us' and 'Contact Us' pages


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
        |   |-- BlogPage
        |   |   |--BlogCard
        |   |      |-- ArticlePage
        |   |
        |   |-- AboutUsPage
        |
        |-- Footer
            |-- FooterLinks
            |-- NewsletterSubscription
