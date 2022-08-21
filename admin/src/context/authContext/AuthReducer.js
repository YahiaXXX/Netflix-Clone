export const AuthReducer=(state,action)=>{
    switch(action.type){
        case "LOGIN_START":
            return {
                user:null,
                isFetching:true,
                error:false
            }
        case "LOGIN_SUCCES":
            return {
                user:action.payload,
                isFetching:false,
                error:false
            }
        case "LOGIN_FAILURE":
            return {
                user:null,
                isFetching:false,
                error:true
            }
        case "LOGOUT":
                return {
                    user:null,
                    isFetching:false,
                    error:true
                }    
        default: return {...state}    
    }
} 