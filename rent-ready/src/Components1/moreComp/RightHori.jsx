import { useState } from "react"
import "./css/RightHori.css"

function RightHori({ items }) {
  const [index, setIndex] = useState(0)

 



  return (
    <div className="right-hori">
      <button className="nav-btn" onClick={() => setIndex((index + 1) % items.length)} >▲</button>

      <div className="viewport">
      <img src={items[index].src} height={200} alt={items[index].name} />
      <span>{items[index].name}</span>
      </div>

      <button className="nav-btn" onClick={() => setIndex((index - 1 + items.length) % items.length)} >▼</button>
    </div>
  )
}

export default RightHori
