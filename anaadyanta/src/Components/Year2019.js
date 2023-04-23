import React from "react";
import '../Styles/Year2019.css'
import photo1 from '../Assets/photos/photo1.JPG'
import photo2 from '../Assets/photos/photo2.jpg'
import photo3 from '../Assets/photos/photo3.jpg'
import photo4 from '../Assets/photos/photo4.jpg'
import photo5 from '../Assets/photos/photo5.jpg'
import photo6 from '../Assets/photos/photo6.jpg'

function Year2019 (){
    return(
        <div className="year-2019">
        <h2 className="title-year-2019">2019</h2>
        <div class="row-2019-main">
        <div class="column-main-2019">
        <img src={photo4} className="ani" alt="" loading="lazy"/>
        </div>
        </div>        
        <div class="row-2019">
        <div class="column-2019">
        <img src={photo1} className="ani" alt="" loading="lazy"/>
        <img src={photo5} className="ani" alt="" loading="lazy"/>
        </div>
        <div class="column-2019">
        <img src={photo2} className="ani" alt="" loading="lazy"/>
        <img src={photo3} className="ani" alt="" loading="lazy"/>
        <img src={photo6} className="ani" alt="" loading="lazy"/>
        </div>
        </div>
        </div>
    );
}

export default Year2019;