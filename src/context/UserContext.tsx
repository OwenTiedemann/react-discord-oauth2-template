import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "react-oauth2-code-pkce";

type TUserContext = {
    userId: string | undefined
}

export const UserContext = createContext<TUserContext>({
    userId: undefined
})

export const UserContextProvider : React.FC<PropsWithChildren> = ({children}) => {
    const [userId, setUserId] = useState<string | undefined>(undefined);

    const { token } = useContext(AuthContext);

    useEffect(() => {

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
        <UserContext.Provider value={{ userId: userId }}>
            {children}
        </UserContext.Provider>
    )
} 

