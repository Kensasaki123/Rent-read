import React from 'react'
import { Link } from "react-router-dom";
import HeroVid from "../../assets/HeroVid.mp4"
import './css/Hero.css'
import outimg from "../../assets/outfit1.jpg"



function Hero() {
  return (
    <div className="hero">
      <video className="hero-video" src={HeroVid} autoPlay muted loop />

      <div className="hero-overlay">
  <div className="navbar">
   <div className="logo">RENT READY</div>
   <div className="navele">
   <div className="navele1">
   <div>[ HOME ]</div>
   <div>[ ABOUT ]</div>
  </div>
 <div className="navele2">
  <div>[ CAMPAIGN ]</div>
  <div>[ GALLERY ]</div>
  <div>[ PRODUCT ]</div>
 </div>
 <div className="navele3">
  <div>[ CART ]</div>
  <Link to="/login">
<button class="button" data-text="Awesome">
    <span class="actual-text">&nbsp;Login&nbsp;</span>
    <span aria-hidden="true" class="hover-text">&nbsp;Login&nbsp;</span>
</button>
    </Link>
 </div>
 </div>
        </div>
       

        <div className="hero-middle">
          <div className='punchline'>
           The NEXT <span>TREND</span>
          </div>
          <div className='itemdesc'>
              <p>
    A modern cold-weather essential for everyday streetwear. This outfit features an oversized puffer jacket layered over a black hoodie for warmth and comfort. Relaxed straight-fit trousers keep the look clean, while chunky combat boots add durability and edge. Finished with a knit beanie, it’s versatile, practical, and ideal for urban wear in cooler weather.
  </p>
          </div>
        
        </div>

       <div className="hero-content">
  <h1 className="hero-text">RENT READY</h1>
  <img className="hero-cut" src={outimg} alt="Outfit" />
</div>

      </div>
    </div>
  );
}

export default Hero
