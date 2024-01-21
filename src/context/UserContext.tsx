import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "react-oauth2-code-pkce";

type TUserContext = {
    userId: string | undefined,
    logoutUser: () => void
}

export const UserContext = createContext<TUserContext>({
    userId: undefined,
    logoutUser: () => {}
})

export const UserContextProvider : React.FC<PropsWithChildren> = ({children}) => {
    const [userId, setUserIdState] = useState<string | undefined>(undefined);

    const { token } = useContext(AuthContext);

    const setUserId = (id : string ) => {
        setUserIdState(id)
        localStorage.setItem('user.id', id)
    }

    const logoutUser = () => {
        setUserIdState(undefined)
        localStorage.removeItem('user.id')
    }

    useEffect(() => {

        const localUserId = localStorage.getItem('user.id')

        if (localUserId && token) {
            setUserIdState(localUserId)
            return
        }

        if (token) {
            fetch('https://discord.com/api/users/@me', {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }).then((response) => {
                return response.json()
            }).then((data) => {
                if (data?.id) {
                    setUserId(data.id)
                }
            })
        }

    }, [token])

    return (
        <UserContext.Provider value={{ userId: userId, logoutUser: logoutUser }}>
            {children}
        </UserContext.Provider>
    )
} 

