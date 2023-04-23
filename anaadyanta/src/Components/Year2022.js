import React from "react";
import '../Styles/Year2022.css';
import photo1 from '../Assets/photos/photo1_2022.JPG';
import photo2 from '../Assets/photos/photo2_2022.JPG';
import photo3 from '../Assets/photos/photo3_2022.JPG';
import photo4 from '../Assets/photos/photo4_2022.JPG';
import photo5 from '../Assets/photos/photo5_2022.JPG';
import photo6 from '../Assets/photos/photo6_2022.jpg';


function Year2022 (){
    return(
      <div className="year-2022">
      <h2 className="title-year-2022">2022</h2>
      <div class="row-2022-main">
      <div class="column-main-2022">
      <img src={photo1} className="ani" alt="" loading="lazy"/>
      </div>   
      <div class="row-2022">
      <div class="column-2022">
      <img src={photo2} className="ani" alt="" loading="lazy"/>
      <img src={photo3} className="ani" alt="" loading="lazy"/>
      <img src={photo6} className="ani" alt="" loading="lazy"/>
      </div>
      <div class="column-2022">
      <img src={photo4} className="ani" alt="" loading="lazy"/>
      <img src={photo5} className="ani" alt="" loading="lazy"/>
      </div>
      </div>
      </div>
      </div>
    );
}

export default Year2022;