import './css/Catalogue.css'
import { useState } from 'react'
import RightHori from './RightHori'
import Man from './assets1/Man.jpg'
import Woman from "./assets1/Woman.jpg"
import fjacket from "./assets1/fjacket.jpg"
import fjeans from "./assets1/fjeans.jpg"
import fshirt from "./assets1/fshirt.jpg"
import fskirt from "./assets1/fskirt.jpg"
import fsweatpants from "./assets1/fsweatpants.jpg"
import ftop from "./assets1/ftop.jpg"
import mdenim from "./assets1/mdenim.jpg"
import mjacket from "./assets1/mjacket.jpg"
import mjeans from "./assets1/mjeans.jpg"
import mshirt from "./assets1/mshirt.jpg"
import mtrackpant from "./assets1/mtrackpant.jpg"
import mtshirt from "./assets1/mtshirt.jpg"


const lowerBodymen = [
  { src: mdenim, name: "Denim jeans" },
  { src: mjeans, name: "Jeans" },
  { src: mtrackpant, name: "Track Pants" }
]

const lowerBody = [
  { src: fsweatpants, name: "Sweat Pants" },
  { src: fskirt, name: "Skirts" },
  { src: fjeans, name: "Jeans" }
]

const upperBody = [
  { src: fjacket, name: "Jackets" },
  { src: fshirt, name: "Shirts" },
  { src: ftop, name: "Tops" }
]

const upperBodymen = [
  { src: mjacket, name: "Jackets" },
  { src: mshirt, name: "Shirts" },
  { src: mtshirt, name: "T-Shirts" }
]






function Catalogue() {

  const [option, setOption] = useState(true)
  return (
    <div className="rootdiv3">

      {/* LEFT BARS */}
  

   
  <div className="hori-right">
    <RightHori items={option ? lowerBodymen : lowerBody} />

    <RightHori items={option ? upperBodymen : upperBody} />
  </div>


                  
      {/* CATALOGUE CONTENT */}
      <div className="udivcat">
        <div className="udivcat-row">
          <p className="one">CATALOGUE</p>
          <div className="line"></div>
        </div>

        <div className="udivcat-row">
          <p className="two">कैटलॉग</p>
          <div className="line"></div>
        </div>

        <div className="udivcat-row">
          <p className="three">カタログ</p>
          <div className="line"></div>
        </div>
      </div>

      <div className="anotherwrap">

  <div
    className={`image-card ${option ? "active" : "inactive"}`}
    onClick={() => setOption(true)}
  >
    <img src={Man} alt="Man" />
    <span className="label">MAN</span>
  </div>

  <div
    className={`image-card ${option ? "inactive" : "active"}`}
    onClick={() => setOption(false)}
  >
    <img src={Woman} alt="Woman" />
    <span className="label">WOMAN</span>
  </div>

</div>


    </div>
  )
}

export default Catalogue
