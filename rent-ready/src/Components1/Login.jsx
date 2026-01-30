import './css/Login.css'
import { useState } from "react";
import leftimg from '../assets/young-beautiful-woman-talking-phone-outside.jpg'
import Login1 from "./Login1";
import Signup from "./Signup"
import instaimg from '../assets/instagram-icon.png';
import goodimg from '../assets/pngwing.com.png'

function Login() {
   const [sign, setSign] = useState(true)
   const [email, setEmail] = useState("")
   const [username, setUsername] = useState("")
   const [password, setPassword] = useState("")
   
   
  async function handlePost() {
  try {
    const res = await fetch("https://rent-read.onrender.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    if (!res.ok) {
      throw new Error("Request failed");
    }

    const data = await res.text();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

   
   

  return (<>


    
    <div className="login-page">

          

      <div className="rootdiv">
      <div className="leftspace">
        <img src={leftimg}  alt="" />
      </div>
      <div className="rightspace">
        
        <div className="wrapper">
          <div className="up_wrap">
            <button onClick={() => setSign(true)}>Login</button>
            <div className="toggle">-</div>
            <button onClick={() => setSign(false)}>Sign up</button>
          </div>
          {sign ? 
          <Login1 
           email={email}
           setEmail={setEmail}
           password={password}
           setPassword={setPassword}
            /> : 
          <Signup
           email={email}
           setEmail={setEmail}
           password={password}
           setPassword={setPassword}
           username={username}
           setUsername={setUsername} />}
            <button className='postbtn' onClick={handlePost}>Let's Rent</button>
            <div className="social_med">
              <div className="insta">
                <img src={instaimg} height={50} alt="" />
              </div>
              <div className="google">
                <img src={goodimg} height={50} alt="" />
              </div>
            </div>
       
        </div>
      </div>
    </div>
    </div>


        
   
    
    </>
  )
}

export default Login
