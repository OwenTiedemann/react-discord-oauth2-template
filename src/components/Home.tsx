import React, {useContext} from "react"
import { AuthContext } from "react-oauth2-code-pkce"
import { Navigate } from "react-router-dom"
import { UserContext } from "../context/UserContext";

export const Home : React.FC = () => {

  const { token, loginInProgress, logOut } = useContext(AuthContext)

  const { userId, logoutUser } = useContext(UserContext)

  if (loginInProgress) {
    return null
  }

  if (!token) {
    return (
      <Navigate to={'/login'}/>
    )
  }

  const logoutFunction = () => {
    logOut()
    logoutUser()
  }

  return (
    <div>
      <>{userId}</>
      <br/>
      <button onClick={logoutFunction}>Log Out</button>
    </div>
  );
}

