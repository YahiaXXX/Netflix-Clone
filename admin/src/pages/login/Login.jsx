import React,{useState,useContext,useEffect} from 'react'
import { login } from '../../context/authContext/apiCalls'
import {AuthContext} from "../../context/authContext/AuthContext"
import './login.css'

function Login() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    // useEffect(() => {
    //     console.log(email)
    //     console.log(pwd)
        
       
    // }, [email,pwd]);
    const {isFetching,dispatch} = useContext(AuthContext)
    const handleLogin=(e)=>{
        e.preventDefault();
        login({email,password},dispatch)


    }
  return (
    <div className='login' >
        <form className='loginForm'>
            <input type="text" className="loginInput" placeholder='email...' onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" className="loginInput" placeholder='password...' onChange={(e)=>setPassword(e.target.value)} />
            <button className='loginBtn' onClick={handleLogin} disabled={isFetching} >Login</button>

        </form>
    </div>
  )
}

export default Login