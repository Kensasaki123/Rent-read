import React from 'react'
import './css/Login.css'


function Login1({ username, setUsername, email, setEmail, password, setPassword}) {
  return (
  
       <div className="down_wrap">
            <div className="down-fpart">
              <h2>Sign Up</h2>
              <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
              
            </div>
            <div className="down-mpart">
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="down-spart">
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              
            </div>
           
          </div>
 
  )
}

export default Login1
