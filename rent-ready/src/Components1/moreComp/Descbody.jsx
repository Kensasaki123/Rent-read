import { useState } from 'react'
import './css/Descbody.css'
import outfit2 from './../../assets/outfit2.jpg'
import outfit3 from './../../assets/outfit3.jpg'
import outfit4 from './../../assets/outfit4.jpg'

const desc = [
  {
    h2 : "Our Mission",
    content : "The mission of our team rent-ready is to provide an eco-friendly renting service for our customers"
  }
]



function Descbody() {

  const [signal, setSignal] = useState(0)

  return (
    <>
      <div className='root3'>
        <div>
        <div className='up-part'>
        <div className="ver-part">
  <div className="ver-inner">
    <p>For the People</p>
    <p>By the People</p>
  </div>
</div>

        <div className='hor-inner'> LIVE BOLDLY. DRESS BOLDLY</div> 
         </div></div>
         <div className='img-mid-root'>
         <div className="img-div">
  <div className="img-card" onClick={() => setSignal(1)}>
    <img src={outfit2} alt="" />
    <span className="img-text">ABOUT US</span>
  </div>

  <div className="img-card" onClick={() => setSignal(0)}>
    <img src={outfit3} alt="" />
    <span className="img-text">OUR MISSION</span>
  </div>

  <div className="img-card" onClick={() => setSignal(2)}>
    <img src={outfit4} alt="" />
    <span className="img-text">OUR STORY</span>
  </div>
</div>

         </div>
      </div>
    </>
  )
}

export default Descbody
