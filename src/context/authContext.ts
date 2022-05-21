import React, {createContext, Dispatch} from 'react';

interface AuthContext {
    isAuth: boolean
    setIsAuth: Dispatch<React.SetStateAction<boolean>>
}

export const AuthContext = createContext<AuthContext>({
    isAuth: false,
    setIsAuth: () => {}
})