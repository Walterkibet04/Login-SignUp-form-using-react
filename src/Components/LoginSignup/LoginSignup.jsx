import React, { useState } from 'react'
import './LoginSignup.css'
import mail from '../Assets/mail.png'
import padlock from '../Assets/padlock.png'
import user from '../Assets/user.png'



const LoginSignup = () => {

  const [action, setAction] = useState("Login");

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"? <div></div>:
        <div className="input">
        <img src={user} alt="" />
        <input type="text" placeholder='Enter your Fullnames'/>
      </div> }
        
        <div className="input">
          <img src={mail} alt="" />
          <input type="email" placeholder='Enter your email address'/>
        </div>
        <div className="input">
          <img src={padlock} alt="" />
          <input type="password" placeholder='Password'/>
        </div>
      </div>
      {action==="Sign Up"? <div></div>: <div className="forgot-password" >Forgot password? <span>Click here</span></div>}
      
      <div className="submit-container">
        <div className={action==="Login"? "submit gray": "submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"? "submit gray": "submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
  )
}

export default LoginSignup;
