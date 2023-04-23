import React from "react";
import '../Styles/Year2021.css'
import photo1 from '../Assets/photos/photo1_2021.jpg'
import photo2 from '../Assets/photos/photo2_2021.jpg'
import photo3 from '../Assets/photos/photo3_2021.jpg'
import photo4 from '../Assets/photos/photo4_2021.jpg'
import photo5 from '../Assets/photos/photo5_2021.jpg'
import photo7 from '../Assets/photos/photo7_2021.jpg'
import photo8 from '../Assets/photos/photo8_2021.jpeg'

function Year2021 (){
    return(
      <div className="year-2021">
      <h2 className="title-year-2021">2021</h2>
      <div class="row-2021">
      <div class="column-main-2021">
      <img src={photo8} className="ani" alt=""/>
      </div>   
      <div class="row-2021">
      <div class="column-2021">
      <img src={photo1} className="ani" alt=""/>
      <img src={photo3} className="ani" alt=""/>
      <img src={photo7} className="ani" alt=""/>
      </div>
      <div class="column-2021">
      <img src={photo4} className="ani" alt=""/>
      <img src={photo5} className="ani" alt=""/>
      <img src={photo2} className="ani" alt=""/>
      </div>
      </div>
      </div>
      </div>
    );
}

export default Year2021;