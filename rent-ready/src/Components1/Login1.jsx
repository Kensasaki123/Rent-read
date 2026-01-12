import React from 'react'
import './css/Login.css'




function Login1({email, setEmail, password, setPassword}) {
   
  


  return (

     <div className="down_wrap">
            <div className="down-fpart">
              <h2>Log in</h2>
              <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="down-spart">
              <input type="password" value={password} placeholder="Password" onChange={(e) => setEmail(e.target.value)} />
            </div>
           
          </div>
   
  )
}

export default Login1
