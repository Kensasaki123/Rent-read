import Pattern from "./moreComp/Pattern"
import './css/Login.css'
import instaimg from '../assets/instagram-icon.png';
import goodimg from '../assets/pngwing.com.png'
import leftimg from '../assets/young-beautiful-woman-talking-phone-outside.jpg'

function Login() {
  return (<>
    
    <div className="login-page">

          <Pattern />

      <div className="rootdiv">
      <div className="leftspace">
        <img src={leftimg}  alt="" />
      </div>
      <div className="rightspace">
        <div className="wrapper">
          <div className="up_wrap">
            <button>Login</button>
            <div className="toggle">-</div>
            <button>Sign up</button>
          </div>
          <div className="down_wrap">
            <div className="down-fpart">
              <h2>Log in</h2>
              <input type="text" placeholder="Email" />
            </div>
            <div className="down-spart">
              <input type="text" placeholder="Password" />
              <button>Let's Rent</button>
            </div>
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
    </div>


        
   
    
    </>
  )
}

export default Login
