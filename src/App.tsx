import './App.css'

import { AppRouter } from './routes/routes'
import { AuthWrapper } from './wrappers/AuthWrapper'
import { UserContextProvider } from "./context/UserContext";

function App() {

  return (
    <AuthWrapper>
      <UserContextProvider>
        <AppRouter/>
      </UserContextProvider>
    </AuthWrapper>
  )
}

export default App
