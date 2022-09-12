import React, { createContext, useContext, useState } from "react";
import { Login } from "../api/api";
import PropTypes from 'prop-types';
const UserContext = createContext();

export const useUser = () =>useContext(UserContext)

export const UserProvider = ({children}) => {

    const [userID, setUserID] = useState("ıd");
    const [password,setPassword] = useState("password");

    const handleLogin =({userID,password})=>{
        Login({userID:userID,password:password}).then(
            response=>{
                console.log(response)
                setUserID(userID)
                setPassword(password)
            }
        )
    }

    return(
        
        <UserContext.Provider value={{
            userID,
            password,
            handleLogin
        }}>
            {children}
        </UserContext.Provider>

    )
}
UserProvider.propTypes={
    children:PropTypes.node.isRequired
}


