import React, { useContext } from "react"
import { AuthContext } from "react-oauth2-code-pkce"



export const Login : React.FC = () => {

    const { login } = useContext(AuthContext)

    return (
        <button onClick={() => {login()}}>Login to Discord</button>
    )
}