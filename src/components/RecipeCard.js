import React from "react";
import Drink1 from '../assets/drink-img-1.jpg'
import Drink2 from '../assets/drink-img-2.jpg'
import Drink3 from '../assets/drink-img-3.jpg'

function RecipeCard() {
  return (
    <div>
      <div className=" pt-2 container">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-10 col-md-6 col-lg-4">
        <div class="card">
                <img src={Drink1} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
              </div>
              <div className="col-10 col-md-6 col-lg-4">
        <div class="card">
                <img src={Drink2} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
              </div>
              <div className="col-10 col-md-6 col-lg-4">
        <div class="card">
                <img src={Drink3} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
              </div>
        </div>
      </div>
    
    </div>
  );
}

export default RecipeCard;
