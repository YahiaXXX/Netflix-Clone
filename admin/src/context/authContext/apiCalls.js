import axios from "axios"
import {loginFailure, loginStart, loginSucces} from "./AuthAction"

export const login = async (user,dispatch)=>{
    dispatch(loginStart())
    try{
        const res = await axios.post("http://localhost:8800/server/auth/login",user)
        res.data.isAdmin && dispatch(loginSucces(res.data))

    }
    catch(err){
        dispatch(loginFailure())
    }

}