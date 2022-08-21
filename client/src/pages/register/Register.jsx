import React,{useState,useRef} from 'react'
import "./register.scss"

function Register() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const emailRef=useRef()
    const passwordRef=useRef()
    const handleStart=()=>{
        setEmail(emailRef.current.value)
    }
    const handleFinish=()=>{
        setPassword(passwordRef.current.value)
    }
  return (
    <div className='register' >
     <div className="top">
     <div className="wrapper">
     <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
      <button className='loginButton' >Sign in</button>
     </div>
        
     </div>
     <div className="container">
        <h1>Unlimited movies,tv shows and more.</h1>
        <h2>Watch anywhere,Cancel anytime</h2>
        <p>Ready to watch??Enter your email to create or restart your membership</p>
        {!email ? (
            <div className='input' >
            <input ref={emailRef} type="email" placeholder='email address'/>
            <button onClick={handleStart} className='registerButton' >Get Started</button>

        </div>
        )  : (
            <div className='input' >
            <input ref={passwordRef} type="password" placeholder='password'/>
            <button onClick={handleFinish} className='registerButton' >Start</button>

        </div>
        )}
     </div>
    </div>
  )
}

export default Register