import HeroVid from "../../assets/HeroVid.mp4"
import './css/Hero.css'
import outimg from "../../assets/outfit1.jpg"
import { Link } from "react-router-dom"

import { useState, useRef } from "react";




function Hero() {

const [showCatlog, setShowCatlog] = useState(false);

const showTimer = useRef(null);
const hideTimer = useRef(null);

const handleEnter = () => {
  clearTimeout(hideTimer.current);

  showTimer.current = setTimeout(() => {
    setShowCatlog(true);
  }, 150);
};

const handleLeave = () => {
  clearTimeout(showTimer.current);

  hideTimer.current = setTimeout(() => {
    setShowCatlog(false);
  }, 800); 
};

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
<div
  className="product_class"
  onMouseEnter={handleEnter}
  onMouseLeave={handleLeave}
>
        [ PRODUCT ]
      
         {showCatlog && (
  <div className="dropdown">
    <div className="drop_downCard">
      
      {/* MEN */}
      <div className="catalog-column">
        <h4 className="catalog-title">MEN</h4>
 <Link to="/2">Jackets & Coats</Link>
<Link to="/3">Hoodies</Link>
<Link to="/4">Track Pants</Link>
<Link to="/5">Footwear</Link>
<Link to="/6">Accessories</Link>


        
      </div>

      {/* WOMEN */}
      <div className="catalog-column">
        <h4 className="catalog-title">WOMEN</h4>
        <a href="#">Sweat pants</a>
        <a href="#">Dresses</a>
        <a href="#">Skirts</a>
        <a href="#">Tops</a>
        <a href="#">Shirts</a>
        <a href="#">Accessories</a>
      </div>

    </div>
  </div>
)}

   
  </div>
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
