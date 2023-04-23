import React from "react";
import '../Styles/Year2020.css'
import photo1 from '../Assets/photos/photo1_2020.jpg'
import photo2 from '../Assets/photos/photo2_2020.jpg'
import photo3 from '../Assets/photos/photo3_2020.jpg'
import photo4 from '../Assets/photos/photo4_2020.jpg'
import photo5 from '../Assets/photos/photo5_2020.jpg'

function Year2020 (){
    return(
      <div className="year-2020">
      <h2 className="title-year-2020">2020</h2>
      <div class="row-2020-main">
      <div class="column-main-2020">
      <img src={photo1} className="ani" alt="" loading="lazy"/>
      </div>   
      <div class="row-2020">
      <div class="column-2020">
      <img src={photo2} className="ani" alt="" loading="lazy"/>
      <img src={photo3} className="ani" alt="" loading="lazy"/>
      </div>
      <div class="column-2020">
      <img src={photo5} className="ani" alt="" loading="lazy"/>
      <img src={photo4} className="ani" alt="" loading="lazy"/>
      </div>
      </div>
      </div>
      </div>
    );
}

export default Year2020;