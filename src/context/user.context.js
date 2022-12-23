import { createContext, useEffect, useReducer } from "react";
import { auth } from "../utils/firebse";
import { onAuthStateChanged } from "firebase/auth";

export const userContext = createContext({
    // user: null,
    // error: null,
    // isLoading: false 
}) 

const initial = {
    user: null,
    error: null,
    isLoading: false,
    email: null
}

const userReducer = (state, action) => {
    const {payload, type} = action
    switch (type) {
        case "LOGIN":
            return {...state, user: payload};
        case "LOGOUT":
            return {...state, user: null}
        case "ERROR":
            return {...state, error: payload}
        case "EMAIL":
            return {...state, email: payload}
        default:
            return state;
    }

}

export const UserProvider = ({children}) => {

    const [state, dispatch] = useReducer(userReducer, initial)

    useEffect(() => {
        const authChange = onAuthStateChanged(auth, (user) => {
            
            if(user) {
                dispatch({type: "LOGIN", payload: user})
            }
            if(!user) {
                dispatch({type: "LOGOUT"})
            }
// console.log(user);
            return authChange
        })

       
        
    }, [])

    // console.log(state.user)

    return <userContext.Provider value={{...state, dispatch}}>{children}</userContext.Provider>
}