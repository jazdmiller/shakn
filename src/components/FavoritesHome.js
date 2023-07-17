import React from 'react'
import RecipeCard from './RecipeCard'
import Drink1 from '../assets/drink-img-1.jpg'
import Drink2 from '../assets/drink-img-2.jpg'
import Drink3 from '../assets/drink-img-3.jpg'
import FavoriteCard from './FavoriteCard'

function FavoritesHome() {
  return (
    <div>
        <div className=" feature-padding container">
        <div className="row mx-3">
          <div className="col home-label-text">Favorites</div>
        </div>
        <div className="row mx-2">
        </div>
        <div className="col">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <FavoriteCard />
          </div>
        </div>
      </div>
    </div>
  
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
      </div>
    </div>
  )
}

export default FavoritesHome