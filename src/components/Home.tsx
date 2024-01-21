import React, {useContext} from "react"
import { AuthContext } from "react-oauth2-code-pkce"
import { Navigate } from "react-router-dom"
import { UserContext } from "../context/UserContext";

export const Home : React.FC = ({}) => {

  const { token, loginInProgress, logOut } = useContext(AuthContext)

  const { userId } = useContext(UserContext)

  if (loginInProgress) {
    return null
  }

  if (!token) {
    return (
      <Navigate to={'/login'}/>
    )
  }

  return (
    <div>
      <>{userId}</>
      <br/>
      <button onClick={() => {logOut()}}>Log Out</button>
    </div>
  );
}

